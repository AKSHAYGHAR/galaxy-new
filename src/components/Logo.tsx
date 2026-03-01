import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-6 z-50"
    >
      <Link to="/" aria-label="Go to Home" className="group">
        <button className="text-sm font-bold tracking-[0.2em] text-white uppercase bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-all shadow-lg focus:outline-none">
          HOMOGOMO
        </button>
      </Link>
    </motion.div>
  );
};

export default Logo;
