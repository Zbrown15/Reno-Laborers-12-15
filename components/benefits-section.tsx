"use client";

import Image from "next/image";

export function BenefitsSection() {
  return (
    <section className="bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12">
          How You Benefit From Choosing Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Personalized Service</h3>
                <p>
                  As a one-person operation, you get direct communication and personalized attention to your property's specific needs. No middlemen, no miscommunication—just consistent, reliable service tailored to your lawn.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Affordable Pricing</h3>
                <p>
                  Without the overhead costs of large crews and corporate structures, I offer competitive pricing on all lawn care services. You get professional-quality work at lower prices than big lawn care companies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Reliable & Consistent</h3>
                <p>
                  I take pride in showing up on time, every time. With direct accountability and a commitment to excellence, you can trust that your lawn will receive consistent, high-quality care week after week.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Expert Knowledge</h3>
                <p>
                  With professional experience in lawn mowing, edging, weed control, and seasonal maintenance, I bring expert knowledge to every job, ensuring your property looks its best throughout the year.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/frontLandscaping.jpg"
              alt="Professional lawn care benefits - beautiful maintained lawn"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




