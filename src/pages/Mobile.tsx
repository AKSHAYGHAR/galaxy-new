import Logo from "@/components/layout/Logo";
import WallpaperCard from "@/components/shared/WallpaperCard";
import SectionLabel from "@/components/shared/SectionLabel";
import { NavLink } from "@/components/layout/NavLink";
import GalaxyBackground from "@/components/shared/GalaxyBackground";

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
    <div className="min-h-screen bg-transparent relative isolate">
      <GalaxyBackground />

      <Logo />
      <NavLink to="/desktop" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Desktop
      </NavLink>

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <section className="max-w-7xl mx-auto">
          <SectionLabel>Mobile</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {mobileWallpapers.map((wallpaper, index) => (
              <WallpaperCard
                key={`mobile-${index}`}
                src={wallpaper.src}
                alt={wallpaper.alt}
                filename={wallpaper.filename}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mobile;
