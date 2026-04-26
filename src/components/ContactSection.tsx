import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="relative z-10 pt-32 pb-16 px-8 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 md:p-24 relative overflow-hidden text-center">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/4 bg-amber-500/20 blur-[120px] pointer-events-none" />

        <ScrollReveal>
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.4em] text-amber-500/80 mb-6 block font-semibold">Your Vision, Our Lens</span>
            <h2 
              className="text-5xl md:text-7xl font-normal text-foreground mb-8 leading-[0.9]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Ready to create <br />something <em className="italic text-muted-foreground">timeless?</em>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto font-light">
              We collaborate with forward-thinking brands and visionary creators to produce cinematic experiences that leave a legacy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/reach-us" className="bg-white text-black rounded-full px-8 py-4 flex items-center font-medium hover:bg-white/90 transition-colors group">
                Start a Conversation
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link to="/studio" className="rounded-full px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-colors">
                Explore Studio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest text-muted-foreground uppercase">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2026 Kaarigari Production.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vimeo</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

