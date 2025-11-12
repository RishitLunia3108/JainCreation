import React from "react";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            About Jain Creations
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl">
            Premium wholesale kurti collections trusted by retailers across India for quality and reliability.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-foreground/80 mb-4">
              With over 15 years of experience in traditional Indian ethnic wear, KURTI has become the trusted wholesale partner for retailers across India.
            </p>
            <p className="text-foreground/80">
              We combine modern business practices with traditional craftsmanship to deliver premium quality kurties that resonate with customers.
            </p>
          </div>
          <div className="bg-white/50 rounded-lg border border-border p-8">
            <h3 className="font-serif font-bold text-xl mb-6">Key Achievements</h3>
            <ul className="space-y-3 text-foreground/80">
              <li>✓ 500+ Design Variations</li>
              <li>✓ 50+ Retail Partners</li>
              <li>✓ 15+ Years in Business</li>
              <li>✓ 4.9★ Customer Rating</li>
            </ul>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Manufacturing Process</h2>
          <p className="text-foreground/80 mb-8">
            We maintain strict quality standards throughout our manufacturing process to ensure every kurti meets our premium standards.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {["Design", "Fabric Selection", "Production", "Quality Check"].map((step, idx) => (
              <div key={idx} className="bg-white/50 rounded-lg border border-border p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {idx + 1}
                </div>
                <p className="font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/50 rounded-lg border border-border p-12">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Why Retailers Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Premium Quality</h3>
              <p className="text-foreground/70">
                Finest fabrics and meticulous craftsmanship in every kurti we produce.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Wholesale Pricing</h3>
              <p className="text-foreground/70">
                Competitive bulk discounts that help maximize your profit margins.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl mb-3">Reliable Support</h3>
              <p className="text-foreground/70">
                Dedicated account managers and responsive customer service.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
