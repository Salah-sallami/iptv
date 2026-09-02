import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, User, Calendar } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function SingleBlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-red-600 hover:text-red-700 mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header */}
        <div className="mb-10 space-y-4 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 uppercase">
              {post.category}
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl tracking-tight leading-tight text-slate-900">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span>BY {post.author.toUpperCase()}</span>
            <span>•</span>
            <span>{post.date.toUpperCase()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="card-light p-8 sm:p-12 border border-slate-200 mb-16 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-sans bg-white shadow-xs">
          {post.content.split("\n\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={index} className="font-headline text-2xl text-slate-900 pt-4 pb-1">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            } else if (trimmed.startsWith("## ")) {
              return (
                <h2 key={index} className="font-headline text-3xl text-red-600 pt-6 pb-2 border-b border-slate-100">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            } else if (trimmed.startsWith("- ")) {
              const listItems = trimmed.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={index} className="space-y-2 list-disc list-inside text-slate-700">
                  {listItems.map((li, i) => (
                    <li key={i}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            } else if (trimmed.length > 0) {
              return (
                <p key={index} className="text-slate-700 leading-relaxed">
                  {trimmed}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl card-light border border-slate-200 text-center space-y-6 bg-slate-50">
          <h3 className="font-headline text-4xl text-slate-900">START STREAMING IN 4K TODAY</h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-sans">
            Test all 25,000+ channels and 4K sports with zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="btn-pill-red text-xs group"
            >
              <span>View Pricing &amp; Plans</span>
              <div className="btn-circle-icon">
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </Link>
            <Link
              href="/channels"
              className="btn-pill-outline text-xs group"
            >
              <span>Browse 25k+ Channels</span>
              <div className="btn-circle-icon-dark">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
