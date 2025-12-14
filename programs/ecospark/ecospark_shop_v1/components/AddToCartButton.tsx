'use client';

import { useState } from 'react';
import { Product } from '@/data/types';
import { useCart } from '@/context/CartContext';
import Button from './Button';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button
      variant="primary"
      onClick={handleAddToCart}
      className="w-full md:w-auto"
    >
      {added ? '✓ Zum Warenkorb hinzugefügt' : 'In den Warenkorb'}
    </Button>
  );
}




