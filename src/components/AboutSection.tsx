import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative z-10 py-32 px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="right" className="order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-secondary">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070" 
              alt="Cinematographer at work" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </ScrollReveal>
        
        <div className="order-1 lg:order-2">
          <ScrollReveal delay={0.2}>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-6">Our Philosophy</span>
            <h2 
              className="text-4xl md:text-6xl font-normal text-foreground mb-8 leading-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              We don't just record events. <br />
              We capture <em className="not-italic text-muted-foreground">atmosphere.</em>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded on the belief that video is the most powerful medium for human connection, Kaarigari Production blends technical precision with raw emotion.
              </p>
              <p>
                Our name, "Kaarigari," signifies craftsmanship. Every project is a canvas where we apply years of expertise in lighting, composition, and sound design to build worlds that feel as real as they look.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>250+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>12+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Global Awards</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
