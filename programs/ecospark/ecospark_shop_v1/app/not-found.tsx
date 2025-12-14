import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-6xl font-bold text-deep-forest mb-4">
          404
        </h1>
        <h2 className="font-heading text-3xl font-bold text-deep-forest mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-lg text-graphite mb-8">
          Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary">Zur Startseite</Button>
          </Link>
          <Link href="/products">
            <Button variant="secondary">Produkte entdecken</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}




