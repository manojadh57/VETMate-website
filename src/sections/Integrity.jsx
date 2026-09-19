function Integrity() {
  return (
    <section className="border-y-2 border-black bg-[#19aaa7]">
      <div className="mx-auto grid max-w-[1450px] lg:grid-cols-[1.2fr_.8fr]">
        <div className="border-b-2 border-black p-5 sm:p-7 md:p-10 lg:border-b-0 lg:border-r-2 lg:p-12">
          <p className="mono text-[10px] uppercase tracking-[0.22em]">Academic integrity</p>
          <h2 className="mt-12 text-[46px] font-black leading-[0.88] tracking-[-0.06em] sm:mt-16 sm:text-[58px] md:text-[72px] lg:mt-20 lg:text-[86px]">
            YOUR WORK
            <br />
            STAYS
            <br />
            YOUR WORK.
          </h2>
        </div>

        <div className="flex items-end p-5 sm:p-7 md:p-10 lg:p-12">
          <div>
            <p className="text-lg font-bold leading-7 sm:text-xl sm:leading-8">VETMate is a study-support service.</p>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 sm:mt-5 sm:text-base">
              We provide tutoring, explanations, proofreading and feedback. We don't complete assessments or submit work on behalf of students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Integrity;
