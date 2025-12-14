import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Kategorie nicht gefunden – EcoSpark',
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  const products = category ? getProductsByCategory(category.slug) : [];

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold text-deep-forest mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-graphite">
          {category.description}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-mid">Keine Produkte in dieser Kategorie gefunden.</p>
      )}
    </div>
  );
}


