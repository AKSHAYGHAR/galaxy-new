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
const batch1Wallpapers = generateWallpapers("desktop-batch1", 7);
const bulkWallpapers = generateWallpapers("desktop-bulk", 105);

export const desktopWallpapers = [
  ...batch1Wallpapers,
  ...bulkWallpapers,
];

const Desktop = () => {
  return (
    <div className="min-h-screen bg-transparent relative isolate">
      <GalaxyBackground />

      <Logo />
      <NavLink to="/mobile" className="fixed top-6 right-6 md:right-12 lg:right-24 z-50 text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground">
        Mobile
      </NavLink>

      <main className="px-6 md:px-12 lg:px-24 pt-24 pb-24">
        <section className="max-w-6xl mx-auto">
          <SectionLabel>Desktop</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {desktopWallpapers.map((wallpaper, index) => (
              <WallpaperCard
                key={`desktop-${index}`}
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

export default Desktop;
