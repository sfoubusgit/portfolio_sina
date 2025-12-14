import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog-Artikel nicht gefunden – EcoSpark',
    };
  }

  return {
    title: `${post.title} – EcoSpark Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {post.image && (
          <div className="relative w-full h-64 md:h-96 bg-off-white rounded-eco border border-gray-low overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}
        
        <header className="mb-8">
          <p className="text-sm text-gray-mid mb-4">
            {formatDate(post.date)} • {post.author}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-deep-forest mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-graphite">
            {post.excerpt}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="text-graphite">
            {post.content.split('\n\n').map((block, blockIndex) => {
              const trimmed = block.trim();
              if (!trimmed) return null;
              
              if (trimmed.startsWith('# ')) {
                return <h2 key={blockIndex} className="font-heading text-2xl font-bold text-deep-forest mt-8 mb-4">{trimmed.substring(2)}</h2>;
              }
              if (trimmed.startsWith('## ')) {
                return <h3 key={blockIndex} className="font-heading text-xl font-bold text-deep-forest mt-6 mb-3">{trimmed.substring(3)}</h3>;
              }
              if (trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
                return (
                  <ul key={blockIndex} className="list-disc list-inside space-y-2 my-4 ml-4">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.substring(2)}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={blockIndex} className="mb-4">{trimmed}</p>;
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

