import ScrollReveal from "./ScrollReveal";
import { Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative z-10 pt-32 pb-20 px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <ScrollReveal>
          <div>
            <h2 
              className="text-5xl md:text-7xl font-normal text-foreground mb-8 leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Ready to create <br />something <em className="not-italic text-muted-foreground">timeless?</em>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-md">
              Let's discuss your next project and how we can bring it to life with cinematic excellence.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="liquid-glass rounded-full px-8 py-4 text-foreground flex items-center group">
                Start a Conversation
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="rounded-full px-8 py-4 border border-border text-foreground hover:bg-white/5 transition-colors">
                Our Work
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col justify-end lg:items-end">
            <div className="space-y-8 lg:text-right">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Location</span>
                <p className="text-xl text-foreground">Mumbai, India — Available Worldwide</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Inquiries</span>
                <p className="text-xl text-foreground">hello@kaarigari.in</p>
              </div>
              <div className="flex lg:justify-end gap-6 pt-4">
                <a href="#" className="p-3 rounded-full liquid-glass text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full liquid-glass text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full liquid-glass text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-40 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-muted-foreground uppercase">
          <p>© 2026 Kaarigari Production. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Credits</a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
