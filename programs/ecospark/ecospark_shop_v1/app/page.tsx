import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getProductBySlug } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'EcoSpark – Kleine Dinge, großer Impact',
  description: 'Entdecke nachhaltige Mini-Produkte, Zero-Waste Essentials & grüne Geschenkideen für einen bewussteren Alltag.',
};

export default function HomePage() {
  // Featured products by slug
  const featuredProductSlugs = [
    'bienenwachstuecher-set',
    'bambus-besteck-set',
    'edelstahl-strohhalme',
    'seedbomb-trio',
    'plantable-pencils',
    'tire-wallet',
  ];

  const featuredProducts = featuredProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product) => product !== undefined);

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-[#FAFAF7] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-deep-forest mb-6">
                Nachhaltige Essentials für einen grüneren Alltag.
              </h1>
              <p className="text-lg md:text-xl text-graphite mb-8 leading-relaxed">
                EcoSpark bringt dir sorgfältig kuratierte Zero-Waste Produkte, Eco Gadgets und nachhaltige Mini-Grow-Kits – für ein besseres Leben mit kleinem Fußabdruck.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button variant="primary" className="bg-leaf-green hover:bg-opacity-90">
                    Jetzt entdecken
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary">Unsere Mission</Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-eco overflow-hidden">
              <Image
                src="/images/hero_images/hero_image.webp"
                alt="EcoSpark nachhaltige Produkte"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. USP BAR */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2">
                Nachhaltig ausgewählt
              </h3>
              <p className="text-sm text-gray-mid">
                Alle Produkte sorgfältig nach Material & Lebensdauer geprüft.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2">
                Zero-Waste Fokus
              </h3>
              <p className="text-sm text-gray-mid">
                Wiederverwendbare, langlebige & umweltfreundliche Lösungen.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2">
                Plastikfreier Versand
              </h3>
              <p className="text-sm text-gray-mid">
                Mit recycelten Materialien & klimafreundlichem Versand.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💚</div>
              <h3 className="font-heading text-lg font-semibold text-deep-forest mb-2">
                Kleine Produkte. Große Wirkung.
              </h3>
              <p className="text-sm text-gray-mid">
                Perfekt zum Start in einen nachhaltigen Alltag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              Beliebte nachhaltige Produkte
            </h2>
            <p className="text-lg text-gray-mid">
              Entdecke unsere meistgeklickten Eco Favoriten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CATEGORY GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              Produkte nach Kategorien
            </h2>
            <p className="text-lg text-gray-mid">
              Finde deine perfekte nachhaltige Produktwelt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/categories/zero-waste"
              className="group bg-white rounded-eco border border-gray-low p-8 hover:border-leaf-green hover:bg-soft-mint transition-all duration-200"
            >
              <div className="relative w-full h-48 mb-4 rounded-eco overflow-hidden bg-off-white">
                <Image
                  src="/products/bienenwachstuecher-set/ChatGPT Image 2. Dez. 2025, 22_14_35.webp"
                  alt="Zero Waste Essentials"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
                Zero Waste Essentials
              </h3>
              <p className="text-gray-mid">
                Plastikfrei in den Alltag starten.
              </p>
            </Link>
            <Link
              href="/categories/grow-green"
              className="group bg-white rounded-eco border border-gray-low p-8 hover:border-leaf-green hover:bg-soft-mint transition-all duration-200"
            >
              <div className="relative w-full h-48 mb-4 rounded-eco overflow-hidden bg-off-white">
                <Image
                  src="/products/seedbomb-trio/ChatGPT Image 2. Dez. 2025, 22_14_28.webp"
                  alt="Grow Green Kits"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
                Grow Green Kits
              </h3>
              <p className="text-gray-mid">
                Pflanze deine eigenen Kräuter & Minis.
              </p>
            </Link>
            <Link
              href="/categories/eco-gadgets"
              className="group bg-white rounded-eco border border-gray-low p-8 hover:border-leaf-green hover:bg-soft-mint transition-all duration-200"
            >
              <div className="relative w-full h-48 mb-4 rounded-eco overflow-hidden bg-off-white">
                <Image
                  src="/products/solar-flower/ChatGPT Image 2. Dez. 2025, 22_14_07.webp"
                  alt="Eco Gadgets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
                Eco Gadgets
              </h3>
              <p className="text-gray-mid">
                Energie sparen – smart & nachhaltig.
              </p>
            </Link>
            <Link
              href="/categories/upcycling"
              className="group bg-white rounded-eco border border-gray-low p-8 hover:border-leaf-green hover:bg-soft-mint transition-all duration-200"
            >
              <div className="relative w-full h-48 mb-4 rounded-eco overflow-hidden bg-off-white">
                <Image
                  src="/products/tire-wallet/ChatGPT Image 2. Dez. 2025, 22_14_03.webp"
                  alt="Upcycling Produkte"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-deep-forest mb-2 group-hover:text-leaf-green transition-colors">
                Upcycling Produkte
              </h3>
              <p className="text-gray-mid">
                Neues Leben für alte Materialien.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL / MISSION SECTION */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-forest mb-6">
                Nachhaltigkeit beginnt im Kleinen.
              </h2>
              <p className="text-lg text-graphite mb-8 leading-relaxed">
                Wir glauben, dass jedes Produkt eine Geschichte erzählt. EcoSpark wählt Produkte aus, die langlebig, funktional und bewusst nachhaltig sind. Kleine Veränderungen – große Wirkung.
              </p>
              <Link href="/about">
                <Button variant="secondary" className="inline-flex items-center gap-2">
                  Mehr erfahren
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-64 md:h-96 rounded-eco overflow-hidden">
              <Image
                src="/products/plantable-pencils/ChatGPT Image 2. Dez. 2025, 22_14_27.webp"
                alt="Nachhaltigkeit bei EcoSpark"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOOKBOOK / LIFESTYLE GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-forest mb-4">
              Nachhaltigkeit, die man fühlt.
            </h2>
            <p className="text-lg text-gray-mid">
              Echte Produkte im Alltag – freundlich zur Umwelt und einfach zu nutzen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/bienenwachstuecher-set/ChatGPT Image 2. Dez. 2025, 22_14_35.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/bambus-besteck-set/ChatGPT Image 2. Dez. 2025, 22_14_34.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/seedbomb-trio/ChatGPT Image 2. Dez. 2025, 22_14_28.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/plantable-pencils/ChatGPT Image 2. Dez. 2025, 22_14_27.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/solar-flower/ChatGPT Image 2. Dez. 2025, 22_14_07.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full h-48 md:h-64 rounded-eco overflow-hidden">
              <Image
                src="/products/tire-wallet/ChatGPT Image 2. Dez. 2025, 22_14_03.webp"
                alt="EcoSpark Lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <section className="py-16 md:py-20 bg-deep-forest text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Join the EcoSpark Community
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Erhalte Tipps für einen nachhaltigen Alltag, neue Produkte & exklusive Angebote.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-eco text-deep-forest focus:outline-none focus:ring-2 focus:ring-leaf-green"
              />
              <Button variant="secondary" type="submit" className="bg-leaf-green text-white border-leaf-green hover:bg-opacity-90">
                Anmelden
              </Button>
            </form>
            <p className="text-sm text-gray-400">
              Kein Spam. Nur echte Nachhaltigkeit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
