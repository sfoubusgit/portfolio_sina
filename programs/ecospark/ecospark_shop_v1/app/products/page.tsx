import { Metadata } from 'next';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Alle Produkte – EcoSpark',
  description: 'Entdecke unsere komplette Auswahl an nachhaltigen Mini-Produkten, Zero-Waste Essentials und Eco Gadgets.',
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-deep-forest mb-4">
          Alle Produkte
        </h1>
        <p className="text-lg text-graphite">
          Entdecke unsere komplette Auswahl an nachhaltigen Produkten.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}




