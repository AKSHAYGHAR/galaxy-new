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
        <div className="hidden lg:block fixed right-6 top-32 z-40 w-[160px]">
            <div className="sticky top-32 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 p-4 overflow-hidden">
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-1173628680206450"
                    data-ad-slot="1234567891"
                    data-ad-format="vertical"
                />
            </div>
        </div>
    );
};

export default SidebarAd;
