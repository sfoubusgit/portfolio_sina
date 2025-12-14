import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import AddToCartButton from '@/components/AddToCartButton';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Produkt nicht gefunden – EcoSpark',
    };
  }

  return {
    title: `${product.name} – EcoSpark`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const relatedProducts = product ? getRelatedProducts(product) : [];

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative w-full h-96 md:h-[500px] bg-off-white rounded-eco border border-gray-low overflow-hidden">
          <Image
            src={product.image || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.badges.map((badge) => (
              <Badge key={badge} variant={badge === 'Zero Waste' ? 'default' : 'mint'}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-deep-forest mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-deep-forest mb-6">
            {formatPrice(product.price)}
          </p>
          <p className="text-lg text-graphite mb-6">
            {product.description}
          </p>

          <div className="bg-soft-mint rounded-eco p-4 mb-6">
            <p className="text-sm font-semibold text-deep-forest mb-2">
              🌱 Nachhaltigkeit
            </p>
            <p className="text-sm text-graphite">
              {product.sustainabilityInfo}
            </p>
          </div>

          {product.benefits && (
            <div className="mb-6">
              <h3 className="font-heading font-semibold text-deep-forest mb-3">
                Vorteile:
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-leaf-green mr-2">✓</span>
                    <span className="text-graphite">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <p className={`text-sm font-semibold mb-4 ${product.inStock ? 'text-leaf-green' : 'text-red-600'}`}>
              {product.inStock ? '✓ Auf Lager' : '✗ Nicht verfügbar'}
            </p>
            {product.inStock && (
              <AddToCartButton product={product} />
            )}
          </div>
        </div>
      </div>

      {/* Details Section */}
      {product.details && (
        <div className="mb-12">
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
            Details & Materialien
          </h2>
          <p className="text-graphite mb-4">{product.details}</p>
          {product.materials && (
            <div>
              <h3 className="font-heading font-semibold text-deep-forest mb-2">
                Materialien:
              </h3>
              <ul className="list-disc list-inside text-graphite">
                {product.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Nachhaltigkeit Section */}
      <div className="mb-12">
        <h2 className="font-heading text-2xl font-bold text-deep-forest mb-4">
          Nachhaltigkeit
        </h2>
        <p className="text-graphite">
          {product.sustainabilityInfo}
        </p>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="font-heading text-2xl font-bold text-deep-forest mb-6">
            Passt dazu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


