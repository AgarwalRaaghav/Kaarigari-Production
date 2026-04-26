import AboutSection from "../components/AboutSection";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { Eye, Zap, Shield, Sparkles } from "lucide-react";

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-8">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070" 
            alt="Cinematic gear"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center max-w-4xl">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.4em] text-white/60 mb-6 block">Our Story</span>
            <h1 
              className="text-6xl md:text-9xl text-white mb-8 leading-[0.9]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The Art of <br />
              <em className="italic text-white/40">Preservation.</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />

      {/* Values Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 
              className="text-4xl md:text-6xl font-serif mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Our Core Principles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Behind every frame is a philosophy that guides our lens. We believe in authenticity, precision, and the power of light.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Eye,
              title: "Observation",
              desc: "We look beyond the surface to find the hidden narratives that make every story unique."
            },
            {
              icon: Zap,
              title: "Intensity",
              desc: "Every cut, every grade, and every sound cue is calculated for maximum emotional impact."
            },
            {
              icon: Shield,
              title: "Integrity",
              desc: "We respect the truth of the moment, preserving memories with uncompromising honesty."
            },
            {
              icon: Sparkles,
              title: "Alchemy",
              desc: "Transforming the ordinary into the extraordinary through technical mastery."
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                <item.icon className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-white transition-colors" />
                <h3 className="text-xl font-serif mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team/Spirit Section */}
      <section className="py-32 px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <h2 
              className="text-4xl md:text-7xl font-serif leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              A Collective of <br />
              <em className="italic text-muted-foreground">Dreamers & Doers.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Kaarigari is more than a production house; it's a sanctuary for visual thinkers. Our team comprises award-winning directors who have spent decades perfecting the language of cinema.
              </p>
              <p>
                We collaborate with brands and individuals who seek more than just coverage—they seek a legacy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
}
