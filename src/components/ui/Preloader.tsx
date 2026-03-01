import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // The total time for typing to complete before triggering exit
        const timer = setTimeout(() => {
            setShow(false);
        }, 2800); // Wait 2.8 seconds before starting exit

        return () => clearTimeout(timer);
    }, []);

    const text = "HOMOGOMO";

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {show && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
                >
                    {/* Animated colorful subtle background to hint at the HOMOGOMO colorfulness */}
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay animate-pulse" />

                    <div className="relative z-10 flex">
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.15, // Typewriter effect speed
                                    ease: "easeOut",
                                }}
                                className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] uppercase"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
