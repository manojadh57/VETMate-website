function Pricing() {
  return (
    <section id="pricing" className="border-y-2 border-black bg-[#101010] px-4 py-16 text-white sm:py-20 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-14">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/50">03 / Pricing</p>
            <h2 className="mt-5 text-[42px] font-black leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:mt-6 lg:text-7xl">
              SIMPLE
              <br />
              PRICING.
            </h2>
          </div>

          <div className="min-w-0">
            <div className="border-2 border-white bg-[#19aaa7] p-5 text-black sm:p-7 md:p-10">
              <p className="mono text-[10px] uppercase tracking-[0.2em]">Assessment support</p>

              <div className="mt-7 flex flex-col gap-7 sm:mt-10 md:flex-row md:items-end md:justify-between md:gap-10">
                <div>
                  <p className="mb-0 text-[72px] font-black leading-none tracking-[-0.08em] sm:text-[96px] md:text-[110px] lg:text-[130px]">$50</p>
                  <p className="mt-1 font-bold">starting price</p>
                </div>

                <div className="max-w-[400px]">
                  <h3 className="text-xl font-bold sm:text-2xl">Send the assessment first.</h3>
                  <p className="mt-3 text-[15px] leading-7 sm:mt-4 sm:text-base">
                    We'll review the task and confirm exactly what kind of support you need before any work begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid border-x-2 border-b-2 border-white md:grid-cols-3">
              <PriceBox title="From $50" text="Straightforward proofreading, feedback and assessment support." />
              <PriceBox title="Custom quote" text="Large or more complex assessments are reviewed before pricing." />
              <PriceBox title="Price confirmed first" text="You'll know the agreed price before we start." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceBox({ title, text }) {
  return (
    <div className="border-b border-white p-5 last:border-b-0 sm:p-6 md:border-b-0 md:border-r md:last:border-r-0">
      <h3 className="text-[17px] font-bold sm:text-base">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4">{text}</p>
    </div>
  );
}

export default Pricing;
