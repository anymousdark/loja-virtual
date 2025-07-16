import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface ProductTabsProps {
  onSelectTab: (tab: string) => void;
  selectedTab: string;
}
export function ProductTabs({
  onSelectTab,
  selectedTab
}: ProductTabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  // List of 40 product categories in Portuguese
  const productTabs = ['Todos', 'Smartphones', 'Notebooks', 'Tablets', 'TVs', 'Monitores', 'Câmeras', 'Fones de Ouvido', 'Caixas de Som', 'Impressoras', 'Roteadores', 'Teclados', 'Mouses', 'Consoles', 'Jogos', 'Smartwatches', 'Drones', 'Projetores', 'Acessórios', 'Áudio', 'Refrigeradores', 'Fogões', 'Micro-ondas', 'Máquinas de Lavar', 'Ar Condicionado', 'Aspiradores', 'Ventiladores', 'Cafeteiras', 'Liquidificadores', 'Processadores', 'Robôs de Limpeza', 'Iluminação Smart', 'Segurança', 'Assistentes Virtuais', 'Dispositivos Smart', 'Ferramentas', 'Barbeadores', 'Secadores', 'Saúde', 'Fitness'];
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' ? scrollContainerRef.current.scrollLeft - scrollAmount : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);
  return <div className="relative w-full mb-8">
      {showLeftArrow && <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 p-2 rounded-r-md text-[#9FEF00] hover:bg-opacity-90" aria-label="Scroll left">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>}
      <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide gap-2 py-2 px-2 bg-gray-900 rounded-lg border border-[#9FEF00]/20" style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
        {productTabs.map(tab => <button key={tab} onClick={() => onSelectTab(tab)} className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors ${selectedTab === tab ? 'bg-[#9FEF00] text-black font-medium' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            {tab}
          </button>)}
      </div>
      {showRightArrow && <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-70 p-2 rounded-l-md text-[#9FEF00] hover:bg-opacity-90" aria-label="Scroll right">
          <ChevronRightIcon className="h-5 w-5" />
        </button>}
    </div>;
}