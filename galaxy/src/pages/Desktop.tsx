import Logo from "@/components/layout/Logo";
import WallpaperCard from "@/components/shared/WallpaperCard";
import SectionLabel from "@/components/shared/SectionLabel";
import { NavLink } from "@/components/layout/NavLink";
import GalaxyBackground from "@/components/shared/GalaxyBackground";

// Bulk Imports
import bulk1 from "@/assets/desktop-bulk-1.jpg";
import bulk2 from "@/assets/desktop-bulk-2.jpg";
import bulk3 from "@/assets/desktop-bulk-3.jpg";
import bulk4 from "@/assets/desktop-bulk-4.jpg";
import bulk5 from "@/assets/desktop-bulk-5.jpg";
import bulk6 from "@/assets/desktop-bulk-6.jpg";
import bulk7 from "@/assets/desktop-bulk-7.jpg";
import bulk8 from "@/assets/desktop-bulk-8.jpg";
import bulk9 from "@/assets/desktop-bulk-9.jpg";
import bulk10 from "@/assets/desktop-bulk-10.jpg";
import bulk11 from "@/assets/desktop-bulk-11.jpg";
import bulk12 from "@/assets/desktop-bulk-12.jpg";
import bulk13 from "@/assets/desktop-bulk-13.jpg";
import bulk14 from "@/assets/desktop-bulk-14.jpg";
import bulk15 from "@/assets/desktop-bulk-15.jpg";
import bulk16 from "@/assets/desktop-bulk-16.jpg";
import bulk17 from "@/assets/desktop-bulk-17.jpg";
import bulk18 from "@/assets/desktop-bulk-18.jpg";
import bulk19 from "@/assets/desktop-bulk-19.jpg";
import bulk20 from "@/assets/desktop-bulk-20.jpg";
import bulk21 from "@/assets/desktop-bulk-21.jpg";
import bulk22 from "@/assets/desktop-bulk-22.jpg";
import bulk23 from "@/assets/desktop-bulk-23.jpg";
import bulk24 from "@/assets/desktop-bulk-24.jpg";
import bulk25 from "@/assets/desktop-bulk-25.jpg";
import bulk26 from "@/assets/desktop-bulk-26.jpg";
import bulk27 from "@/assets/desktop-bulk-27.jpg";
import bulk28 from "@/assets/desktop-bulk-28.jpg";
import bulk30 from "@/assets/desktop-bulk-30.jpg";
import bulk31 from "@/assets/desktop-bulk-31.jpg";
import bulk32 from "@/assets/desktop-bulk-32.jpg";
import bulk33 from "@/assets/desktop-bulk-33.jpg";
import bulk34 from "@/assets/desktop-bulk-34.jpg";
import bulk35 from "@/assets/desktop-bulk-35.jpg";
import bulk36 from "@/assets/desktop-bulk-36.jpg";
import bulk37 from "@/assets/desktop-bulk-37.jpg";
import bulk38 from "@/assets/desktop-bulk-38.jpg";
import bulk39 from "@/assets/desktop-bulk-39.jpg";
import bulk40 from "@/assets/desktop-bulk-40.jpg";
import bulk41 from "@/assets/desktop-bulk-41.jpg";
import bulk43 from "@/assets/desktop-bulk-43.jpg";
import bulk44 from "@/assets/desktop-bulk-44.jpg";
import bulk45 from "@/assets/desktop-bulk-45.jpg";
import bulk46 from "@/assets/desktop-bulk-46.jpg";
import bulk47 from "@/assets/desktop-bulk-47.jpg";
import bulk48 from "@/assets/desktop-bulk-48.jpg";
import bulk49 from "@/assets/desktop-bulk-49.jpg";
import bulk50 from "@/assets/desktop-bulk-50.jpg";
import bulk51 from "@/assets/desktop-bulk-51.jpg";
import bulk52 from "@/assets/desktop-bulk-52.jpg";
import bulk53 from "@/assets/desktop-bulk-53.jpg";
import bulk54 from "@/assets/desktop-bulk-54.jpg";
import bulk55 from "@/assets/desktop-bulk-55.jpg";
import bulk56 from "@/assets/desktop-bulk-56.jpg";
import bulk57 from "@/assets/desktop-bulk-57.jpg";
import bulk58 from "@/assets/desktop-bulk-58.jpg";
import bulk59 from "@/assets/desktop-bulk-59.jpg";
import bulk60 from "@/assets/desktop-bulk-60.jpg";
import bulk61 from "@/assets/desktop-bulk-61.jpg";
import bulk62 from "@/assets/desktop-bulk-62.jpg";
import bulk63 from "@/assets/desktop-bulk-63.jpg";
import bulk64 from "@/assets/desktop-bulk-64.jpg";

