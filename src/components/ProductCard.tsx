import React from 'react';
import { TvIcon, HomeIcon, SmartphoneIcon, StarIcon, ShoppingCartIcon } from 'lucide-react';
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  discount: string | null;
}
interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}
export function ProductCard({
  product,
  onClick = () => {}
}: ProductCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Electronics':
        return <TvIcon className="h-5 w-5" />;
      case 'Appliances':
        return <HomeIcon className="h-5 w-5" />;
      case 'Smart Home':
        return <SmartphoneIcon className="h-5 w-5" />;
      default:
        return <TvIcon className="h-5 w-5" />;
    }
  };
  return <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden hover:border-[#9FEF00]/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        {product.discount && <div className="absolute top-2 right-2 bg-[#9FEF00] text-black text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </div>}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="bg-[#9FEF00]/10 p-2 rounded mr-3">
            {getCategoryIcon(product.category)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{product.title}</h3>
            <span className="text-sm text-[#9FEF00]">{product.category}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <div className="flex items-center">
            <span className="text-lg font-bold text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#9FEF00]/10 p-3 bg-black/30">
        <button className="w-full bg-[#9FEF00]/10 hover:bg-[#9FEF00]/20 text-[#9FEF00] py-2 rounded text-sm font-medium transition-colors flex items-center justify-center">
          <ShoppingCartIcon className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>;
}