import logo from "../assets/vetmate-logo.png";

function Footer() {
  return (
    <footer className="border-t-2 border-black bg-[#101010] text-white">
      <div className="mx-auto max-w-[1450px] px-5 py-10 md:px-8 md:py-14">
        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          {/* BRAND */}
          <div>
            <div className="inline-flex max-w-[260px] border border-white/25 bg-[#f5f2e9] p-3 md:max-w-[320px]">
              <img
                src={logo}
                alt="VETMate"
                className="
                  block
                  h-auto
                  max-h-[72px]
                  w-full
                  object-contain
                "
              />
            </div>

            <p className="mt-6 max-w-[420px] text-[14px] leading-6 text-white/55 md:text-[15px]">
              Tutoring, proofreading, feedback and practical study support for
              Australian VET students.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[12px] font-semibold uppercase tracking-[0.12em] md:grid-cols-3">
            <a href="#about" className="transition hover:text-[#19aaa7]">
              About
            </a>

            <a href="#services" className="transition hover:text-[#19aaa7]">
              Services
            </a>

            <a href="#pricing" className="transition hover:text-[#19aaa7]">
              Pricing
            </a>

            <a href="#approach" className="transition hover:text-[#19aaa7]">
              Approach
            </a>

            <a href="#contact" className="transition hover:text-[#19aaa7]">
              Contact
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/25" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            Australian VET Study Support
          </p>

          <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            Your work stays your work.
          </p>

          <p className="text-[12px] text-white/60">© 2026 VETMate</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
