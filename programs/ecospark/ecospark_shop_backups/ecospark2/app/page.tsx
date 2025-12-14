import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getBestsellerProducts, getHeroProducts } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'EcoSpark – Kleine Dinge, großer Impact',
  description: 'Entdecke nachhaltige Mini-Produkte, Zero-Waste Essentials & grüne Geschenkideen für einen bewussteren Alltag.',
};

export default function HomePage() {
  const bestseller = getBestsellerProducts().slice(0, 4);
  const heroProducts = getHeroProducts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-forest mb-6">
                EcoSpark – Kleine Dinge, großer Impact
              </h1>
              <p className="text-lg text-graphite mb-8">
                Entdecke nachhaltige Mini-Produkte, Zero-Waste Essentials & grüne Geschenkideen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button variant="primary">Jetzt nachhaltig shoppen</Button>
                </Link>
                <a href="#bestseller">
                  <Button variant="secondary">Unsere Bestseller</Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {heroProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <div className="relative h-48 bg-white rounded-eco border border-gray-low overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={product.image || '/images/placeholder.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-deep-forest mb-8 text-center">
            Unsere Kategorien
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="bg-off-white rounded-eco border border-gray-low p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-mid">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller Section */}
      <section id="bestseller" className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-deep-forest mb-8 text-center">
            Unsere Bestseller
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestseller.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why EcoSpark Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-deep-forest mb-12 text-center">
            Warum EcoSpark?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-forest mb-2">
                Echte Nachhaltigkeit
              </h3>
              <p className="text-sm text-gray-mid">
                Wir wählen nur Produkte aus, die wirklich nachhaltig sind und einen positiven Impact haben.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-forest mb-2">
                Plastikfreie Verpackung
              </h3>
              <p className="text-sm text-gray-mid">
                So weit wie möglich verzichten wir auf Plastik und setzen auf nachhaltige Verpackungen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-forest mb-2">
                Kleine Preise, großer Impact
              </h3>
              <p className="text-sm text-gray-mid">
                Nachhaltigkeit muss nicht teuer sein. Wir bieten qualitativ hochwertige Produkte zu fairen Preisen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soft-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-deep-forest mb-2">
                Bewusst ausgewählte Lieferanten
              </h3>
              <p className="text-sm text-gray-mid">
                Wir arbeiten nur mit Lieferanten zusammen, die unsere Werte teilen und nachhaltig produzieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grow & Green Highlight */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-eco border border-gray-low p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-deep-forest mb-4">
                  Lass es wachsen – kleine Naturmomente für deinen Alltag
                </h2>
                <p className="text-lg text-graphite mb-6">
                  Entdecke unsere Grow & Green Produkte: Seedbombs, Mini-Grow-Kits und pflanzbare Stifte. 
                  Jedes Produkt trägt Samen in sich und wird zu etwas Neuem.
                </p>
                <Link href="/categories/grow-green">
                  <Button variant="primary">Grow & Green entdecken</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {getHeroProducts()
                  .filter(p => p.category === 'grow-green')
                  .slice(0, 2)
                  .map((product) => (
                    <Link key={product.id} href={`/products/${product.slug}`}>
                      <div className="relative h-48 bg-off-white rounded-eco border border-gray-low overflow-hidden hover:shadow-lg transition-shadow">
                        <Image
                          src={product.image || '/images/placeholder.jpg'}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-deep-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Werde Teil der EcoSpark Community
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Eco-Tipps & exklusive Angebote direkt in dein Postfach.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-eco text-deep-forest focus:outline-none focus:ring-2 focus:ring-leaf-green"
            />
            <Button variant="secondary" type="submit">
              Anmelden
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}



