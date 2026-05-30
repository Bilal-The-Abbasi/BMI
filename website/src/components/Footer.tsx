import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <span className="font-bold text-white text-lg">OwnerOS AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The AI Operating System for Owner-Led Businesses. Stop running your business from your inbox.
            </p>
            <div className="mt-6">
              <Link href="/audit" className="btn-primary text-sm py-2 px-5">
                Get Your OwnerOS Audit →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/audit" className="text-gray-400 hover:text-white text-sm transition-colors">OwnerOS Audit</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">QuickStart</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Growth System</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Partner Retainer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/method" className="text-gray-400 hover:text-white text-sm transition-colors">The Method</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Industries</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} OwnerOS AI. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs text-center max-w-lg">
            AI is used as a support tool in all deliverables. All AI-generated content is reviewed by our team before delivery. We do not provide legal, medical, or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
