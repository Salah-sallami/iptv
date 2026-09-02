import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";

export default function BlogHubPage() {
  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
            <span>IPTV CANADA UPDATES &amp; GUIDES</span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl tracking-tight leading-none text-slate-900">
            STREAMING INSIGHTS &bull; EN &amp; FR
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-sans">
            Canadian IPTV buying criteria, device installation walkthroughs, and performance benchmarks.
          </p>
        </div>

        {/* Blog Posts 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="card-light p-8 flex flex-col justify-between group hover:border-red-300 transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
                  <span className="text-red-600 font-bold uppercase">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-headline text-3xl text-slate-900 tracking-wide mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
