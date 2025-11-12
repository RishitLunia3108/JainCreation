import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gstNumber: "",
    productInterest: [] as string[],
    quantityRange: "",
    deliveryPreference: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductInterest = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      productInterest: prev.productInterest.includes(product)
        ? prev.productInterest.filter((p) => p !== product)
        : [...prev.productInterest, product],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API endpoint for inquiry form submission
    // POST /api/inquiries with formData
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will contact you soon.");
    setFormStep(1);
    setFormData({
      businessName: "",
      ownerName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      gstNumber: "",
      productInterest: [],
      quantityRange: "",
      deliveryPreference: "",
      additionalInfo: "",
    });
  };

  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Contact Jain Creations
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl">
            Connect with our wholesale team to discuss your business needs and place your orders.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
            <p className="text-sm text-muted-foreground mt-2">Available 9 AM - 6 PM IST</p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">Email</h3>
            <p className="text-muted-foreground">info@kurti.com</p>
            <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
          </div>

          <div className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
            <p className="text-sm text-muted-foreground mt-2">Direct messaging available</p>
          </div>
        </div>

        {/* Multi-Step Inquiry Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-border rounded-lg p-8">
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step <= formStep
                        ? "bg-primary text-primary-foreground"
                        : "bg-border text-muted-foreground"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        step < formStep ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Business Details */}
              {formStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Business Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your retail store name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      GST Number (optional)
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleInputChange}
                      placeholder="18ABCDE1234F2Z0"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Address */}
              {formStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Delivery Address
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter complete address"
                      rows={3}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="City"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        placeholder="State"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        placeholder="000000"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Product Selection */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Product Interest
                  </h2>

                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select the products you're interested in *
                    </p>
                    <div className="space-y-3">
                      {[
                        "Embroidered Kurti Sets",
                        "Block Print Kurtis",
                        "Silk Blend Kurtis",
                        "Cotton Kurtis",
                        "Designer Anarkali",
                        "Printed Rayon",
                      ].map((product) => (
                        <label
                          key={product}
                          className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-white/50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.productInterest.includes(
                              product
                            )}
                            onChange={() => handleProductInterest(product)}
                            className="w-5 h-5 rounded"
                          />
                          <span className="font-medium">{product}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Quantity Range Per Order *
                    </label>
                    <select
                      name="quantityRange"
                      value={formData.quantityRange}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select quantity range</option>
                      <option value="10-50">10-50 pieces</option>
                      <option value="50-100">50-100 pieces</option>
                      <option value="100-500">100-500 pieces</option>
                      <option value="500+">500+ pieces</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Details */}
              {formStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">
                    Additional Information
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Preferred Delivery Timeline
                    </label>
                    <select
                      name="deliveryPreference"
                      value={formData.deliveryPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select preference</option>
                      <option value="asap">ASAP (within 7 days)</option>
                      <option value="2weeks">2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Additional Information (optional)
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or questions..."
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {formStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setFormStep(formStep - 1)}
                    className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Back
                  </button>
                )}
                {formStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setFormStep(formStep + 1)}
                    className="ml-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Submit Inquiry
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
