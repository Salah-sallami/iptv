"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { FAQS_LIST } from "@/data/faqs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="badge-index-box text-red-600 border-red-200 bg-red-50 font-mono text-sm">
              7 
            </div>
            <span className="text-red-600 font-bold text-sm px-2">?</span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
              [ FREQUENTLY ASKED QUESTIONS ]
            </span>

            <h2 className="font-headline text-5xl sm:text-6xl tracking-tight leading-none text-slate-900">
              COMMON QUESTIONS
            </h2>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            ANSWERS ABOUT SETUP, CHANNELS &amp; PLANS
          </p>
        </ScrollReveal>

        {/* Accordion list with Scroll Reveal */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={faq.id}
                delay={index * 50}
                className="card-light border border-slate-200 overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-red-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline text-2xl tracking-wide">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center transition-transform duration-200 ${isOpen ? "rotate-180 bg-red-600 text-white font-bold" : "text-slate-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Help Notice with Scroll Animation */}
        <ScrollReveal delay={150} className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-headline text-xl text-slate-900">STILL HAVE QUESTIONS?</h4>
            <p className="text-xs text-slate-600 font-sans">Our Canadian support team responds within 10-15 minutes.</p>
          </div>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-outline text-xs group"
          >
            <span>WhatsApp Support</span>
            <div className="btn-circle-icon-dark">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-white" />
            </div>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
