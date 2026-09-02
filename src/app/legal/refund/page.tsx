import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function RefundPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="card-light rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6 text-slate-600 text-sm leading-relaxed bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-headline">Refund &amp; Satisfaction Policy</h1>
              <p className="text-xs text-slate-500 font-mono">7-Day Technical Resolution Guarantee</p>
            </div>
          </div>

          <p>
            We take pride in providing Canada&apos;s most stable and buffer-free IPTV service. We stand 100% behind our streaming quality and Canadian CDN infrastructure.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-headline">1. 7-Day Technical Support Guarantee</h3>
          <p>
            If you encounter persistent technical issues with your subscription within the first 7 days that our Canadian support team is unable to troubleshoot and resolve, you are eligible for a full refund or credit adjustment.
          </p>

          <h3 className="text-lg font-bold text-slate-900 font-headline">2. How to Request Assistance or a Refund</h3>
          <p>
            Please contact our billing department at <strong className="text-red-600 font-mono">billing@streamoraiptv.com</strong> or via our 24/7 WhatsApp Support with your order number and transaction details.
          </p>
        </div>

      </div>
    </div>
  );
}
