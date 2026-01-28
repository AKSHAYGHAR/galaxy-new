import React from 'react';

const GalaxyBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden">
            {/* Pure Black Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Star Field - Twinkling White Stars */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full opacity-0 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Shooting Stars (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full rotate-45">
                <div className="absolute top-[20%] left-[20%] w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-[shoot_4s_ease-in-out_infinite]" />
                <div className="absolute top-[60%] left-[50%] w-[1px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-[shoot_7s_ease-in-out_infinite_2s]" />
            </div>

            <style>{`
        @keyframes shoot {
            0% { transform: translateY(-100px); opacity: 0; }
            10% { opacity: 0.5; }
            20% { transform: translateY(calc(100vh + 100px)); opacity: 0; }
            100% { transform: translateY(calc(100vh + 100px)); opacity: 0; }
        }
       `}</style>
        </div>
    );
};

export default GalaxyBackground;
