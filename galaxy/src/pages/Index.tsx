import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { Features } from "@/components/shared/Features";
import { Footer } from "@/components/layout/Footer";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

import { Counter } from "@/components/ui/counter";
import { desktopWallpapers } from "./Desktop";
import { mobileWallpapers } from "./Mobile";
import GalaxyBackground from "@/components/shared/GalaxyBackground";

const Index = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative isolate">
      <GalaxyBackground />
      <div className="relative">
        <ResponsiveHeroBanner
          backgroundImageUrl=""
          title="GALAXY"
          titleLine2=""
          description="Curated for desktop & mobile"
          badgeLabel=""
          badgeText=""
          primaryButtonText="Browse Desktop"
          primaryButtonHref="/desktop"
          secondaryButtonText="Browse Mobile"
          secondaryButtonHref="/mobile"
          navLinks={[
            { label: "Desktop", href: "/desktop" },
            { label: "Mobile", href: "/mobile" },
          ]}
          showPwaInstall={showInstall}
          onPwaInstall={handleInstall}
          partners={[]}
          partnersTitle=""
          ctaButtonText=""
          logoUrl="/galaxy-logo.jpg"
          stats={
            <>
              <Counter to={desktopWallpapers.length} label="Desktop" delay={0.5} />
              <div className="h-12 w-px bg-white/20" />
              <Counter to={mobileWallpapers.length} label="Mobile" delay={0.7} />
            </>
          }
        />
      </div>

      <Features />
      <Footer />
    </div>
  );
};



export default Index;
