import React from 'react';

const GalaxyBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden perspective-1000">
            {/* Base: Pure Black */}
            <div className="absolute inset-0 bg-black" />

            {/* Nebula Clouds - Colorful and Dynamic */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute top-[60%] right-[15%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute bottom-[10%] left-[30%] w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
                <div className="absolute top-[40%] right-[40%] w-[350px] h-[350px] bg-pink-500/15 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '1s' }} />
            </div>

            {/* Layer 1: Distant Stars (Sharp, tiny, various colors) */}
            <div className="absolute inset-0">
                {[...Array(200)].map((_, i) => {
                    const colors = ['bg-white', 'bg-blue-200', 'bg-purple-200', 'bg-cyan-200', 'bg-pink-200'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    return (
                        <div
                            key={`star-dist-${i}`}
                            className={`absolute ${color} rounded-full opacity-60 animate-pulse`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 0.5}px`,
                                height: `${Math.random() * 2 + 0.5}px`,
                                animationDuration: `${Math.random() * 4 + 2}s`,
                                opacity: Math.random() * 0.5 + 0.3
                            }}
                        />
                    );
                })}
            </div>

            {/* Layer 2: Mid-range Stars (Brighter, colorful, slow float) */}
            <div className="absolute inset-0">
                {[...Array(60)].map((_, i) => {
                    const colors = ['bg-white', 'bg-blue-300', 'bg-purple-300', 'bg-cyan-300'];
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    return (
                        <div
                            key={`star-mid-${i}`}
                            className={`absolute ${color} rounded-full animate-float opacity-80`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 3 + 1.5}px`,
                                height: `${Math.random() * 3 + 1.5}px`,
                                animationDuration: `${Math.random() * 15 + 20}s`,
                                animationDelay: `${Math.random() * 5}s`,
                                boxShadow: `0 0 ${Math.random() * 4 + 2}px currentColor`
                            }}
                        />
                    );
                })}
            </div>

            {/* Shooting Stars (Multiple, Colorful) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[20%] w-[200px] h-[2px] bg-gradient-to-l from-transparent via-blue-300 to-transparent opacity-0 animate-[shoot_12s_ease-in-out_infinite]" />
                <div className="absolute top-[50%] left-[15%] w-[150px] h-[2px] bg-gradient-to-l from-transparent via-purple-300 to-transparent opacity-0 animate-[shoot_18s_ease-in-out_infinite_4s]" />
                <div className="absolute top-[70%] right-[40%] w-[180px] h-[2px] bg-gradient-to-l from-transparent via-cyan-300 to-transparent opacity-0 animate-[shoot_15s_ease-in-out_infinite_8s]" />
            </div>

            {/* Twinkling Bright Stars */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`twinkle-${i}`}
                        className="absolute bg-white rounded-full animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.6
                        }}
                    />
                ))}
            </div>

            {/* Radial Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-radial-gradient-to-tr from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>
    );
};

export default GalaxyBackground;
