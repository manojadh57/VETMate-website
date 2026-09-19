function Hero() {
  return (
    <section id="home" className="px-4 pb-16 pt-[145px] md:px-7 md:pt-[170px]">
      <div className="mx-auto max-w-[1450px]">
        {/* MOVING TEXT */}
        <div className="overflow-hidden border-2 border-b-0 border-black bg-black py-3 text-white">
          <div className="marquee">
            <div className="marquee-track">
              <span>
                GETTING STUCK ON ASSESSMENTS? &nbsp; • &nbsp; DEADLINES? &nbsp;
                • &nbsp; STUDY SUPPORT FOR VET STUDENTS &nbsp; • &nbsp; FROM
                JUST $50 &nbsp; • &nbsp;
              </span>

              <span>
                GETTING STUCK ON ASSESSMENTS? &nbsp; • &nbsp; DEADLINES? &nbsp;
                • &nbsp; STUDY SUPPORT FOR VET STUDENTS &nbsp; • &nbsp; FROM
                JUST $50 &nbsp; • &nbsp;
              </span>
            </div>
          </div>
        </div>

        {/* HERO PHOTO */}
        <div
          className="
            relative
            min-h-[620px]
            overflow-hidden
            border-2
            border-black
            bg-cover
            bg-center
            md:min-h-[760px]
          "
          style={{
            backgroundImage: "url('/hero-vet.jpg')",
          }}
        >
          {/* DARK PHOTO OVERLAY */}
          <div className="absolute inset-0 bg-black/20" />

          {/* HERO CONTENT */}
          <div className="relative z-10 flex min-h-[620px] items-end p-4 md:min-h-[760px] md:p-10">
            <div
              className="
                w-full
                max-w-[680px]
                border-2
                border-black
                bg-[#f5f2e9]
                p-5
                shadow-[5px_5px_0_#111]
                md:p-10
                md:shadow-[8px_8px_0_#111]
              "
            >
              <h1 className="text-[38px] font-bold uppercase leading-[0.9] tracking-[-0.055em] sm:text-[48px] md:text-[68px]">
                Getting stuck
                <br />
                on assessments?
              </h1>

              <p className="mt-4 text-[22px] font-medium md:text-[28px]">
                Deadlines getting close?
              </p>

              <p className="mt-3 max-w-[540px] text-[16px] leading-7 text-black/65 md:text-[18px]">
                Tutoring, proofreading and practical study support for
                Australian VET students.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                {/* GET SUPPORT BUTTON */}
                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    border-2
                    border-black
                    bg-black
                    px-5
                    py-3
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    !text-white
                    transition
                    hover:bg-[#19aaa7]
                    hover:!text-black
                    md:px-7
                    md:py-4
                  "
                >
                  <span>Get support</span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="ml-3 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>

                <p className="text-sm font-bold">From just $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
