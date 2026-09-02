export default function StatsStrip() {
  const stats = [
    {
      num: "01",
      value: "25,000+",
      label: "LIVE CHANNELS",
      subtext: "Canada, USA, UK, Global",
      highlight: "text-red-600"
    },
    {
      num: "02",
      value: "120,000+",
      label: "MOVIES & SERIES",
      subtext: "Updated Daily with EPG",
      highlight: "text-slate-900"
    },
    {
      num: "03",
      value: "5,000+",
      label: "ACTIVE SUBSCRIBERS",
      subtext: "10 Canadian Provinces",
      highlight: "text-blue-600"
    },
    {
      num: "04",
      value: "99.9%",
      label: "SERVER UPTIME",
      subtext: "Anti-Freeze 9.8™ Routing",
      highlight: "text-emerald-600"
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="card-light p-6 flex flex-col justify-between group hover:border-slate-300 transition-all bg-white"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                <span className="font-bold">{item.num}</span>
                <span className="text-slate-500 font-bold tracking-widest text-[10px]">
                  {item.label}
                </span>
              </div>

              <div className={`font-headline text-4xl sm:text-5xl tracking-tight mb-1 font-mono ${item.highlight}`}>
                {item.value}
              </div>

              <div className="text-xs text-slate-500 font-sans">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
