import { useEffect } from "react";

const SidebarAd = () => {
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
        <div className="hidden lg:block fixed right-6 top-32 z-40 w-[140px]">
            <div className="sticky top-32 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 p-2 overflow-hidden">
                <ins
                    className="adsbygoogle"
                    style={{ display: "inline-block", width: "120px", height: "1200px" }}
                    data-ad-client="ca-pub-1173628680206450"
                    data-ad-slot="1305520689"
                />
            </div>
        </div>
    );
};

export default SidebarAd;
