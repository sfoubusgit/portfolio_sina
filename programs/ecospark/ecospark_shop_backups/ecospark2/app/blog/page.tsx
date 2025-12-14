import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog – EcoSpark',
  description: 'Tipps, Tricks und Inspirationen für einen nachhaltigeren Alltag. Zero Waste, Eco Gadgets und mehr.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-deep-forest mb-8">
        Blog
      </h1>
      <p className="text-lg text-graphite mb-12">
        Tipps, Tricks und Inspirationen für einen nachhaltigeren Alltag.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-eco border border-gray-low overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {post.image && (
              <div className="relative w-full h-48 bg-off-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6">
              <p className="text-sm text-gray-mid mb-2">
                {formatDate(post.date)} • {post.author}
              </p>
              <h2 className="font-heading text-xl font-bold text-deep-forest mb-3 group-hover:text-leaf-green transition-colors">
                {post.title}
              </h2>
              <p className="text-graphite line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



