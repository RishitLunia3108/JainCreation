import React from "react";

// Premium Hero Section with CSS 3D Effects and SVG Kurti
export const Hero3D: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-luxury-cream via-primary/5 to-background overflow-hidden">
      {/* Rotating Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: "translateY(-25%)", perspective: "1000px" }}>
        <div style={{ 
          position: "relative", 
          transformStyle: "preserve-3d",
          animation: "flip-horizontal 20s linear infinite",
          width: "800px",
          height: "800px"
        }} className="md:w-[1200px] md:h-[1200px]">
          {/* Front face */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fef8fccf8e40a462dbcc05faaddd5d14d%2Fbc8c21bf617e44d9b8533008a0861367?format=webp&width=800"
            alt="Jain Creations Logo"
            className="w-full h-full object-contain opacity-20 absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
            }}
          />
          {/* Back face (flipped to show correct when rotated) */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fef8fccf8e40a462dbcc05faaddd5d14d%2Fbc8c21bf617e44d9b8533008a0861367?format=webp&width=800"
            alt="Jain Creations Logo"
            className="w-full h-full object-contain opacity-20 absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </div>
      </div>

      {/* Left SVG Decorative Kurti Model - Emerald & Gold Theme */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-1/3 h-full hidden lg:flex items-center justify-start">
        <div className="relative w-80 h-96 animate-float">
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full filter drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 30px rgba(45, 95, 93, 0.4))",
            }}
          >
            {/* Main Kurti Body */}
            <path
              d="M100 80 L70 100 L60 200 L60 380 L140 380 L140 200 L130 100 Z"
              fill="#2D5F5D"
              stroke="#C9A961"
              strokeWidth="2"
            />

            {/* Neckline */}
            <circle cx="100" cy="85" r="15" fill="none" stroke="#C9A961" strokeWidth="3" />

            {/* Left Sleeve */}
            <path
              d="M70 100 L40 110 L35 180 L60 170 Z"
              fill="#8B4789"
              opacity="0.8"
            />

            {/* Right Sleeve */}
            <path
              d="M130 100 L160 110 L165 180 L140 170 Z"
              fill="#8B4789"
              opacity="0.8"
            />

            {/* Decorative patterns - gold borders */}
            <line x1="70" y1="130" x2="130" y2="130" stroke="#C9A961" strokeWidth="2" />
            <line x1="65" y1="180" x2="135" y2="180" stroke="#C9A961" strokeWidth="2" />
            <line x1="63" y1="250" x2="137" y2="250" stroke="#C9A961" strokeWidth="1.5" />

            {/* Paisley patterns (decorative) */}
            <circle cx="100" cy="150" r="8" fill="none" stroke="#C9A961" strokeWidth="1" opacity="0.6" />
            <circle cx="85" cy="200" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
            <circle cx="115" cy="220" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
          </svg>

          {/* Floating particles background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-5 left-10 w-2 h-2 bg-luxury-emerald rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-8 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute bottom-20 left-5 w-2 h-2 bg-luxury-gold rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* Right SVG Decorative Kurti Model - Purple & Metallic Gold Theme */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 w-1/3 h-full hidden lg:flex items-center justify-end">
        <div className="relative w-80 h-96 animate-float" style={{ animationDelay: "1s" }}>
          <svg
            viewBox="0 0 200 400"
            className="w-full h-full filter drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 30px rgba(139, 71, 137, 0.4))",
            }}
          >
            {/* Main Kurti Body */}
            <path
              d="M100 80 L70 100 L60 200 L60 380 L140 380 L140 200 L130 100 Z"
              fill="#8B4789"
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* Neckline */}
            <circle cx="100" cy="85" r="15" fill="none" stroke="#D4AF37" strokeWidth="3" />

            {/* Left Sleeve */}
            <path
              d="M70 100 L40 110 L35 180 L60 170 Z"
              fill="#8B0000"
              opacity="0.8"
            />

            {/* Right Sleeve */}
            <path
              d="M130 100 L160 110 L165 180 L140 170 Z"
              fill="#8B0000"
              opacity="0.8"
            />

            {/* Decorative patterns - metallic gold borders */}
            <line x1="70" y1="130" x2="130" y2="130" stroke="#D4AF37" strokeWidth="2" />
            <line x1="65" y1="180" x2="135" y2="180" stroke="#D4AF37" strokeWidth="2" />
            <line x1="63" y1="250" x2="137" y2="250" stroke="#FFD700" strokeWidth="1.5" />

            {/* Paisley patterns (decorative) */}
            <circle cx="100" cy="150" r="8" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
            <circle cx="85" cy="200" r="6" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
            <circle cx="115" cy="220" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
          </svg>

          {/* Floating particles background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-5 left-10 w-2 h-2 bg-luxury-ruby rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-8 w-2 h-2 bg-luxury-metallic rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute bottom-20 left-5 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-2xl text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
              Premium Wholesale
              <span className="text-gradient block">Kurti Collections</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed">
              Elevate Your Retail Business with Premium Traditional Indian Ethnic Wear. B2B wholesale platform trusted by 500+ retailers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn-luxury-primary hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              View Catalog
            </button>
            <button className="btn-luxury-secondary hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Request Price List
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-border">
              <span>🔒</span>
              <span className="text-foreground">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-border">
              <span>💳</span>
              <span className="text-foreground">Multiple Payments</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-border">
              <span>🚚</span>
              <span className="text-foreground">Pan India Delivery</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-luxury-emerald rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
    </div>
  );
};

export default Hero3D;
