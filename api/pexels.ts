import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow GET
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const apiKey = process.env.VITE_PEXELS_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: "API key not configured" });
    }

    const { query, orientation, per_page, page } = req.query;

    if (!query) {
        return res.status(400).json({ error: "query is required" });
    }

    const params = new URLSearchParams({
        query: String(query),
        ...(orientation && { orientation: String(orientation) }),
        ...(per_page && { per_page: String(per_page) }),
        ...(page && { page: String(page) }),
    });

    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?${params.toString()}`,
            {
                headers: {
                    Authorization: apiKey,
                },
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({ error: `Pexels API error: ${response.status}` });
        }

        const data = await response.json();

        // Allow cross-origin so the frontend can always access this
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

        return res.status(200).json(data);
    } catch (err) {
        console.error("Pexels proxy error:", err);
        return res.status(500).json({ error: "Failed to fetch from Pexels" });
    }
}
