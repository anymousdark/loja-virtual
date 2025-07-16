import React from 'react';
import { ProductCard } from './ProductCard';
interface ProductGridProps {
  onProductClick?: () => void;
}
export function ProductGrid({
  onProductClick = () => {}
}: ProductGridProps) {
  const products = [{
    id: 1,
    title: 'Smart 4K OLED TV',
    category: 'Electronics',
    price: 1299.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '15% OFF'
  }, {
    id: 2,
    title: 'Smart Refrigerator',
    category: 'Appliances',
    price: 2499.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 3,
    title: 'Robot Vacuum Cleaner',
    category: 'Smart Home',
    price: 399.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '20% OFF'
  }, {
    id: 4,
    title: 'Wireless Noise-Canceling Headphones',
    category: 'Electronics',
    price: 249.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 5,
    title: 'Smart Washing Machine',
    category: 'Appliances',
    price: 899.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '10% OFF'
  }, {
    id: 6,
    title: 'Smart Home Security System',
    category: 'Smart Home',
    price: 349.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 7,
    title: 'Gaming Laptop',
    category: 'Electronics',
    price: 1499.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '10% OFF'
  }, {
    id: 8,
    title: 'Smart Coffee Maker',
    category: 'Appliances',
    price: 129.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1520970519539-3a39f0bcd3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 9,
    title: 'Smartphone',
    category: 'Electronics',
    price: 899.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '5% OFF'
  }, {
    id: 10,
    title: 'Smart Doorbell',
    category: 'Smart Home',
    price: 199.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558389186-438424b00a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 11,
    title: 'Air Purifier',
    category: 'Appliances',
    price: 249.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1585771273272-0f5c59945131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '15% OFF'
  }, {
    id: 12,
    title: 'Smartwatch',
    category: 'Electronics',
    price: 299.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 13,
    title: 'Smart Thermostat',
    category: 'Smart Home',
    price: 149.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567769541715-8c71fe49fd43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 14,
    title: 'Electric Toothbrush',
    category: 'Appliances',
    price: 79.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1559591937-abc5678da6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '10% OFF'
  }, {
    id: 15,
    title: 'Wireless Earbuds',
    category: 'Electronics',
    price: 149.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 16,
    title: 'Smart Light Bulbs',
    category: 'Smart Home',
    price: 59.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1563461661026-49631dd5d68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '20% OFF'
  }, {
    id: 17,
    title: 'Electric Kettle',
    category: 'Appliances',
    price: 49.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: null
  }, {
    id: 18,
    title: 'Drone with Camera',
    category: 'Electronics',
    price: 599.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    discount: '10% OFF'
  }];
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => <ProductCard key={product.id} product={product} onClick={onProductClick} />)}
    </div>;
}