import AboutSection from "../components/AboutSection";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { Eye, Zap, Shield, Sparkles, Camera, Film, Clapperboard, MonitorPlay } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Arjun Verma",
    role: "Director of Photography",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    bio: "With over 15 years in narrative filmmaking, Arjun brings a painterly approach to light and shadow."
  },
  {
    name: "Maya Desai",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    bio: "Maya weaves visual tapestries that connect brands with human emotion."
  },
  {
    name: "Kabir Singh",
    role: "Lead Colorist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "A master of the DI suite, Kabir crafts the signature amber-gold Kaarigari look."
  },
  {
    name: "Ria Kapoor",
    role: "Executive Producer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "The orchestrator behind the scenes, ensuring every production runs with clockwork precision."
  }
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pb-20"
    >
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale, y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,180,50,0.1)_0%,transparent_70%)] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070" 
            alt="Cinematic gear"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center max-w-5xl px-8 mt-20">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-[0.4em] text-amber-500/80 mb-6 block">Our Legacy</span>
            <h1 
              className="text-7xl md:text-[9rem] text-white leading-[0.85] tracking-tight mb-8"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The Art of <br />
              <em className="italic text-white/60">Preservation.</em>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We are a collective of filmmakers, colorists, and storytellers dedicated to crafting timeless visual narratives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />

      {/* The Process Timeline */}
      <section className="py-32 px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        
        <ScrollReveal>
          <div className="mb-24 text-center">
            <h2 
              className="text-5xl md:text-7xl font-serif mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A systematic approach to capturing lightning in a bottle.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24 lg:space-y-32">
          {[
            { icon: Clapperboard, title: "Pre-Production", desc: "Every great film is made before the camera rolls. We meticulously storyboard, scout, and cast to ensure a flawless execution.", side: "left" },
            { icon: Camera, title: "Principal Photography", desc: "We deploy state-of-the-art cinema cameras and lighting to capture your vision with uncompromising quality.", side: "right" },
            { icon: Film, title: "Editorial", desc: "The story is rewritten in the edit. We sculpt the narrative rhythm to maximize emotional resonance.", side: "left" },
            { icon: MonitorPlay, title: "Color & Mastering", desc: "Our signature amber-gold grading and immersive sound design bring the final piece to life.", side: "right" }
          ].map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${step.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <ScrollReveal direction={step.side === 'left' ? 'right' : 'left'}>
                  <div className={`p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative overflow-hidden group ${step.side === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent transition-all duration-700" />
                    <step.icon className={`w-10 h-10 mb-6 text-amber-500/60 group-hover:text-amber-400 transition-colors ${step.side === 'left' ? 'lg:ml-auto' : ''}`} />
                    <h3 className="text-3xl font-serif mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>{step.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="hidden lg:flex w-16 h-16 rounded-full border border-white/10 bg-background items-center justify-center relative z-10 text-white/40 font-serif text-2xl">
                0{i + 1}
              </div>
              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-20">
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4 block">The Artisans</span>
              <h2 
                className="text-5xl md:text-7xl font-serif"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Meet the <em className="italic text-muted-foreground">Masters.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-amber-500/80 text-xs uppercase tracking-widest mb-2 font-semibold">{member.role}</p>
                    <h3 className="text-2xl text-white font-serif mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>{member.name}</h3>
                    <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
              Behind every frame is a philosophy that guides our lens.
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
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-1 group">
                <item.icon className="w-8 h-8 mb-6 text-muted-foreground group-hover:text-amber-500/80 transition-colors" />
                <h3 className="text-xl font-serif mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </motion.div>
  );
}
