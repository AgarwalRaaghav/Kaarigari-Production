import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import { motion } from "motion/react";

export default function Studio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <WorkSection />
      <ServicesSection />
      <div className="py-32 px-8 max-w-7xl mx-auto">
        <ContactSection />
      </div>
    </motion.div>
  );
}
