import React from 'react';

const GalaxyBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden perspective-1000">
            {/* Base: Pure Black */}
            <div className="absolute inset-0 bg-black" />

            {/* (Removed Horizon Glow for deep black) */}

            {/* Layer 1: Distant Stars (Sharp, tiny, slow fade) */}
            <div className="absolute inset-0">
                {[...Array(150)].map((_, i) => (
                    <div
                        key={`star-dist-${i}`}
                        className="absolute bg-white rounded-full opacity-40 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 1 + 0.5}px`,
                            height: `${Math.random() * 1 + 0.5}px`,
                            animationDuration: `${Math.random() * 5 + 3}s`,
                            opacity: Math.random() * 0.3 + 0.1
                        }}
                    />
                ))}
            </div>

            {/* Layer 2: Mid-range Stars (Brighter, slow float) */}
            <div className="absolute inset-0">
                {[...Array(40)].map((_, i) => (
                    <div
                        key={`star-mid-${i}`}
                        className="absolute bg-white rounded-full animate-float opacity-70"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDuration: `${Math.random() * 15 + 20}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Shooting Stars (Rare, White, Fast) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[5%] right-[20%] w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent opacity-0 animate-[shoot_15s_ease-in-out_infinite]" />
                <div className="absolute top-[40%] left-[10%] w-[100px] h-[1px] bg-gradient-to-l from-transparent via-white/50 to-transparent opacity-0 animate-[shoot_23s_ease-in-out_infinite_7s]" />
            </div>

            {/* Film Grain / Noise Overlay (Optional - Simulated with low opacity pattern or simplified) */}
            {/* Added a subtle vignette instead for focus */}
            <div className="absolute inset-0 bg-radial-gradient-to-tr from-transparent via-transparent to-black/80 pointer-events-none" />
        </div>
    );
};

export default GalaxyBackground;
