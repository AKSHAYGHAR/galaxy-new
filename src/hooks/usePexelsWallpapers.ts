import { useState, useCallback, useEffect } from "react";

export interface PexelsPhoto {
    id: number;
    photographer: string;
    photographer_url: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        portrait: string;
    };
    alt: string;
}

export interface PexelsWallpaper {
    src: string;
    downloadSrc: string;
    alt: string;
    filename: string;
    photographer: string;
    photographerUrl: string;
}

// ─── Use a server-side proxy so the API key is never exposed to the browser
// and to avoid any CORS issues on Vercel.
const IS_DEV = import.meta.env.DEV;

// In dev, call Pexels directly (env var available via Vite).
// In production (Vercel), route through our serverless function at /api/pexels.
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY as string | undefined;

const DESKTOP_QUERIES = [
    "nature wallpaper",
    "landscape wallpaper",
    "abstract wallpaper",
    "city wallpaper",
    "space wallpaper",
];

const MOBILE_QUERIES = [
    "aesthetic wallpaper",
    "portrait nature",
    "mobile wallpaper",
    "vertical wallpaper",
    "sky wallpaper",
];

async function fetchFromPexels(
    query: string,
    orientation: "landscape" | "portrait",
    page: number
): Promise<{ photos: PexelsPhoto[]; total_results: number }> {
    const params = new URLSearchParams({
        query,
        orientation,
        per_page: "24",
        page: String(page),
    });

    if (IS_DEV && PEXELS_API_KEY) {
        // Local dev: call Pexels API directly
        const res = await fetch(`https://api.pexels.com/v1/search?${params}`, {
            headers: { Authorization: PEXELS_API_KEY },
        });
        if (!res.ok) throw new Error(`Pexels error: ${res.status}`);
        return res.json();
    } else {
        // Production: use our Vercel serverless proxy
        const res = await fetch(`/api/pexels?${params}`);
        if (!res.ok) throw new Error(`Pexels proxy error: ${res.status}`);
        return res.json();
    }
}

export function usePexelsWallpapers(orientation: "landscape" | "portrait") {
    const [wallpapers, setWallpapers] = useState<PexelsWallpaper[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [queryIndex, setQueryIndex] = useState(0);
    const [initialized, setInitialized] = useState(false);

    const queries = orientation === "landscape" ? DESKTOP_QUERIES : MOBILE_QUERIES;

    const fetchWallpapers = useCallback(
        async (currentPage: number, currentQueryIndex: number) => {
            // In dev, we still need the API key
            if (IS_DEV && (!PEXELS_API_KEY || PEXELS_API_KEY === "YOUR_PEXELS_API_KEY_HERE")) {
                setError("api_key_missing");
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const query = queries[currentQueryIndex % queries.length];
                const data = await fetchFromPexels(query, orientation, currentPage);
                const photos: PexelsPhoto[] = data.photos;

                if (!photos || photos.length === 0) {
                    // Switch to next query topic
                    setQueryIndex((q) => q + 1);
                    setPage(1);
                    setHasMore(true);
                    setIsLoading(false);
                    return;
                }

                const newWallpapers: PexelsWallpaper[] = photos.map((photo) => {
                    const imgSrc =
                        orientation === "landscape"
                            ? photo.src.large2x || photo.src.large
                            : photo.src.portrait;

                    const safePhotographer = photo.photographer
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "");

                    return {
                        src: imgSrc,
                        downloadSrc: photo.src.original,
                        alt: photo.alt || `${orientation} wallpaper by ${photo.photographer}`,
                        filename: `pexels-${orientation}-${safePhotographer}-${photo.id}.jpg`,
                        photographer: photo.photographer,
                        photographerUrl: photo.photographer_url,
                    };
                });

                setWallpapers((prev) => [...prev, ...newWallpapers]);
                setPage(currentPage + 1);

                if (data.total_results <= currentPage * 24) {
                    setQueryIndex((q) => q + 1);
                    setPage(1);
                }

                setHasMore(true);
            } catch (err) {
                console.error("Pexels fetch error:", err);
                setError("fetch_failed");
            } finally {
                setIsLoading(false);
            }
        },
        [orientation, queries]
    );

    // Auto-load on mount (no need to wait for scroll)
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            fetchWallpapers(1, 0);
        }
    }, [initialized, fetchWallpapers]);

    const loadMore = useCallback(() => {
        fetchWallpapers(page, queryIndex);
    }, [fetchWallpapers, page, queryIndex]);

    // Keep loadInitial for backwards compatibility (Desktop/Mobile pages still call it)
    const loadInitial = useCallback(() => {
        if (wallpapers.length === 0 && !isLoading) {
            fetchWallpapers(1, 0);
        }
    }, [wallpapers.length, isLoading, fetchWallpapers]);

    return { wallpapers, isLoading, hasMore, error, loadMore, loadInitial };
}
