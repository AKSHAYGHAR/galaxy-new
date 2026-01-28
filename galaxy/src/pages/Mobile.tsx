import Logo from "@/components/layout/Logo";
import WallpaperCard from "@/components/shared/WallpaperCard";
import SectionLabel from "@/components/shared/SectionLabel";
import { NavLink } from "@/components/layout/NavLink";
import GalaxyBackground from "@/components/shared/GalaxyBackground";

// Bulk imports
/*
import bulk1 from "@/assets/mobile-bulk-1.jfif";
import bulk2 from "@/assets/mobile-bulk-2.jfif";
import bulk3 from "@/assets/mobile-bulk-3.jfif";
import bulk4 from "@/assets/mobile-bulk-4.jfif";
import bulk5 from "@/assets/mobile-bulk-5.jfif";
import bulk6 from "@/assets/mobile-bulk-6.jfif";
import bulk7 from "@/assets/mobile-bulk-7.jfif";
import bulk8 from "@/assets/mobile-bulk-8.jfif";
import bulk9 from "@/assets/mobile-bulk-9.jfif";
import bulk10 from "@/assets/mobile-bulk-10.jfif";
import bulk11 from "@/assets/mobile-bulk-11.jfif";
import bulk12 from "@/assets/mobile-bulk-12.jfif";
import bulk13 from "@/assets/mobile-bulk-13.jfif";
import bulk14 from "@/assets/mobile-bulk-14.jfif";
import bulk15 from "@/assets/mobile-bulk-15.jfif";
import bulk16 from "@/assets/mobile-bulk-16.jfif";
import bulk17 from "@/assets/mobile-bulk-17.jfif";
import bulk18 from "@/assets/mobile-bulk-18.jfif";
import bulk19 from "@/assets/mobile-bulk-19.jfif";
import bulk20 from "@/assets/mobile-bulk-20.jfif";
import bulk21 from "@/assets/mobile-bulk-21.jfif";
import bulk22 from "@/assets/mobile-bulk-22.jfif";
import bulk23 from "@/assets/mobile-bulk-23.jfif";
*/

// Batch 2 imports
/*
import batch2_1 from "@/assets/mobile-batch2-1.jpg";
import batch2_2 from "@/assets/mobile-batch2-2.jpg";
... (rest of batch2)
*/

// Batch 3 imports
/*
import batch3_1 from "@/assets/mobile-batch3-1.jpg";
... (rest of batch3)
*/

// Batch 5 generation (13 images)
const batch5Wallpapers = Array.from({ length: 13 }, (_, i) => {
  const num = i + 1;
  return {
    src: new URL(`../assets/mobile-batch5-${num}.jpg`, import.meta.url).href,
    alt: `Batch 5 wallpaper ${num}`,
    filename: `galaxy-mobile-batch5-${num}.jpg`
  };
}).reverse();

// Batch 4 generation (28 images)
const batch4Wallpapers = Array.from({ length: 28 }, (_, i) => {
  const num = i + 1;
  return {
    src: new URL(`../assets/mobile-batch4-${num}.jpg`, import.meta.url).href,
    alt: `Batch 4 wallpaper ${num}`,
    filename: `galaxy-mobile-batch4-${num}.jpg`
  };
}).reverse();

export const mobileWallpapers = [
  // Newest first (Batch 5)
  ...batch5Wallpapers,

  // Batch 4
  ...batch4Wallpapers,
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
