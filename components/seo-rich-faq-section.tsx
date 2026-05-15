import type { FaqPair } from "@/lib/seo/faq-schema";

type SeoRichFaqSectionProps = {
  id: string;
  heading: string;
  subheading?: string;
  faqs: readonly FaqPair[];
};

/** Visible FAQ that matches FAQPage JSON-LD (same questions & answers). */
export function SeoRichFaqSection({ id, heading, subheading, faqs }: SeoRichFaqSectionProps) {
  return (
    <section
      id={id}
      className="bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4 border-t border-gray-700/80"
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-container max-w-3xl">
        <h2
          id={`${id}-heading`}
          className="text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight text-center mb-3"
        >
          {heading}
        </h2>
        {subheading ? (
          <p className="text-center text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className="group rounded-lg border border-gray-700 bg-[#1e3a5f]/15 open:bg-[#1e3a5f]/25 transition-colors"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white flex items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <span className="text-left pr-2">{faq.question}</span>
                <span
                  className="text-[#87A96B] text-xl leading-none shrink-0 group-open:rotate-45 transition-transform"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 pt-0 border-t border-white/5">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