// Batch 4 generation (6 images: 82-87)
const batch4Wallpapers = Array.from({ length: 6 }, (_, i) => {
  const num = i + 82;
  return {
    src: new URL(`../assets/desktop-bulk-${num}.jpg`, import.meta.url).href,
    alt: `Desktop wallpaper ${num}`,
    filename: `galaxy-desktop-${num}.jpg`
  };
}).reverse();

// Batch 3 generation (16 images: 66-81) - 65 removed by request
const batch3Wallpapers = Array.from({ length: 16 }, (_, i) => {
  const num = i + 66;
  return {
    src: new URL(`../assets/desktop-bulk-${num}.jpg`, import.meta.url).href,
    alt: `Desktop wallpaper ${num}`,
    filename: `galaxy-desktop-${num}.jpg`
  };
}).reverse();

export const desktopWallpapers = [
  // Newest first (Batch 4)
  ...batch4Wallpapers,

  // Batch 3
  ...batch3Wallpapers,

  // Batch 2 (Manual imports)
  { src: bulk64, alt: "Desktop wallpaper 64", filename: "galaxy-desktop-64.jpg" },
  { src: bulk63, alt: "Desktop wallpaper 63", filename: "galaxy-desktop-63.jpg" },
  { src: bulk62, alt: "Desktop wallpaper 62", filename: "galaxy-desktop-62.jpg" },
  { src: bulk61, alt: "Desktop wallpaper 61", filename: "galaxy-desktop-61.jpg" },
  { src: bulk60, alt: "Desktop wallpaper 60", filename: "galaxy-desktop-60.jpg" },
  { src: bulk59, alt: "Desktop wallpaper 59", filename: "galaxy-desktop-59.jpg" },
  { src: bulk58, alt: "Desktop wallpaper 58", filename: "galaxy-desktop-58.jpg" },
  { src: bulk57, alt: "Desktop wallpaper 57", filename: "galaxy-desktop-57.jpg" },
  { src: bulk56, alt: "Desktop wallpaper 56", filename: "galaxy-desktop-56.jpg" },
  { src: bulk55, alt: "Desktop wallpaper 55", filename: "galaxy-desktop-55.jpg" },
  { src: bulk54, alt: "Desktop wallpaper 54", filename: "galaxy-desktop-54.jpg" },
  { src: bulk53, alt: "Desktop wallpaper 53", filename: "galaxy-desktop-53.jpg" },
  { src: bulk52, alt: "Desktop wallpaper 52", filename: "galaxy-desktop-52.jpg" },
  { src: bulk51, alt: "Desktop wallpaper 51", filename: "galaxy-desktop-51.jpg" },
  { src: bulk50, alt: "Desktop wallpaper 50", filename: "galaxy-desktop-50.jpg" },
  { src: bulk49, alt: "Desktop wallpaper 49", filename: "galaxy-desktop-49.jpg" },
  { src: bulk48, alt: "Desktop wallpaper 48", filename: "galaxy-desktop-48.jpg" },
  { src: bulk47, alt: "Desktop wallpaper 47", filename: "galaxy-desktop-47.jpg" },
  { src: bulk46, alt: "Desktop wallpaper 46", filename: "galaxy-desktop-46.jpg" },
  { src: bulk45, alt: "Desktop wallpaper 45", filename: "galaxy-desktop-45.jpg" },
  { src: bulk44, alt: "Desktop wallpaper 44", filename: "galaxy-desktop-44.jpg" },
  { src: bulk43, alt: "Desktop wallpaper 43", filename: "galaxy-desktop-43.jpg" },
  { src: bulk41, alt: "Desktop wallpaper 41", filename: "galaxy-desktop-41.jpg" },
  { src: bulk1, alt: "Desktop wallpaper 1", filename: "galaxy-desktop-01.jpg" },
  { src: bulk2, alt: "Desktop wallpaper 2", filename: "galaxy-desktop-02.jpg" },
  { src: bulk3, alt: "Desktop wallpaper 3", filename: "galaxy-desktop-03.jpg" },
  { src: bulk4, alt: "Desktop wallpaper 4", filename: "galaxy-desktop-04.jpg" },
  { src: bulk5, alt: "Desktop wallpaper 5", filename: "galaxy-desktop-05.jpg" },
  { src: bulk6, alt: "Desktop wallpaper 6", filename: "galaxy-desktop-06.jpg" },
  { src: bulk7, alt: "Desktop wallpaper 7", filename: "galaxy-desktop-07.jpg" },
  { src: bulk8, alt: "Desktop wallpaper 8", filename: "galaxy-desktop-08.jpg" },
  { src: bulk9, alt: "Desktop wallpaper 9", filename: "galaxy-desktop-09.jpg" },
  { src: bulk10, alt: "Desktop wallpaper 10", filename: "galaxy-desktop-10.jpg" },
  { src: bulk11, alt: "Desktop wallpaper 11", filename: "galaxy-desktop-11.jpg" },
  { src: bulk12, alt: "Desktop wallpaper 12", filename: "galaxy-desktop-12.jpg" },
  { src: bulk13, alt: "Desktop wallpaper 13", filename: "galaxy-desktop-13.jpg" },
  { src: bulk14, alt: "Desktop wallpaper 14", filename: "galaxy-desktop-14.jpg" },
  { src: bulk15, alt: "Desktop wallpaper 15", filename: "galaxy-desktop-15.jpg" },
  { src: bulk16, alt: "Desktop wallpaper 16", filename: "galaxy-desktop-16.jpg" },
  { src: bulk17, alt: "Desktop wallpaper 17", filename: "galaxy-desktop-17.jpg" },
  { src: bulk18, alt: "Desktop wallpaper 18", filename: "galaxy-desktop-18.jpg" },
  { src: bulk19, alt: "Desktop wallpaper 19", filename: "galaxy-desktop-19.jpg" },
  { src: bulk20, alt: "Desktop wallpaper 20", filename: "galaxy-desktop-20.jpg" },
  { src: bulk21, alt: "Desktop wallpaper 21", filename: "galaxy-desktop-21.jpg" },
  { src: bulk22, alt: "Desktop wallpaper 22", filename: "galaxy-desktop-22.jpg" },
  { src: bulk23, alt: "Desktop wallpaper 23", filename: "galaxy-desktop-23.jpg" },
  { src: bulk24, alt: "Desktop wallpaper 24", filename: "galaxy-desktop-24.jpg" },
  { src: bulk25, alt: "Desktop wallpaper 25", filename: "galaxy-desktop-25.jpg" },
  { src: bulk26, alt: "Desktop wallpaper 26", filename: "galaxy-desktop-26.jpg" },
  { src: bulk27, alt: "Desktop wallpaper 27", filename: "galaxy-desktop-27.jpg" },
  { src: bulk28, alt: "Desktop wallpaper 28", filename: "galaxy-desktop-28.jpg" },
  { src: bulk30, alt: "Desktop wallpaper 30", filename: "galaxy-desktop-30.jpg" },
  { src: bulk31, alt: "Desktop wallpaper 31", filename: "galaxy-desktop-31.jpg" },
  { src: bulk32, alt: "Desktop wallpaper 32", filename: "galaxy-desktop-32.jpg" },
  { src: bulk33, alt: "Desktop wallpaper 33", filename: "galaxy-desktop-33.jpg" },
  { src: bulk34, alt: "Desktop wallpaper 34", filename: "galaxy-desktop-34.jpg" },
  { src: bulk35, alt: "Desktop wallpaper 35", filename: "galaxy-desktop-35.jpg" },
  { src: bulk36, alt: "Desktop wallpaper 36", filename: "galaxy-desktop-36.jpg" },
  { src: bulk37, alt: "Desktop wallpaper 37", filename: "galaxy-desktop-37.jpg" },
  { src: bulk38, alt: "Desktop wallpaper 38", filename: "galaxy-desktop-38.jpg" },
  { src: bulk39, alt: "Desktop wallpaper 39", filename: "galaxy-desktop-39.jpg" },
  { src: bulk40, alt: "Desktop wallpaper 40", filename: "galaxy-desktop-40.jpg" },
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
