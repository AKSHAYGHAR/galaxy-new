import React from 'react';

// Import a mix of desktop and mobile wallpapers for the collage
import d1 from '@/assets/desktop-batch1-1.jpg';
import d2 from '@/assets/desktop-batch1-2.jpg';
import d3 from '@/assets/desktop-batch1-3.jpg';
import d4 from '@/assets/desktop-batch1-4.jpg';
import d5 from '@/assets/desktop-batch1-5.jpg';
import d6 from '@/assets/desktop-batch1-6.jpg';

import m1 from '@/assets/mobile-batch2-1.jpg';
import m2 from '@/assets/mobile-batch2-2.jpg';
import m3 from '@/assets/mobile-batch2-3.jpg';
import m4 from '@/assets/mobile-batch2-4.jpg';
import m5 from '@/assets/mobile-batch2-5.jpg';
import m6 from '@/assets/mobile-batch2-6.jpg';

const wallpapers = [
    d1, m1, d2, m2, d3, m3,
    d4, m4, d5, m5, d6, m6
];

const WallpaperBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden">
            {/* Dark Overlay for readability - kept strong as requested (black side me) */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />

            {/* Marquee Grid */}
            <div className="absolute inset-0 flex gap-4 p-4 opacity-40 transform -rotate-6 scale-110">
                {/* Column 1 - Down */}
                <div className="flex flex-col gap-4 animate-marquee-down">
                    {[...wallpapers, ...wallpapers].map((src, i) => (
                        <div key={`c1-${i}`} className="w-64 h-96 shrink-0 rounded-lg overflow-hidden shadow-2xl">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>

                {/* Column 2 - Up */}
                <div className="flex flex-col gap-4 animate-marquee-up" style={{ animationDuration: '45s' }}>
                    {[...wallpapers, ...wallpapers].reverse().map((src, i) => (
                        <div key={`c2-${i}`} className="w-64 h-96 shrink-0 rounded-lg overflow-hidden shadow-2xl">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>

                {/* Column 3 - Down */}
                <div className="flex flex-col gap-4 animate-marquee-down" style={{ animationDuration: '55s' }}>
                    {[...wallpapers, ...wallpapers].map((src, i) => (
                        <div key={`c3-${i}`} className="w-64 h-96 shrink-0 rounded-lg overflow-hidden shadow-2xl">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>

                {/* Column 4 - Up */}
                <div className="flex flex-col gap-4 animate-marquee-up" style={{ animationDuration: '50s' }}>
                    {[...wallpapers, ...wallpapers].reverse().map((src, i) => (
                        <div key={`c4-${i}`} className="w-64 h-96 shrink-0 rounded-lg overflow-hidden shadow-2xl">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>
                {/* Column 5 - Down */}
                <div className="flex flex-col gap-4 animate-marquee-down" style={{ animationDuration: '60s' }}>
                    {[...wallpapers, ...wallpapers].map((src, i) => (
                        <div key={`c5-${i}`} className="w-64 h-96 shrink-0 rounded-lg overflow-hidden shadow-2xl">
                            <img src={src} alt="" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WallpaperBackground;

