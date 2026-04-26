/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Navbar from "./components/Navbar";
import ThreeScene from "./components/ThreeScene";
import Studio from "./pages/Studio";
import About from "./pages/About";
import ReachUs from "./pages/Contact";

function AppContent() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  // Parallax for video: move it more for pronounced depth
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  
  return (
    <div className="relative min-h-screen w-full selection:bg-white/20 selection:text-white bg-background overflow-x-hidden">
      {/* 3D Scene */}
      <ThreeScene />

      {/* Fixed Background Video with Parallax */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.video
          style={{ y: videoY, scale: videoScale }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[140%] object-cover opacity-40 md:opacity-50"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
            type="video/mp4" 
          />
        </motion.video>
      </div>

      {/* Subtle Overlay Gradients */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 pointer-events-none z-[1]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)] pointer-events-none z-[1]" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Studio />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/about" element={<About />} />
            <Route path="/reach-us" element={<ReachUs />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
