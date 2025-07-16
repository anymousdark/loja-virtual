import React, { useState } from 'react';
import { MenuIcon, XIcon, UserIcon, ShoppingCartIcon, SearchIcon } from 'lucide-react';
interface HeaderProps {
  onLoginClick: () => void;
  onCategoryClick?: (category: string) => void;
  onCartClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}
export function Header({
  onLoginClick,
  onCategoryClick = () => {},
  onCartClick = () => {},
  onAboutClick = () => {},
  onContactClick = () => {}
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-black border-b border-[#9FEF00]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-[#9FEF00] font-bold text-2xl">TECH</span>
              <span className="ml-2 text-[#9FEF00] bg-[#9FEF00]/10 px-2 py-1 rounded text-xs">
                NEXUS
              </span>
            </div>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <button onClick={() => onCategoryClick('All Products')} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                All Products
              </button>
              <button onClick={() => onCategoryClick('Electronics')} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                Electronics
              </button>
              <button onClick={() => onCategoryClick('Appliances')} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                Appliances
              </button>
              <button onClick={() => onCategoryClick('Smart Home')} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                Smart Home
              </button>
              <button onClick={onAboutClick} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                About Us
              </button>
              <button onClick={onContactClick} className="text-gray-300 hover:text-[#9FEF00] px-3 py-2 text-sm font-medium">
                Contact
              </button>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <button className="text-gray-300 hover:text-[#9FEF00] p-2">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button onClick={onCartClick} className="text-gray-300 hover:text-[#9FEF00] p-2">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
            <button onClick={onLoginClick} className="text-gray-300 hover:text-[#9FEF00] p-2">
              <UserIcon className="h-5 w-5" />
            </button>
            <button onClick={() => onCategoryClick('All Products')} className="ml-4 bg-[#9FEF00] text-black font-medium py-2 px-4 rounded-md hover:bg-[#9FEF00]/80">
              Shop Now
            </button>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-[#9FEF00] p-2">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <button onClick={() => {
          onCategoryClick('All Products');
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              All Products
            </button>
            <button onClick={() => {
          onCategoryClick('Electronics');
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Electronics
            </button>
            <button onClick={() => {
          onCategoryClick('Appliances');
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Appliances
            </button>
            <button onClick={() => {
          onCategoryClick('Smart Home');
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Smart Home
            </button>
            <button onClick={() => {
          onAboutClick();
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              About Us
            </button>
            <button onClick={() => {
          onContactClick();
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Contact
            </button>
            <button onClick={() => {
          onCartClick();
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Cart
            </button>
            <button onClick={() => {
          onLoginClick();
          setIsMenuOpen(false);
        }} className="text-gray-300 hover:text-[#9FEF00] block px-3 py-2 text-base font-medium w-full text-left">
              Sign In
            </button>
            <button onClick={() => {
          onCategoryClick('All Products');
          setIsMenuOpen(false);
        }} className="mt-4 w-full bg-[#9FEF00] text-black font-medium py-2 px-4 rounded-md hover:bg-[#9FEF00]/80">
              Shop Now
            </button>
          </div>
        </div>}
    </header>;
}