import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ThreeScene } from './components/ThreeScene';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CategoryPage } from './components/CategoryPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CartPage } from './components/CartPage';
export function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="flex w-full h-screen justify-center items-center bg-black">
        <div className="text-[#9FEF00] text-4xl font-bold animate-pulse">
          LOADING...
        </div>
      </div>;
  }
  // Navigation handler
  const handleNavigation = (page: string, category?: string) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
  };
  // Show different pages based on currentPage state
  switch (currentPage) {
    case 'login':
      return <LoginPage onBackClick={() => setCurrentPage('home')} />;
    case 'product':
      return <ProductDetailPage onBackClick={() => setCurrentPage('home')} />;
    case 'category':
      return <CategoryPage onBackClick={() => setCurrentPage('home')} category={selectedCategory} />;
    case 'about':
      return <AboutPage onBackClick={() => setCurrentPage('home')} />;
    case 'contact':
      return <ContactPage onBackClick={() => setCurrentPage('home')} />;
    case 'cart':
      return <CartPage onBackClick={() => setCurrentPage('home')} />;
    default:
      return <div className="flex flex-col min-h-screen bg-black text-white">
          <Header onLoginClick={() => handleNavigation('login')} onCategoryClick={category => handleNavigation('category', category)} onCartClick={() => handleNavigation('cart')} onAboutClick={() => handleNavigation('about')} onContactClick={() => handleNavigation('contact')} />
          <main className="flex-1">
            <div className="relative h-[60vh]">
              <ThreeScene />
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-center">
                  <h1 className="text-5xl md:text-7xl font-bold text-[#9FEF00] mb-4">
                    TECH NEXUS 3D
                  </h1>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                    The future of home appliances is here. Discover our
                    cutting-edge collection.
                  </p>
                  <button onClick={() => handleNavigation('category', 'All Products')} className="mt-8 bg-[#9FEF00] text-black font-medium py-3 px-8 rounded-md hover:bg-[#9FEF00]/80 transition-colors pointer-events-auto">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <section className="py-16 px-4 max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[#9FEF00]">
                  Featured Products
                </h2>
                <button onClick={() => handleNavigation('category', 'All Products')} className="text-[#9FEF00] hover:text-[#9FEF00]/80">
                  View All
                </button>
              </div>
              <ProductGrid onProductClick={() => handleNavigation('product')} />
            </section>
          </main>
          <Footer onAboutClick={() => handleNavigation('about')} onContactClick={() => handleNavigation('contact')} />
        </div>;
  }
}