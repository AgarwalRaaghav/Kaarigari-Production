import { cn } from "@/src/lib/utils";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 lg:py-[90px] flex-1 justify-center">
      <h1 
        className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Crafting <em className="not-italic text-muted-foreground">visions</em> into <em className="not-italic text-muted-foreground">cinematic legacy.</em>
      </h1>
      
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        Kaarigari Production is a collective of filmmakers, editors, and storytellers. 
        We specialize in high-end video production, bringing a master's touch to every frame we capture.
      </p>

      <button 
        className={cn(
          "liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2"
        )}
      >
        View Reel
      </button>
    </section>
  );
}
