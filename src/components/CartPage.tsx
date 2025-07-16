import React, { useState } from 'react';
import { Footer } from './Footer';
import { ArrowLeftIcon, TrashIcon, PlusIcon, MinusIcon, CreditCardIcon, ShoppingBagIcon } from 'lucide-react';
interface CartPageProps {
  onBackClick: () => void;
}
export function CartPage({
  onBackClick
}: CartPageProps) {
  // Mock cart items
  const [cartItems, setCartItems] = useState([{
    id: 1,
    title: 'Smart 4K OLED TV',
    price: 1299.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 3,
    title: 'Robot Vacuum Cleaner',
    price: 399.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }]);
  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  // Remove item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Calculate shipping (mock calculation)
  const shipping = subtotal > 1000 ? 0 : 25;
  // Calculate tax (mock calculation - 8%)
  const tax = subtotal * 0.08;
  // Calculate total
  const total = subtotal + shipping + tax;
  return <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBackClick} className="flex items-center text-[#9FEF00] hover:text-[#9FEF00]/80">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to shopping
          </button>
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#9FEF00] mb-8">
            Your Shopping Cart
          </h1>
          {cartItems.length === 0 ? <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg p-8 text-center">
              <ShoppingBagIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <button onClick={onBackClick} className="bg-[#9FEF00] text-black font-medium py-2 px-6 rounded-md hover:bg-[#9FEF00]/80 transition-colors">
                Continue Shopping
              </button>
            </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#9FEF00]/10">
                    <h2 className="text-xl font-bold">
                      Cart Items ({cartItems.length})
                    </h2>
                  </div>
                  <div>
                    {cartItems.map(item => <div key={item.id} className="px-6 py-6 border-b border-[#9FEF00]/10 flex items-center">
                        <div className="h-20 w-20 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="font-medium text-white">
                            {item.title}
                          </h3>
                          <div className="text-[#9FEF00] mt-1">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-800 p-1 rounded-md hover:bg-gray-700">
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="mx-3 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-800 p-1 rounded-md hover:bg-gray-700">
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="ml-6 text-right">
                          <div className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-400 mt-1 flex items-center text-sm">
                            <TrashIcon className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#9FEF00]/10">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="font-medium">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Shipping</span>
                        <span className="font-medium">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Tax</span>
                        <span className="font-medium">${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-[#9FEF00]/10 pt-4 mt-4">
                        <div className="flex justify-between">
                          <span className="font-bold">Total</span>
                          <span className="font-bold text-[#9FEF00]">
                            ${total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-[#9FEF00] text-black font-medium py-3 px-4 rounded-md hover:bg-[#9FEF00]/80 transition-colors mt-6 flex items-center justify-center">
                      <CreditCardIcon className="h-5 w-5 mr-2" />
                      Proceed to Checkout
                    </button>
                    <div className="mt-6">
                      <div className="text-sm text-gray-400 mb-2">
                        We accept:
                      </div>
                      <div className="flex space-x-2">
                        <div className="bg-gray-800 rounded p-2 w-12 h-8"></div>
                        <div className="bg-gray-800 rounded p-2 w-12 h-8"></div>
                        <div className="bg-gray-800 rounded p-2 w-12 h-8"></div>
                        <div className="bg-gray-800 rounded p-2 w-12 h-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Promo Code */}
                <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden mt-6">
                  <div className="px-6 py-4 border-b border-[#9FEF00]/10">
                    <h2 className="text-xl font-bold">Promo Code</h2>
                  </div>
                  <div className="p-6">
                    <div className="flex">
                      <input type="text" placeholder="Enter code" className="bg-black border border-gray-700 text-white rounded-l-md block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" />
                      <button className="bg-[#9FEF00]/20 text-[#9FEF00] font-medium px-4 rounded-r-md hover:bg-[#9FEF00]/30 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </main>
      <Footer />
    </div>;
}