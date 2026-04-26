import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "The Silent Peak",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 2,
    title: "Urban Echoes",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 3,
    title: "Velvet Nights",
    category: "Music Video",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    title: "Steel & Spirit",
    category: "Branded Content",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5f9c4739?auto=format&fit=crop&q=80&w=2070",
  }
];

export default function WorkSection() {
  return (
    <section className="relative z-10 py-32 px-8 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="mb-16">
          <h2 
            className="text-4xl md:text-5xl font-normal text-foreground mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Selected Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A curated collection of visual storytelling, where every frame is meticulously crafted to leave a lasting impact.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl bg-secondary aspect-video cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{project.category}</span>
                <h3 
                  className="text-2xl text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {project.title}
                </h3>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full liquid-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-foreground border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16 flex justify-center">
        <button className="text-foreground text-sm uppercase tracking-widest border-b border-muted-foreground/30 pb-2 hover:border-foreground transition-colors">
          View All Projects
        </button>
      </ScrollReveal>
    </section>
  );
}
