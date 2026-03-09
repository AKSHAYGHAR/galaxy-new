import { useState } from "react";
import { CurtainButton } from "@/components/ui/curtain-button";
import { motion } from "framer-motion";

interface WallpaperCardProps {
  src: string;
  alt: string;
  filename: string;
  photographer?: string;
  photographerUrl?: string;
  downloadSrc?: string;
}

const WallpaperCard = ({ src, alt, filename, photographer, photographerUrl, downloadSrc }: WallpaperCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = async () => {
    try {
      const fetchSrc = downloadSrc || src;
      const response = await fetch(fetchSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Ensure we use the correct filename/extension
      // If filename doesn't have an extension, try to derive from blob type or default to jpg
      let finalFilename = filename;
      if (!filename.includes('.')) {
        const type = blob.type.split('/')[1] || 'jpg';
        finalFilename = `${filename}.${type}`;
      }

      link.download = finalFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative p-3 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm"
        style={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)"
        }}
      >
        <div className="relative overflow-hidden rounded-xl bg-black/20">
          <img
            src={imgError ? "/placeholder.svg" : src}
            alt={alt}
            className={`w-full h-auto object-cover transition-all duration-300 ease-apple ${isLoading ? "opacity-0" : "opacity-100"
              }`}
            style={{
              ...(imgError ? { objectFit: "contain", padding: "2rem", backgroundColor: "#f3f4f6" } : {})
            }}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              console.error("Image load error:", src);
              setImgError(true);
              setIsLoading(false);
            }}
          />

          {isLoading && !imgError && (
            <div className="absolute inset-0 bg-muted/20 animate-pulse" />
          )}

          {imgError && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
              Failed to load image
            </div>
          )}

          {/* Photographer credit badge */}
          {photographer && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-3 left-3"
            >
              <a
                href={photographerUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium text-white/90 bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors duration-200"
              >
                <span>📸</span>
                <span>{photographer}</span>
              </a>
            </motion.div>
          )}

          {/* Download button with ghost curtain animation */}
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
              x: "-50%"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-6 left-1/2"
          >
            <CurtainButton
              text="Download"
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-6 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WallpaperCard;
