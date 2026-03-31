import React from 'react';
import { motion } from 'framer-motion';

const ElegantBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-elegant-ivory">
      {/* Existing Grid Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `
            linear-gradient(rgba(197, 160, 89, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(197, 160, 89, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* THE LIQUID LIGHT GLIDE (Organic & Posh) */}
      <motion.div
        animate={{ 
          x: ['-20vw', '120vw', '10vw', '-20vw'],
          y: ['-10vh', '40vh', '80vh', '-10vh'],
          rotate: [25, 45, 15, 25],
          opacity: [0, 0.6, 0.4, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="liquid-light-glide"
      >
        <div className="liquid-glow-core" />
      </motion.div>
      
      {/* Soft Animated Gradient Orbs */}
      <div className="absolute inset-0 mix-blend-multiply opacity-60">
        <motion.div
          animate={{
            x: ['0%', '20%', '-10%', '0%'],
            y: ['0%', '-20%', '15%', '0%'],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[30%] -left-[20%] w-[140vw] h-[140vh] rounded-full blur-[150px] bg-gradient-to-br from-elegant-gold/30 via-[#ead7b5]/20 to-transparent"
        />
        
        <motion.div
          animate={{
            x: ['0%', '-20%', '10%', '0%'],
            y: ['0%', '20%', '-15%', '0%'],
            scale: [1, 0.8, 1.2, 1],
            rotate: [0, -45, 45, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute -bottom-[30%] -right-[20%] w-[140vw] h-[140vh] rounded-full blur-[150px] bg-gradient-to-tl from-[#e8dcc4]/50 via-elegant-gold/10 to-transparent"
        />
      </div>

      {/* Bokeh / Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: 0 
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 rounded-full bg-elegant-gold/40 blur-sm"
          />
        ))}
      </div>
      
      {/* Grain / Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
    </div>
  );
};

export default ElegantBackground;
