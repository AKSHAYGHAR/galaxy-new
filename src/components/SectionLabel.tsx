import { motion } from "framer-motion";

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {children}
      </span>
    </motion.div>
  );
};

export default SectionLabel;
