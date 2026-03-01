import Logo from "@/components/layout/Logo";
import WallpaperCard from "@/components/shared/WallpaperCard";
import SectionLabel from "@/components/shared/SectionLabel";
import { NavLink } from "@/components/layout/NavLink";
import GalaxyBackground from "@/components/shared/GalaxyBackground";
import AdSenseAd from "@/components/ads/AdSenseAd";
import InFeedAd from "@/components/ads/InFeedAd";
import SidebarAd from "@/components/ads/SidebarAd";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 12 } },
};

// Helper to generate wallpaper objects
const generateWallpapers = (prefix: string, count: number, ext: string = "jpg") =>
  Array.from({ length: count }, (_, i) => {
    const num = i + 1;
    return {
      src: new URL(`../assets/${prefix}-${num}.${ext}`, import.meta.url).href,
      alt: `${prefix} wallpaper ${num}`,
      filename: `galaxy-${prefix}-${num}.${ext}`
    };
  }).reverse();

// Generate batches
const batch1Wallpapers = generateWallpapers("desktop-batch1", 7);
const bulkWallpapers = generateWallpapers("desktop-bulk", 105);

export const desktopWallpapers = [
  ...batch1Wallpapers,
  ...bulkWallpapers,
];

const Desktop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-transparent relative isolate"
    >
      <GalaxyBackground />

      <Logo />
      <NavLink to="/mobile" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Mobile
      </NavLink>

      {/* Sidebar Ad - Desktop Only */}
      <SidebarAd />

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionLabel>Desktop</SectionLabel>
          </motion.div>

          {/* Top Banner Ad */}
          <div className="mb-12">
            <AdSenseAd
              adSlot="1234567892"
              adFormat="horizontal"
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {desktopWallpapers.map((wallpaper, index) => (
              <motion.div key={`desktop-${index}`} variants={itemVariants}>
                <WallpaperCard
                  src={wallpaper.src}
                  alt={wallpaper.alt}
                  filename={wallpaper.filename}
                />
                {/* In-feed Ad every 12 wallpapers */}
                {(index + 1) % 12 === 0 && index !== desktopWallpapers.length - 1 && (
                  <InFeedAd key={`ad-${index}`} />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Ad */}
          <div className="mt-12">
            <AdSenseAd
              adSlot="1234567893"
              adFormat="horizontal"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Desktop;

