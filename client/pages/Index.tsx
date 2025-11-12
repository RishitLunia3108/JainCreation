import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero3D from "@/components/Hero3D";
import Interactive3DShowcase from "@/components/Interactive3D";
import {
  StatsSection,
  CollectionCard,
  ProductCard,
  TestimonialCard,
  WhyChooseUs,
  NewsletterSection,
} from "@/components/HomeComponents";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Index() {
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);

  const featuredCollections = [
    {
      title: "Wedding Elegance",
      description: "Exquisite designs for special occasions",
      image:
        "https://images.unsplash.com/photo-1617371341976-48235f2f3b2b?w=600&h=400&fit=crop",
    },
    {
      title: "Casual Comfort",
      description: "Everyday wear with style and comfort",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=400&fit=crop",
    },
    {
      title: "Festive Vibes",
      description: "Traditional meets modern in vibrant colors",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop",
    },
  ];

  const products = [
    {
      title: "Embroidered Kurti Set",
      price: "₹350 - ₹500 (Wholesale)",
      image:
        "https://images.unsplash.com/photo-1617371341976-48235f2f3b2b?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
    },
    {
      title: "Block Print Kurti",
      price: "₹300 - ₹450 (Wholesale)",
      image:
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
    },
    {
      title: "Silk Blend Kurti",
      price: "₹400 - ₹600 (Wholesale)",
      image:
        "https://images.unsplash.com/photo-1592286927505-1fed6056d756?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "15 pieces",
    },
    {
      title: "Cotton Kurti Palazzo Set",
      price: "₹250 - ₹400 (Wholesale)",
      image:
        "https://images.unsplash.com/photo-1581231720633-78e876dc1ff1?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Retail Store Owner, Delhi",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "KURTI has been an incredible wholesale partner. Their designs are always on-trend and the bulk discounts are unmatched. My customers love the quality!",
      rating: 5,
    },
    {
      name: "Arun Patel",
      title: "Boutique Owner, Mumbai",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "The customer service is exceptional and delivery is always on time. Working with KURTI has increased my profit margins significantly.",
      rating: 5,
    },
    {
      name: "Meera Desai",
      title: "Fashion Store Manager, Bangalore",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Premium quality, diverse designs, and wholesale-friendly pricing. KURTI is our go-to supplier for ethnic wear.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setTestimonialsIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialsIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    // TODO: Connect to backend API to fetch products, collections, testimonials
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/api/products');
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.error('Error fetching products:', error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <Layout>
      {/* Hero Section with 3D */}
      <Hero3D />

      {/* Stats Section */}
      <StatsSection />

      {/* Interactive 3D Showcase */}
      <Interactive3DShowcase />

      {/* Featured Collections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, idx) => (
              <CollectionCard
                key={idx}
                title={collection.title}
                image={collection.image}
                description={collection.description}
                delay={idx * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Featured Products */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                price={product.price}
                image={product.image}
                sizes={product.sizes}
                minOrder={product.minOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Trusted by Retailers</h2>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="space-y-6">
              {[0, 1, 2].map((offset) => {
                const idx = (testimonialsIndex + offset) % testimonials.length;
                const testimonial = testimonials[idx];
                return (
                  <div
                    key={idx}
                    className="animate-fade-in"
                    style={{ animationDelay: `${offset * 100}ms` }}
                  >
                    {offset === 0 && (
                      <TestimonialCard
                        name={testimonial.name}
                        title={testimonial.title}
                        image={testimonial.image}
                        text={testimonial.text}
                        rating={testimonial.rating}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialsIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === testimonialsIndex
                        ? "bg-primary w-8"
                        : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Why Retailers Trust Jain Creations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-accent mb-2">🔒 SSL Secure</p>
              <p className="text-sm text-background/80">100% Encrypted</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent mb-2">💳 Payment Partners</p>
              <p className="text-sm text-background/80">Multiple Options</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent mb-2">📋 Registered Business</p>
              <p className="text-sm text-background/80">GSTIN Verified</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent mb-2">🚚 Fast Shipping</p>
              <p className="text-sm text-background/80">Pan India Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of successful retailers who trust Jain Creations for premium wholesale kurties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all text-lg">
              Download Catalog (PDF)
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg">
              WhatsApp Us Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
