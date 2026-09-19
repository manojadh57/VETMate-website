import SectionHeader from "../components/SectionHeader";

function FAQ() {
  const questions = [
    ["What can I send you?", "You can send an assessment question, draft, assessor feedback or information about the part of your course you're struggling with."],
    ["Do you complete assessments for students?", "No. VETMate provides tutoring, explanations, proofreading and feedback so students can complete their own assessments."],
    ["How much does support cost?", "Assessment support starts from $50. The final price depends on the assessment, complexity and support required."],
    ["Can you help with a resubmission?", "Yes. We can help you understand assessor feedback and identify what areas should be reviewed."],
  ];

  return (
    <section className="px-4 py-16 sm:py-20 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1450px]">
        <SectionHeader number="05 / FAQ" title="Questions" />

        <div className="border-t-2 border-black">
          {questions.map(([question, answer], index) => (
            <details key={question} className="group border-b border-black">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 sm:items-center sm:gap-8 sm:py-7">
                <div className="grid min-w-0 grid-cols-[36px_1fr] gap-2 sm:flex sm:gap-8 md:gap-16">
                  <span className="mono pt-1 text-[10px] text-black/40 sm:text-xs">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 break-words text-[18px] font-bold leading-snug sm:text-xl md:text-2xl">{question}</span>
                </div>
                <span className="shrink-0 text-2xl leading-none transition group-open:rotate-45">+</span>
              </summary>

              <p className="max-w-[760px] pb-6 pl-[38px] pr-4 text-[15px] leading-7 text-black/60 sm:pb-8 sm:pl-[68px] md:pl-[105px] md:text-base">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
