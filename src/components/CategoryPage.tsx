import React, { useState } from 'react';
import { Footer } from './Footer';
import { ProductCard } from './ProductCard';
import { ProductTabs } from './ProductTabs';
import { SlidersIcon, ArrowLeftIcon } from 'lucide-react';
interface CategoryPageProps {
  onBackClick: () => void;
  category?: string;
}
export function CategoryPage({
  onBackClick,
  category = 'All Products'
}: CategoryPageProps) {
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedTab, setSelectedTab] = useState('Todos');
  // Mock products - in a real app, these would be filtered based on the category
  const products = [{
    id: 1,
    title: 'Smart 4K OLED TV',
    category: 'Electronics',
    price: 1299.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '15% OFF',
    brand: 'TechVision'
  }, {
    id: 2,
    title: 'Smart Refrigerator',
    category: 'Appliances',
    price: 2499.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null,
    brand: 'CoolTech'
  }, {
    id: 3,
    title: 'Robot Vacuum Cleaner',
    category: 'Smart Home',
    price: 399.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '20% OFF',
    brand: 'CleanBot'
  }, {
    id: 4,
    title: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 249.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null,
    brand: 'SoundWave'
  }, {
    id: 5,
    title: 'Smart Washing Machine',
    category: 'Appliances',
    price: 899.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '10% OFF',
    brand: 'CleanTech'
  }, {
    id: 6,
    title: 'Smart Home Security System',
    category: 'Smart Home',
    price: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null,
    brand: 'SecureHome'
  }, {
    id: 7,
    title: 'Smart Speaker with Voice Assistant',
    category: 'Smart Home',
    price: 129.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '5% OFF',
    brand: 'EchoTech'
  }, {
    id: 8,
    title: 'Gaming Console',
    category: 'Electronics',
    price: 499.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null,
    brand: 'GameStation'
  }];
  // Filter products by category (if provided)
  const filteredProducts = category !== 'All Products' ? products.filter(product => product.category === category) : products;
  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  // Get unique brands
  const brands = Array.from(new Set(products.map(product => product.brand)));
  return <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBackClick} className="flex items-center text-[#9FEF00] hover:text-[#9FEF00]/80">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to home
          </button>
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#9FEF00]">{category}</h1>
            <div className="flex items-center">
              <span className="mr-2 text-gray-400">Sort by:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-gray-900 border border-gray-700 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          {/* Product Tabs */}
          <ProductTabs onSelectTab={setSelectedTab} selectedTab={selectedTab} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium">Filters</h3>
                  <SlidersIcon className="h-5 w-5 text-[#9FEF00]" />
                </div>
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Price Range
                  </h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">${priceRange[0]}</span>
                    <span className="text-gray-400">${priceRange[1]}</span>
                  </div>
                  <input type="range" min="0" max="3000" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#9FEF00]" />
                </div>
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input id="all" type="radio" name="category" checked={category === 'All Products'} className="h-4 w-4 border-gray-300 text-[#9FEF00] focus:ring-[#9FEF00]" />
                      <label htmlFor="all" className="ml-2 text-gray-400">
                        All Products
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="electronics" type="radio" name="category" checked={category === 'Electronics'} className="h-4 w-4 border-gray-300 text-[#9FEF00] focus:ring-[#9FEF00]" />
                      <label htmlFor="electronics" className="ml-2 text-gray-400">
                        Electronics
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="appliances" type="radio" name="category" checked={category === 'Appliances'} className="h-4 w-4 border-gray-300 text-[#9FEF00] focus:ring-[#9FEF00]" />
                      <label htmlFor="appliances" className="ml-2 text-gray-400">
                        Appliances
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="smart-home" type="radio" name="category" checked={category === 'Smart Home'} className="h-4 w-4 border-gray-300 text-[#9FEF00] focus:ring-[#9FEF00]" />
                      <label htmlFor="smart-home" className="ml-2 text-gray-400">
                        Smart Home
                      </label>
                    </div>
                  </div>
                </div>
                {/* Brands */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Brands
                  </h4>
                  <div className="space-y-2">
                    {brands.map(brand => <div key={brand} className="flex items-center">
                        <input id={`brand-${brand}`} type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="h-4 w-4 border-gray-300 rounded text-[#9FEF00] focus:ring-[#9FEF00]" />
                        <label htmlFor={`brand-${brand}`} className="ml-2 text-gray-400">
                          {brand}
                        </label>
                      </div>)}
                  </div>
                </div>
                <button className="w-full bg-[#9FEF00]/10 hover:bg-[#9FEF00]/20 text-[#9FEF00] py-2 rounded text-sm font-medium transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
              </div>
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow-sm">
                  <a href="#" className="px-4 py-2 border border-gray-700 bg-gray-900 text-gray-400 text-sm font-medium hover:bg-gray-800 rounded-l-md">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-700 bg-[#9FEF00]/10 text-[#9FEF00] text-sm font-medium">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-700 bg-gray-900 text-gray-400 text-sm font-medium hover:bg-gray-800">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 border-t border-b border-gray-700 bg-gray-900 text-gray-400 text-sm font-medium hover:bg-gray-800">
                    3
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-700 bg-gray-900 text-gray-400 text-sm font-medium hover:bg-gray-800 rounded-r-md">
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}