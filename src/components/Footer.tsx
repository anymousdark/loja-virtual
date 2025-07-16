import React from 'react';
import { TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
interface FooterProps {
  onAboutClick?: () => void;
  onContactClick?: () => void;
}
export function Footer({
  onAboutClick = () => {},
  onContactClick = () => {}
}: FooterProps) {
  return <footer className="bg-black border-t border-[#9FEF00]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-[#9FEF00] font-bold text-2xl">TECH</span>
              <span className="ml-2 text-[#9FEF00] bg-[#9FEF00]/10 px-2 py-1 rounded text-xs">
                NEXUS
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop destination for cutting-edge home appliances and
              electronics.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Appliances
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Smart Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Deals & Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={onContactClick} className="text-gray-400 hover:text-[#9FEF00]">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#9FEF00]">
                  Warranty
                </a>
              </li>
              <li>
                <button onClick={onAboutClick} className="text-gray-400 hover:text-[#9FEF00]">
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#9FEF00]/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Tech Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}