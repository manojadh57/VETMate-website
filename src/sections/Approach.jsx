import SectionHeader from "../components/SectionHeader";

function Approach() {
  const steps = [
    ["01", "Send your task", "Send the assessment, question, draft or assessor feedback you need help understanding."],
    ["02", "Tell us where you're stuck", "Explain which part is difficult or what kind of support you need."],
    ["03", "Get clear guidance", "We explain the task, review your work and provide practical feedback."],
    ["04", "Improve your work", "You use the guidance to improve and complete your own assessment."],
  ];

  return (
    <section id="approach" className="px-4 py-16 sm:py-20 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1450px]">
        <SectionHeader number="04 / Approach" title="How it works" />

        <div className="grid border-l-2 border-t-2 border-black md:grid-cols-2">
          {steps.map(([number, title, text]) => (
            <div key={number} className="min-h-[230px] border-b-2 border-r-2 border-black p-5 sm:min-h-[260px] sm:p-7 md:min-h-[300px] md:p-9">
              <p className="mono text-[11px] text-black/40 sm:text-xs">{number}</p>
              <h3 className="mt-10 text-[27px] font-black leading-tight tracking-[-0.04em] sm:mt-12 sm:text-3xl md:mt-16 md:text-4xl">{title}</h3>
              <p className="mt-4 max-w-[500px] text-[15px] leading-7 text-black/60 sm:mt-5 sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
