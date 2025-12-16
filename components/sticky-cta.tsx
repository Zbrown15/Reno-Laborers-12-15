"use client";

export function StickyCTA() {
  return (
    <div className="bg-gradient-to-b from-[#1e3a5f]/60 to-[#182418]/90 rounded-lg border border-[#87A96B]/30 p-6 sm:p-8 text-center">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Get Your Free Quote
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Ready to transform your lawn? Contact me today for a free, no-obligation quote on professional lawn care services.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
        >
          Get a Free Quote
        </a>
        <a
          href="sms:+18582754671"
          className="px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
        >
          858-275-4671
        </a>
      </div>
      <div className="mt-6 pt-6 border-t border-[#87A96B]/30">
        <p className="text-sm text-gray-400">
          Serving Reno, Sparks, Spanish Springs, and Incline Village
        </p>
      </div>
    </div>
  );
}

