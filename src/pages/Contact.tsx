import ContactSection from "../components/ContactSection";
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      {/* Header Section */}
      <section className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6 block">Get in Touch</span>
          <h1 
            className="text-6xl md:text-9xl text-foreground mb-12 leading-[0.8]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's Start a <br />
            <em className="italic text-muted-foreground">Dialogue.</em>
          </h1>
        </ScrollReveal>
      </section>

      <section className="pb-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-4 space-y-16">
            <ScrollReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Email Us</h3>
                  <a href="mailto:hello@kaarigari.in" className="text-2xl hover:text-muted-foreground transition-colors font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    hello@kaarigari.in
                  </a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Call Us</h3>
                  <a href="tel:+919876543210" className="text-2xl hover:text-muted-foreground transition-colors font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Our Studio</h3>
                <p className="text-xl leading-relaxed text-foreground/80 font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Plot 12, Film City Road,<br />
                  Goregaon East, Mumbai,<br />
                  Maharashtra 400063
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow the Lens</h3>
                <div className="flex gap-6">
                  {[
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "Youtube" },
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="p-3 rounded-full border border-white/5 hover:border-white/20 transition-all hover:bg-white/5"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Main Contact Section / Form */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left">
              <div className="rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01]">
                <ContactSection />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <section className="py-32 px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Business & Partnerships",
                desc: "For new project inquiries and agency collaborations.",
                email: "business@kaarigari.in"
              },
              {
                title: "Talent & Reels",
                desc: "We're always looking for cinematographers and editors.",
                email: "careers@kaarigari.in"
              },
              {
                title: "Press & Media",
                desc: "For interview requests and asset packages.",
                email: "press@kaarigari.in"
              }
            ].map((dept, i) => (
              <ScrollReveal key={dept.title} delay={i * 0.1}>
                <div className="group">
                  <h4 className="text-xl font-serif mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>{dept.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{dept.desc}</p>
                  <a href={`mailto:${dept.email}`} className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 group-hover:text-white transition-colors">
                    {dept.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
