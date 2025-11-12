import React, { useState } from "react";
import Layout from "@/components/Layout";
import { ProductCard } from "@/components/HomeComponents";
import {
  ChevronDown,
  Grid,
  List,
  Filter,
  X,
  Download,
} from "lucide-react";

export default function Catalog() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    sizes: [] as string[],
    colors: [] as string[],
    fabricType: [] as string[],
    priceRange: [0, 1000],
    occasion: [] as string[],
  });

  const allProducts = [
    {
      id: 1,
      title: "Embroidered Kurti Set",
      price: "₹350 - ₹500",
      image:
        "https://images.unsplash.com/photo-1617371341976-48235f2f3b2b?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
      color: "Purple",
      fabric: "Cotton Silk Blend",
      occasion: "Wedding",
    },
    {
      id: 2,
      title: "Block Print Kurti",
      price: "₹300 - ₹450",
      image:
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
      color: "Teal",
      fabric: "Cotton",
      occasion: "Casual",
    },
    {
      id: 3,
      title: "Silk Blend Kurti",
      price: "₹400 - ₹600",
      image:
        "https://images.unsplash.com/photo-1592286927505-1fed6056d756?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "15 pieces",
      color: "Gold",
      fabric: "Silk Blend",
      occasion: "Wedding",
    },
    {
      id: 4,
      title: "Cotton Kurti Palazzo Set",
      price: "₹250 - ₹400",
      image:
        "https://images.unsplash.com/photo-1581231720633-78e876dc1ff1?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
      color: "Red",
      fabric: "Cotton",
      occasion: "Casual",
    },
    {
      id: 5,
      title: "Designer Anarkali Kurti",
      price: "₹500 - ₹800",
      image:
        "https://images.unsplash.com/photo-1617371341976-48235f2f3b2b?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      minOrder: "12 pieces",
      color: "Purple",
      fabric: "Silk",
      occasion: "Festival",
    },
    {
      id: 6,
      title: "Printed Rayon Kurti",
      price: "₹280 - ₹420",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
      color: "Multi",
      fabric: "Rayon",
      occasion: "Casual",
    },
    {
      id: 7,
      title: "Lucknowi Chikankari Kurti",
      price: "₹450 - ₹700",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "8 pieces",
      color: "Cream",
      fabric: "Cotton",
      occasion: "Wedding",
    },
    {
      id: 8,
      title: "Ethnic Fusion Kurti",
      price: "₹320 - ₹480",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=400&fit=crop",
      sizes: ["S", "M", "L"],
      minOrder: "10 pieces",
      color: "Navy",
      fabric: "Cotton Blend",
      occasion: "Casual",
    },
  ];

  const filterOptions = {
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Purple", "Teal", "Gold", "Red", "Multi", "Cream", "Navy", "Pink"],
    fabricTypes: ["Cotton", "Silk", "Rayon", "Cotton Silk Blend", "Silk Blend", "Cotton Blend"],
    occasions: ["Casual", "Wedding", "Festival", "Office", "Party"],
  };

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => {
      const key = type as keyof typeof filters;
      if (key === "priceRange") return prev;

      const current = prev[key] as string[];
      if (current.includes(value)) {
        return {
          ...prev,
          [key]: current.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [key]: [...current, value],
        };
      }
    });
  };

  const toggleItemSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = allProducts.filter((product) => {
    if (
      filters.sizes.length > 0 &&
      !product.sizes.some((size) => filters.sizes.includes(size))
    ) {
      return false;
    }
    if (
      filters.colors.length > 0 &&
      !filters.colors.includes(product.color)
    ) {
      return false;
    }
    if (
      filters.fabricType.length > 0 &&
      !filters.fabricType.includes(product.fabric)
    ) {
      return false;
    }
    if (
      filters.occasion.length > 0 &&
      !filters.occasion.includes(product.occasion)
    ) {
      return false;
    }
    return true;
  });

  return (
    <Layout>
      {/* Catalog Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Jain Creations Catalog
          </h1>
          <p className="text-primary-foreground/90 max-w-2xl">
            Browse our extensive collection of premium wholesale kurties. Filter by size, color, fabric, and occasion to find your perfect match.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center gap-2 px-4 py-3 bg-white border border-border rounded-lg mb-4"
            >
              <Filter size={20} />
              <span className="font-semibold">Filters</span>
              <ChevronDown
                size={20}
                className={`ml-auto transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Filters Panel */}
            {showFilters && (
              <div className="space-y-6">
                {/* Size Filter */}
                <div className="bg-white p-4 rounded-lg border border-border">
                  <h3 className="font-bold font-serif text-lg mb-4">Sizes</h3>
                  <div className="space-y-2">
                    {filterOptions.sizes.map((size) => (
                      <label
                        key={size}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.sizes.includes(size)}
                          onChange={() => handleFilterChange("sizes", size)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="bg-white p-4 rounded-lg border border-border">
                  <h3 className="font-bold font-serif text-lg mb-4">Colors</h3>
                  <div className="space-y-2">
                    {filterOptions.colors.map((color) => (
                      <label
                        key={color}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.colors.includes(color)}
                          onChange={() => handleFilterChange("colors", color)}
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm">{color}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fabric Type Filter */}
                <div className="bg-white p-4 rounded-lg border border-border">
                  <h3 className="font-bold font-serif text-lg mb-4">
                    Fabric Type
                  </h3>
                  <div className="space-y-2">
                    {filterOptions.fabricTypes.map((fabric) => (
                      <label
                        key={fabric}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.fabricType.includes(fabric)}
                          onChange={() =>
                            handleFilterChange("fabricType", fabric)
                          }
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm">{fabric}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasion Filter */}
                <div className="bg-white p-4 rounded-lg border border-border">
                  <h3 className="font-bold font-serif text-lg mb-4">
                    Occasion
                  </h3>
                  <div className="space-y-2">
                    {filterOptions.occasions.map((occasion) => (
                      <label
                        key={occasion}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.occasion.includes(occasion)}
                          onChange={() =>
                            handleFilterChange("occasion", occasion)
                          }
                          className="w-4 h-4 rounded border-border"
                        />
                        <span className="text-sm">{occasion}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {Object.values(filters).some(
                  (v) => (Array.isArray(v) ? v.length > 0 : false)
                ) && (
                  <button
                    onClick={() =>
                      setFilters({
                        sizes: [],
                        colors: [],
                        fabricType: [],
                        priceRange: [0, 1000],
                        occasion: [],
                      })
                    }
                    className="w-full py-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
                {selectedItems.length > 0 && ` (${selectedItems.length} selected)`}
              </div>

              <div className="flex items-center gap-3">
                {selectedItems.length > 0 && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-all">
                    <Download size={18} />
                    <span>Export ({selectedItems.length})</span>
                  </button>
                )}

                <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((product) => (
                  <div key={product.id} className="relative">
                    {/* Selection Checkbox */}
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => toggleItemSelection(product.id)}
                      className="absolute top-4 left-4 z-10 w-5 h-5 cursor-pointer"
                    />

                    <ProductCard
                      title={product.title}
                      price={product.price}
                      image={product.image}
                      sizes={product.sizes}
                      minOrder={product.minOrder}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      sizes: [],
                      colors: [],
                      fabricType: [],
                      priceRange: [0, 1000],
                      occasion: [],
                    })
                  }
                  className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bulk Order CTA */}
      {filteredProducts.length > 0 && (
        <section className="bg-gradient-luxury py-16 mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Planning a Bulk Order from Jain Creations?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Select multiple items and export to create a custom inquiry for wholesale pricing and special discounts.
            </p>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-lg transition-all">
              Get Wholesale Rates
            </button>
          </div>
        </section>
      )}
    </Layout>
  );
}
