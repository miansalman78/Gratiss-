
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f9f8] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background Decorations */}
      {/* Zig-zag arrow (Left) */}
      <div className="absolute top-[28%] left-[25%] md:left-[35%] text-[#17B8A6]/40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12 L8 8 L12 12 L16 8" />
          <path d="M16 8 L13 8" />
          <path d="M16 8 L16 11" />
        </svg>
      </div>

      {/* Sparkles (Right) */}
      <div className="absolute top-[22%] right-[25%] md:right-[35%] text-[#17B8A6]/40">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.4 7.2L20 8L16 12L17 18L12 15L7 18L8 12L4 8L9.6 7.2L12 2Z" transform="scale(0.6) translate(10, 10)" />
          <path d="M12 2L14.4 7.2L20 8L16 12L17 18L12 15L7 18L8 12L4 8L9.6 7.2L12 2Z" transform="scale(0.4) translate(40, -10)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full text-center z-10 relative">

        {/* Gift Icon */}
        <div className="flex justify-center mb-10 mt-8 relative">
          {/* Star Cluster - Right of Icon */}
          <div className="absolute -right-10 -top-8 text-[#17B8A6]">
            <svg width="48" height="48" viewBox="0 0 50 50" fill="currentColor">
              <path d="M25 0L31 18L50 21L36 34L40 50L25 40L10 50L14 34L0 21L19 18L25 0Z" transform="scale(0.5) translate(20, 20)" opacity="0.9" />
              <path d="M25 0L31 18L50 21L36 34L40 50L25 40L10 50L14 34L0 21L19 18L25 0Z" transform="scale(0.25) translate(140, 10)" opacity="0.6" />
            </svg>
          </div>

          {/* ZigZag - Left of Icon */}
          <div className="absolute -left-16 bottom-6 text-[#17B8A6]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 16 L8 12 L12 16 L16 12" />
              <path d="M16 12 L13 12" />
              <path d="M16 12 L16 15" />
            </svg>
          </div>

          <div className="w-32 h-32 bg-[#17B8A6] rounded-full flex items-center justify-center shadow-lg shadow-[#17B8A6]/20">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-4xl font-bold text-[#0F172A] mb-3 tracking-tight">
          Gratissé
        </h1>
        <h2 className="text-lg text-[#334155] font-medium mb-4">
          Discover Free Products
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-10 leading-relaxed px-4">
          Find amazing free items in your area. From beauty products to electronics, discover what's available near you today.
        </p>

        {/* Buttons */}
        <div className="space-y-4 mb-12">
          <Link
            href="/signup"
            className="block w-full bg-[#17B8A6] text-white font-semibold py-3.5 rounded-full shadow-lg shadow-[#17B8A6]/20 hover:bg-[#15a596] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
          </Link>

          <Link
            href="/signin"
            className="block w-full bg-white text-[#1F2937] font-semibold py-3.5 rounded-full border border-gray-100 shadow-sm hover:bg-gray-50 hover:border-gray-200 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* Footer Features */}
        <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#17B8A6]"></div>
            100% Free
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#17B8A6]"></div>
            Local Deals
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#17B8A6]"></div>
            No Catch
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 mb-8 mt-2"></div>

        {/* Mission Section */}
        <div className="text-center pb-8 max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            At Gratissé, we believe in reducing waste and building stronger communities. We connect people with free products they need while helping others declutter and share their unused items. Together, we're making sustainability simple and accessible for everyone.
          </p>
        </div>

      </div>
    </div>
  );
}
