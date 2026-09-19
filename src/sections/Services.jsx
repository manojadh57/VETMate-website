import SectionHeader from "../components/SectionHeader";

function Services() {
  const services = [
    ["01", "Tutoring", "Understand difficult questions, concepts and assessment instructions through clear explanations."],
    ["02", "Proofreading", "Improve spelling, grammar, clarity and presentation while keeping the work your own."],
    ["03", "Draft feedback", "Receive feedback on areas that may be unclear, incomplete or need more attention."],
    ["04", "Practical guidance", "Understand measurements, calculations, practical requirements and workplace assessment tasks."],
    ["05", "Assessor feedback", "Understand what your assessor wants changed when you receive corrections or a resubmission."],
  ];

  return (
    <section id="services" className="px-4 py-16 sm:py-20 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1450px]">
        <SectionHeader number="02 / Services" title="What we help with" />

        <div className="border-t-2 border-black">
          {services.map(([number, title, description]) => (
            <div
              key={number}
              className="grid gap-3 border-b border-black py-6 sm:gap-4 sm:py-8 md:grid-cols-[70px_.8fr_1.2fr] md:gap-5 md:py-10 lg:grid-cols-[100px_.75fr_1.25fr]"
            >
              <p className="mono mb-0 text-[11px] text-black/40 sm:text-sm">{number}</p>
              <h3 className="break-words text-[26px] font-bold leading-tight tracking-[-0.04em] sm:text-3xl md:text-4xl">
                {title}
              </h3>
              <p className="max-w-[660px] text-[15px] leading-7 text-black/65 sm:text-[16px] md:text-[17px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
