import ScrollReveal from "./ScrollReveal";
import { Camera, Film, MonitorPlay, Layers } from "lucide-react";

const services = [
  {
    title: "Cinematography",
    description: "Capturing stunning visuals with state-of-the-art equipment and a cinematic eye for detail.",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "Post-Production",
    description: "Expert editing and color grading to refine the narrative and aesthetic of your project.",
    icon: <Film className="w-6 h-6" />,
  },
  {
    title: "Documentaries",
    description: "Authentic storytelling that captures the essence of human experiences and untold stories.",
    icon: <MonitorPlay className="w-6 h-6" />,
  },
  {
    title: "VFX & Motion Graphics",
    description: "Adding a touch of digital magic to enhance your visuals and create immersive worlds.",
    icon: <Layers className="w-6 h-6" />,
  }
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 py-32 px-8 bg-black/20 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-normal text-foreground mb-4"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The Art of Production
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From concept to delivery, we provide a full suite of video production services tailored to your unique vision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl liquid-glass flex items-center justify-center text-foreground mb-6 shadow-xl">
                  {service.icon}
                </div>
                <h3 
                  className="text-2xl text-foreground mb-4"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
