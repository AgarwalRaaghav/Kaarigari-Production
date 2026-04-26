import { cn } from "@/src/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsub();
  }, [scrollY]);

  const navLinks = [
    { name: "Studio", path: "/studio" },
    { name: "About", path: "/about" },
    { name: "Reach Us", path: "/reach-us" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 w-full flex flex-row justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="group flex items-center gap-1.5"
          >
            <span 
              className="text-3xl tracking-tight text-foreground transition-all duration-300 group-hover:tracking-wider"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Kaarigari
            </span>
            <sup className="text-xs font-sans opacity-50 group-hover:opacity-100 transition-opacity">®</sup>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === "/studio" && location.pathname === "/");
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "relative text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 py-1",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div>
          <Link 
            to="/reach-us"
            className={cn(
              "liquid-glass rounded-full px-6 py-1.5 text-xs text-foreground transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer inline-block"
            )}
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/20 origin-left scale-x-0"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}
