import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

export const Interactive3DShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      title: "Embroidered Heritage",
      description: "Premium silk-blend with intricate golden embroidery",
      color: "#8B4789",
      accentColor: "#D4AF37",
      price: "₹350-500",
      icon: "✨",
    },
    {
      title: "Modern Elegance",
      description: "Contemporary design with traditional patterns",
      color: "#2D5F5D",
      accentColor: "#D4AF37",
      price: "₹300-450",
      icon: "💎",
    },
    {
      title: "Royal Silk",
      description: "Pure silk kurti with luxurious finish",
      color: "#8B0000",
      accentColor: "#FFD700",
      price: "₹400-600",
      icon: "👑",
    },
    {
      title: "Casual Comfort",
      description: "Breathable cotton with comfortable fit",
      color: "#C9A961",
      accentColor: "#8B4789",
      price: "₹250-400",
      icon: "☀️",
    },
  ];

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, products.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDragStart = (e: React.MouseEvent) => {
    setAutoRotate(false);
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e: React.MouseEvent) => {
    const diff = e.clientX - dragStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }
    }
  };

  const nextProduct = () => {
    setAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToProduct = (index: number) => {
    setAutoRotate(false);
    setActiveIndex(index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Explore Our Collections
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Interactive 3D showcase of Jain Creations premium kurti selections
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          ref={containerRef}
          className="relative h-96 md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {/* Ambient Light Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{
                background: products[activeIndex].color,
                left: `${50 + mousePosition.x * 10}%`,
                top: `${50 + mousePosition.y * 10}%`,
                transform: `translate(-50%, -50%)`,
                transition: "background 0.5s ease",
              }}
            />
          </div>

          {/* 3D Cards */}
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            {products.map((product, index) => {
              const isActive = index === activeIndex;
              const offset = (index - activeIndex + products.length) % products.length;
              
              // Calculate position: -2, -1, 0, 1 relative to active
              let position = offset;
              if (position > products.length / 2) {
                position = position - products.length;
              }

              // X position spread (more horizontal spread)
              const xOffset = position * 120;
              // Y position (cards above and below active)
              const yOffset = Math.abs(position) * 80;
              // Z position (cards further away are smaller)
              const zOffset = -Math.abs(position) * 150;
              // Rotation
              const rotationY = position * 25;
              // Scale
              const scale = isActive ? 1 : 0.7 - Math.abs(position) * 0.1;
              // Opacity
              const opacity = Math.abs(position) <= 1.5 ? 1 : 0;

              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: "280px",
                    height: "380px",
                    marginLeft: "-140px",
                    marginTop: "-190px",
                    transform: `
                      translateX(${xOffset}px)
                      translateY(${yOffset}px)
                      translateZ(${zOffset}px)
                      rotateY(${rotationY}deg)
                      rotateX(${mousePosition.y * 2}deg)
                      scale(${scale})
                    `,
                    transformStyle: "preserve-3d",
                    transition: isActive
                      ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      : "transform 0.5s ease-out",
                    opacity: opacity,
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 5 - Math.abs(position),
                  }}
                  onMouseEnter={() => setAutoRotate(false)}
                >
                  {/* 3D Card Container */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      transformStyle: "preserve-3d",
                      borderRadius: "24px",
                      overflow: "hidden",
                      cursor: isActive ? "pointer" : "default",
                      boxShadow: isActive
                        ? `0 30px 80px rgba(0, 0, 0, 0.4), 0 0 60px ${product.accentColor}40`
                        : "0 15px 40px rgba(0, 0, 0, 0.2)",
                      background: `linear-gradient(135deg, ${product.color} 0%, ${product.accentColor} 100%)`,
                    }}
                    className="group hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Card Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                      {/* Top Accent */}
                      <div className="absolute top-6 right-6">
                        <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {product.icon}
                        </div>
                      </div>

                      {/* SVG Kurti Illustration */}
                      <svg
                        viewBox="0 0 120 160"
                        className="w-20 h-28 mb-6 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                      >
                        {/* Main body */}
                        <path
                          d="M60 15 L40 30 L35 110 L35 155 L85 155 L85 110 L80 30 Z"
                          fill="white"
                          opacity="0.95"
                        />
                        {/* Neckline */}
                        <circle
                          cx="60"
                          cy="20"
                          r="9"
                          fill="none"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        {/* Left sleeve */}
                        <path
                          d="M40 30 L18 38 L16 85 L35 75 Z"
                          fill="white"
                          opacity="0.85"
                        />
                        {/* Right sleeve */}
                        <path
                          d="M80 30 L102 38 L104 85 L85 75 Z"
                          fill="white"
                          opacity="0.85"
                        />
                        {/* Decorative pattern line 1 */}
                        <line
                          x1="40"
                          y1="50"
                          x2="80"
                          y2="50"
                          stroke="white"
                          strokeWidth="1.2"
                          opacity="0.6"
                        />
                        {/* Decorative pattern line 2 */}
                        <line
                          x1="38"
                          y1="75"
                          x2="82"
                          y2="75"
                          stroke="white"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                        {/* Center accent */}
                        <circle
                          cx="60"
                          cy="70"
                          r="5"
                          fill="none"
                          stroke="white"
                          strokeWidth="1"
                          opacity="0.7"
                        />
                      </svg>

                      {/* Product Title */}
                      <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text-lg transition-all">
                        {product.title}
                      </h3>

                      {/* Product Description */}
                      <p className="text-xs md:text-sm mb-3 opacity-90 max-w-xs line-clamp-2 group-hover:line-clamp-none">
                        {product.description}
                      </p>

                      {/* Price */}
                      <p className="text-base md:text-lg font-bold mb-4">{product.price}</p>

                      {/* Interactive Button */}
                      {isActive && (
                        <button
                          className="px-6 py-2 bg-white text-foreground font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
                        >
                          <Zap size={16} />
                          View Details
                        </button>
                      )}
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Border */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProduct}
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 bg-white/85 hover:bg-primary text-foreground hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-125 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProduct}
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 bg-white/85 hover:bg-primary text-foreground hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-125 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators Section */}
        <div className="mt-16 flex flex-col items-center gap-8">
          {/* Dot Indicators */}
          <div className="flex gap-3 z-30 relative">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProduct(index)}
                className={`transition-all duration-300 rounded-full hover:scale-125 ${
                  index === activeIndex
                    ? "bg-primary w-8 h-3"
                    : "bg-border hover:bg-primary/50 w-3 h-3"
                }`}
              />
            ))}
          </div>

          {/* Product Info Display */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Collection {activeIndex + 1} of {products.length}
            </p>
            <h4 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
              {products[activeIndex].title}
            </h4>
            <p className="text-foreground/70 max-w-lg text-sm md:text-base mb-4">
              {products[activeIndex].description}
            </p>
            <p className="text-lg md:text-xl font-bold text-primary">
              {products[activeIndex].price}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-luxury text-primary-foreground font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Collection
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
              View Catalog
            </button>
          </div>
        </div>

        {/* Hint Text */}
        <div className="text-center mt-12 text-sm text-muted-foreground opacity-75">
          💡 Drag or click arrows to explore • Hover for details
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Interactive3DShowcase;
