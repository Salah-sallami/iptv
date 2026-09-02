import { Check, X, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ComparisonTable() {
  const comparisonItems = [
    {
      feature: "Monthly Cost",
      cable: "$120 - $180 / month",
      streamora: "$6.58 / month ($79/yr)",
      others: "$5 - $10 / month (unreliable)",
    },
    {
      feature: "Live TV Channels",
      cable: "150 - 250 Channels",
      streamora: "25,000+ Channels (FHD & 4K)",
      others: "Unstable / 50% dead links",
    },
    {
      feature: "VOD Movies & Series",
      cable: "Extra pay-per-view fees ($8/movie)",
      streamora: "120,000+ Movies & Shows Included Free",
      others: "Outdated / Broken subtitles",
    },
    {
      feature: "Live Sports & PPV",
      cable: "Blackouts + $80 per UFC PPV",
      streamora: "All Sports & All PPVs Included Free",
      others: "Constant freezes during big games",
    },
    {
      feature: "Transparent Pricing",
      cable: "Monthly bill + fees + taxes",
      streamora: "Flat CAD Pricing & No Hidden Fees",
      others: "Shady foreign USD billing",
    },
    {
      feature: "Hardware & Contracts",
      cable: "2-year contract + $15/mo box rental",
      streamora: "No Contracts & Works on Any Device",
      others: "No contract (vanishes in 2 weeks)",
    },
    {
      feature: "Customer Support",
      cable: "Long phone wait times (45+ mins)",
      streamora: "24/7 Priority Support (10-15 min SLA)",
      others: "No response / Telegram ghosting",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-index-box text-slate-900 border-slate-300 bg-slate-50 font-mono text-sm">
              04
            </div>
            <span className="text-red-600 font-bold text-sm px-2">⊛</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
              [ CABLE VS IPTV COMPARISON ]
            </span>

            <h2 className="font-headline text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-slate-900">
              WHAT MAKES US STAND OUT
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-md font-sans leading-relaxed">
            Comparing traditional cable ($160/mo), cheap unverified IPTV sellers, and Streamora IPTV.
          </p>
        </ScrollReveal>

        {/* Comparison Table with Scroll Reveal */}
        <ScrollReveal variant="scale" delay={150} className="overflow-x-auto rounded-3xl border border-slate-200 card-light shadow-md bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-mono uppercase tracking-wider">
                <th className="p-6 text-slate-700">Feature</th>
                <th className="p-6 text-slate-500">Traditional Cable</th>
                <th className="p-6 text-white bg-red-600 font-black">
                  ✦ STREAMORA IPTV (WINNER)
                </th>
                <th className="p-6 text-slate-500">Other Generic IPTV</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-sans">
              {comparisonItems.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-bold text-slate-900 font-mono text-xs uppercase">
                    {item.feature}
                  </td>
                  <td className="p-6 text-slate-500 text-xs">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item.cable}</span>
                    </div>
                  </td>
                  <td className="p-6 font-bold text-slate-900 bg-red-50/50 border-x border-red-200 text-xs">
                    <div className="flex items-center gap-2 text-red-600">
                      <Check className="w-4 h-4 text-red-600 shrink-0" />
                      <span className="text-slate-900 font-semibold">{item.streamora}</span>
                    </div>
                  </td>
                  <td className="p-6 text-slate-500 text-xs">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

      </div>
    </section>
  );
}
