import Image from "next/image";
import Link from "next/link";
import type { JournalPost } from "@/lib/home-content";

type Props = { posts: JournalPost[] };

export function RelatedArticles({ posts }: Props) {
  if (!posts.length) return null;
  return (
    <div>
      <p className="caption !text-ink/50 mb-5">Keep reading</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group card-surface overflow-hidden rounded-xl"
          >
            <div className="relative h-36 overflow-hidden">
              <Image
                src={post.imageSrc}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-cinema group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-4">
              <p className="caption !text-ink/45 mb-1.5">{post.category}</p>
              <p className="text-[0.9375rem] font-semibold leading-snug text-ink line-clamp-2 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
