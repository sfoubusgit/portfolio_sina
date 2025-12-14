import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/types';
import { formatPrice } from '@/lib/utils';
import Badge from './Badge';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-eco border border-gray-low overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative w-full h-64 bg-off-white">
          <Image
            src={product.images?.[0] || product.image || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge key={badge} variant={badge === 'Zero Waste' ? 'default' : 'mint'}>
                {badge}
              </Badge>
            ))}
          </div>
          <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-mid mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-heading text-xl font-bold text-deep-forest">
              {formatPrice(product.price)}
            </span>
            <Button variant="secondary" className="text-sm py-2 px-4">
              Details
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}



