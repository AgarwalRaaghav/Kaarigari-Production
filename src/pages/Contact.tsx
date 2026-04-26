
import { motion } from "motion/react";
import ScrollReveal from "../components/ScrollReveal";
import { Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen pb-20"
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

      <section className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-16">
            <ScrollReveal direction="right">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Inquiries</h3>
                  <a href="mailto:hello@kaarigari.in" className="text-3xl hover:text-white/70 transition-colors font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    hello@kaarigari.in
                  </a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Direct Line</h3>
                  <a href="tel:+919876543210" className="text-3xl hover:text-white/70 transition-colors font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Studio Headquarters</h3>
                <p className="text-2xl leading-relaxed text-foreground/80 font-serif" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Plot 12, Film City Road,<br />
                  Goregaon East, Mumbai,<br />
                  Maharashtra 400063
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
                    { icon: Youtube, label: "Youtube", url: "https://youtube.com" },
                    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
                    { icon: Twitter, label: "Twitter", url: "https://twitter.com" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                
                <h3 className="text-3xl font-serif mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>Send us a message</h3>
                
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-white/50 transition-colors text-white appearance-none cursor-pointer"
                    >
                      <option className="bg-background text-white">Project Inquiry</option>
                      <option className="bg-background text-white">Brand Partnership</option>
                      <option className="bg-background text-white">Careers</option>
                      <option className="bg-background text-white">Press</option>
                      <option className="bg-background text-white">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/20 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors mt-4"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Department Grid */}
      <section className="py-32 px-8 mt-20 bg-white/[0.01]">
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
                <div className="group p-8 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <h4 className="text-2xl font-serif mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>{dept.title}</h4>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{dept.desc}</p>
                  <a href={`mailto:${dept.email}`} className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
                    {dept.email}
                    <motion.span className="inline-block" initial={{ x: 0, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }} />
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

