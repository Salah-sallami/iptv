import { Star, CheckCircle2 } from "lucide-react";
import { REVIEWS_LIST } from "@/data/reviews";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-index-box text-red-600 border-red-200 bg-red-50 font-mono text-sm">
              06
            </div>
            <span className="text-red-600 font-bold text-sm px-2">★</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
              [ VERIFIED SUBSCRIBER EXPERIENCES ]
            </span>

            <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
              TRUSTED BY CANADIANS
            </h2>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-slate-800">4.94 / 5.0 (1,420+ REVIEWS)</span>
          </div>
        </ScrollReveal>

        {/* Reviews Grid with Profile Avatars & Clean Compact Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_LIST.map((review, index) => (
            <ScrollReveal
              key={review.id}
              delay={index * 70}
              variant="scale"
            >
              <div className="card-light p-6 sm:p-7 flex flex-col justify-between group hover:border-red-300 transition-all bg-white h-full shadow-sm hover:shadow-md rounded-3xl">
                
                <div>
                  {/* Top Bar: Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Concise Review Text (No Large Heading) */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Profile Avatar + User Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* User Profile Avatar Image */}
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-slate-900 font-sans">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {review.location}
                      </div>
                    </div>
                  </div>

                  {/* Device Tag */}
                  <div className="text-right font-mono text-[10px] text-slate-400 max-w-[110px] truncate">
                    <span>{review.deviceUsed}</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
