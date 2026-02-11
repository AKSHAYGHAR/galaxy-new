import { useEffect } from "react";

interface InFeedAdProps {
    className?: string;
}

const InFeedAd = ({ className = "" }: InFeedAdProps) => {
    useEffect(() => {
        try {
            if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (error) {
            console.error("AdSense error:", error);
        }
    }, []);

    return (
        <div className={`w-full flex items-center justify-center ${className}`}>
            <div className="w-full max-w-[350px] min-h-[280px] bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 flex items-center justify-center overflow-hidden">
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-6t+ed+2i-1n-4w"
                    data-ad-client="ca-pub-1173628680206450"
                    data-ad-slot="1234567890"
                />
            </div>
        </div>
    );
};

export default InFeedAd;
