import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-vet-graffiti.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.86)_45%,rgba(0,0,0,0.58)_75%,rgba(0,0,0,0.42)_100%)]" />

      <div className="relative z-10 overflow-hidden border-y border-white/40 bg-[#19aaa7] py-2.5 text-black sm:py-3">
        <div className="marquee">
          <div className="marquee-track">
            <span>
              CARPENTRY &nbsp; • &nbsp; AUTOMOTIVE &nbsp; • &nbsp; HOSPITALITY &nbsp; • &nbsp; COMMUNITY SERVICES &nbsp; • &nbsp; INFORMATION TECHNOLOGY &nbsp; • &nbsp; EARLY CHILDHOOD &nbsp; • &nbsp; VET STUDY SUPPORT &nbsp; • &nbsp;
            </span>
            <span>
              CARPENTRY &nbsp; • &nbsp; AUTOMOTIVE &nbsp; • &nbsp; HOSPITALITY &nbsp; • &nbsp; COMMUNITY SERVICES &nbsp; • &nbsp; INFORMATION TECHNOLOGY &nbsp; • &nbsp; EARLY CHILDHOOD &nbsp; • &nbsp; VET STUDY SUPPORT &nbsp; • &nbsp;
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1450px] flex-col justify-between px-4 py-12 text-white sm:px-6 sm:py-14 md:min-h-[800px] md:px-8 md:py-16 lg:min-h-[850px] lg:px-10 lg:py-20">
        <div
          className={`flex items-center justify-between border-b border-white/35 pb-4 transition-all duration-700 sm:pb-5 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mono text-[10px] uppercase tracking-[0.2em] sm:text-[11px] sm:tracking-[0.22em]">
            01 / About
          </p>
          <p className="mono hidden text-[11px] uppercase tracking-[0.22em] text-white/60 md:block">
            Learn / Understand / Improve
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <p
            className={`mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#19aaa7] transition-all delay-100 duration-700 sm:mb-6 sm:text-[11px] sm:tracking-[0.22em] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            What VETMate does
          </p>

          <h2
            className={`max-w-[1100px] text-[42px] font-bold uppercase leading-[0.9] tracking-[-0.05em] transition-all delay-200 duration-700 sm:text-[54px] md:text-[70px] lg:text-[92px] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Real support
            <br />
            for real
            <br />
            VET work.
          </h2>

          <div
            className={`mt-8 grid max-w-[1050px] gap-5 transition-all delay-300 duration-700 sm:mt-10 sm:gap-7 md:grid-cols-2 md:gap-8 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-[15px] leading-7 text-white/80 sm:text-[17px] md:text-[19px] md:leading-8">
              VET assessments can include written questions, calculations, practical activities, workplace scenarios, evidence requirements and assessor feedback.
            </p>
            <p className="text-[15px] leading-7 text-white/80 sm:text-[17px] md:text-[19px] md:leading-8">
              VETMate helps you understand what the task is asking, identify what needs attention and improve your own work before you submit.
            </p>
          </div>

          <div
            className={`mt-10 grid border-l border-t border-white/40 transition-all delay-500 duration-700 sm:mt-12 md:mt-14 md:grid-cols-3 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <AboutBox number="01" title="Understand the task" text="We break down assessment questions and requirements into clear, practical language." />
            <AboutBox number="02" title="Improve your work" text="Get proofreading, draft feedback and guidance on areas that need more attention." />
            <AboutBox number="03" title="Respond to feedback" text="If your assessor asks for changes, we help you understand what needs to be revisited." />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBox({ number, title, text }) {
  return (
    <div className="min-h-[180px] border-b border-r border-white/40 bg-black/50 p-5 backdrop-blur-[2px] sm:min-h-[200px] sm:p-6 md:min-h-[220px] md:p-8">
      <p className="mono text-[10px] tracking-[0.2em] text-[#19aaa7]">{number}</p>
      <h3 className="mt-7 text-[20px] font-bold uppercase leading-tight tracking-[-0.03em] sm:mt-9 sm:text-[22px] md:mt-10 md:text-[23px]">
        {title}
      </h3>
      <p className="mt-3 max-w-[360px] text-[14px] leading-6 text-white/65 sm:mt-4 sm:text-[15px]">
        {text}
      </p>
    </div>
  );
}

export default About;
