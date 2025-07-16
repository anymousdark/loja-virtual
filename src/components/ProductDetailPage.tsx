import React from 'react';
import { StarIcon, ShoppingCartIcon, HeartIcon, ArrowLeftIcon } from 'lucide-react';
import { Footer } from './Footer';
interface ProductDetailPageProps {
  onBackClick: () => void;
}
export function ProductDetailPage({
  onBackClick
}: ProductDetailPageProps) {
  // Mock product data - in a real app, this would come from props or API
  const product = {
    id: 1,
    title: 'Smart 4K OLED TV',
    category: 'Electronics',
    price: 1299.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '15% OFF',
    description: 'Experience stunning visuals with our premium 4K OLED TV. This smart TV features AI-powered picture quality enhancement, immersive sound, and seamless integration with your smart home devices.',
    features: ['Ultra HD 4K Resolution (3840 x 2160)', 'AI Picture Enhancement', 'Dolby Atmos Sound', 'Smart Home Integration', 'Voice Control Compatible', 'Multiple HDMI and USB Ports'],
    specs: {
      Display: '65" OLED',
      Resolution: '4K Ultra HD',
      HDR: 'Yes, HDR10+',
      'Refresh Rate': '120Hz',
      'Smart Platform': 'TechOS 4.0',
      Connectivity: 'Wi-Fi, Bluetooth 5.0, HDMI x4, USB x3'
    }
  };
  return <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBackClick} className="flex items-center text-[#9FEF00] hover:text-[#9FEF00]/80">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to products
          </button>
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-[#9FEF00]/20">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover" />
                {product.discount && <div className="absolute top-4 right-4 bg-[#9FEF00] text-black text-sm font-bold px-3 py-1 rounded">
                    {product.discount}
                  </div>}
              </div>
              <div className="p-4 flex justify-center space-x-4">
                <div className="h-16 w-16 bg-gray-800 border border-[#9FEF00]/20 rounded-md"></div>
                <div className="h-16 w-16 bg-gray-800 border border-[#9FEF00]/20 rounded-md"></div>
                <div className="h-16 w-16 bg-gray-800 border border-[#9FEF00]/20 rounded-md"></div>
              </div>
            </div>
            {/* Product Info */}
            <div>
              <div className="bg-[#9FEF00]/10 inline-block px-3 py-1 rounded text-[#9FEF00] text-sm mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {product.title}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-white">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-400">256 reviews</span>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-white">
                  ${product.price.toFixed(2)}
                </div>
                {product.discount && <div className="flex items-center mt-1">
                    <span className="text-gray-400 line-through mr-2">
                      ${(product.price * 1.15).toFixed(2)}
                    </span>
                    <span className="text-[#9FEF00]">{product.discount}</span>
                  </div>}
              </div>
              <p className="text-gray-400 mb-6">{product.description}</p>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-2">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => <li key={index} className="flex items-start">
                      <div className="text-[#9FEF00] mr-2">•</div>
                      <span className="text-gray-400">{feature}</span>
                    </li>)}
                </ul>
              </div>
              <div className="flex space-x-4 mb-8">
                <button className="flex-1 bg-[#9FEF00] text-black font-medium py-3 px-6 rounded-md hover:bg-[#9FEF00]/80 transition-colors flex items-center justify-center">
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-700 transition-colors">
                  <HeartIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => <div key={key} className="flex flex-col">
                      <span className="text-sm text-gray-400">{key}</span>
                      <span className="text-white">{value}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          {/* Related Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-[#9FEF00]">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(item => <div key={item} className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <h3 className="text-white font-medium">
                      Related Product {item}
                    </h3>
                    <div className="text-[#9FEF00] mt-2">$299.99</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}