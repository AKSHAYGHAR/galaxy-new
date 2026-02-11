import { useEffect } from "react";

interface AdSenseAdProps {
    adSlot: string;
    adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
    fullWidthResponsive?: boolean;
    className?: string;
}

const AdSenseAd = ({
    adSlot,
    adFormat = "auto",
    fullWidthResponsive = true,
    className = "",
}: AdSenseAdProps) => {
    useEffect(() => {
        try {
            // Push ad to AdSense queue
            if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error("AdSense error:", error);
        }
    }, []);

    return (
        <div className={`adsense-container ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1173628680206450"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    );
};

export default AdSenseAd;
