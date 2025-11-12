import React from "react";
import { Star, ShoppingCart, Heart, MapPin, Award, Zap } from "lucide-react";

// Hero CTA Button Component
export const CTAButton: React.FC<{
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}> = ({ text, variant = "primary", onClick }) => {
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className="btn-luxury-secondary"
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="btn-luxury-primary"
    >
      {text}
    </button>
  );
};

// Stats Section Component
export const StatsSection: React.FC = () => {
  const stats = [
    { value: "500+", label: "Design Variations" },
    { value: "50+", label: "Retail Partners" },
    { value: "15+", label: "Years in Business" },
    { value: "4.9★", label: "Customer Rating" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Collection Card Component
export const CollectionCard: React.FC<{
  title: string;
  image: string;
  description: string;
  delay?: number;
}> = ({ title, image, description, delay = 0 }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
        <h3 className="text-2xl font-serif font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <button className="w-full py-2 bg-accent text-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
          View Collection
        </button>
      </div>
    </div>
  );
};

// Product Card Component
export const ProductCard: React.FC<{
  title: string;
  price: string;
  image: string;
  sizes?: string[];
  minOrder?: string;
}> = ({ title, price, image, sizes = [], minOrder }) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={20}
            className={isWishlisted ? "fill-red-500 text-red-500" : ""}
          />
        </button>
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            New Arrival
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-primary font-bold text-lg mb-3">{price}</p>
        {sizes.length > 0 && (
          <div className="flex gap-2 mb-4">
            {sizes.map((size) => (
              <button
                key={size}
                className="px-3 py-1 border border-border rounded hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                {size}
              </button>
            ))}
          </div>
        )}
        {minOrder && (
          <p className="text-xs text-muted-foreground mb-4">
            MOQ: {minOrder}
          </p>
        )}
        <button className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all">
          Request Quote
        </button>
      </div>
    </div>
  );
};

// Testimonial Card Component
export const TestimonialCard: React.FC<{
  name: string;
  title: string;
  image: string;
  text: string;
  rating?: number;
}> = ({ name, title, image, text, rating = 5 }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-accent text-accent"
          />
        ))}
      </div>
      <p className="text-foreground/80 mb-4 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

// Why Choose Us Section
export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "Finest fabrics and craftsmanship in every kurti",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Delivery",
      description: "Nationwide delivery with real-time tracking",
    },
    {
      icon: <MapPin size={32} />,
      title: "Bulk Discounts",
      description: "Competitive wholesale rates for all quantities",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Easy Ordering",
      description: "Streamlined B2B ordering and payment process",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Why Choose Jain Creations?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-lg bg-white/50 border border-border hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API endpoint for newsletter signup
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-white/80 mb-8">
          Subscribe to get exclusive designs, bulk discounts, and wholesale offers.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="text-white mt-4 animate-fade-in">
            ✓ Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};
