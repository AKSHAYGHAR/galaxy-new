import Logo from "@/components/layout/Logo";
import WallpaperCard from "@/components/shared/WallpaperCard";
import SectionLabel from "@/components/shared/SectionLabel";
import { NavLink } from "@/components/layout/NavLink";
import GalaxyBackground from "@/components/shared/GalaxyBackground";
import AdSenseAd from "@/components/ads/AdSenseAd";
import InFeedAd from "@/components/ads/InFeedAd";
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
const batch6Wallpapers = generateWallpapers("mobile-batch6", 36);
const batch4Wallpapers = generateWallpapers("mobile-batch4", 28);
const batch3Wallpapers = generateWallpapers("mobile-batch3", 49);
const batch2Wallpapers = generateWallpapers("mobile-batch2", 28);
const bulkWallpapers = generateWallpapers("mobile-bulk", 23, "jfif");

export const mobileWallpapers = [
  ...batch6Wallpapers,
  ...batch4Wallpapers,
  ...batch3Wallpapers,
  ...batch2Wallpapers,
  ...bulkWallpapers,
];

const Mobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-transparent relative isolate"
    >
      <GalaxyBackground />

      <Logo />
      <NavLink to="/desktop" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Desktop
      </NavLink>

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <section className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionLabel>Mobile</SectionLabel>
          </motion.div>

          {/* Top Banner Ad */}
          <div className="mb-12">
            <AdSenseAd
              adSlot="1234567894"
              adFormat="auto"
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
          >
            {mobileWallpapers.map((wallpaper, index) => (
              <motion.div key={`mobile-${index}`} variants={itemVariants}>
                <WallpaperCard
                  key={`mobile-${index}`}
                  src={wallpaper.src}
                  alt={wallpaper.alt}
                  filename={wallpaper.filename}
                />
                {/* In-feed Ad every 12 wallpapers */}
                {(index + 1) % 12 === 0 && index !== mobileWallpapers.length - 1 && (
                  <InFeedAd key={`ad-${index}`} />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Ad */}
          <div className="mt-12">
            <AdSenseAd
              adSlot="1234567895"
              adFormat="auto"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Mobile;

