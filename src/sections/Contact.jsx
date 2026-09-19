function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  return (
    <section id="contact" className="border-t-2 border-black bg-[#f8f6ef] px-4 py-16 sm:py-20 md:px-7 md:py-24">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em]">06 / Contact</p>
            <h2 className="mt-6 text-[42px] font-black leading-[0.9] tracking-[-0.055em] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              TELL US
              <br />
              WHERE YOU'RE
              <br />
              STUCK.
            </h2>
            <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-black/60 sm:mt-8 sm:text-base">
              Send us a few details about your assessment and what kind of support you're looking for.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="min-w-0 border-2 border-black bg-white">
            <div className="grid md:grid-cols-2">
              <Field label="Your name"><input required type="text" placeholder="Full name" className="form-input" /></Field>
              <Field label="Email"><input required type="email" placeholder="you@email.com" className="form-input" /></Field>
            </div>

            <div className="grid md:grid-cols-2">
              <Field label="Course / qualification"><input type="text" placeholder="Certificate III in Carpentry" className="form-input" /></Field>
              <Field label="Unit code"><input type="text" placeholder="Optional" className="form-input" /></Field>
            </div>

            <div className="grid md:grid-cols-2">
              <Field label="Support needed">
                <select className="form-input">
                  <option>Tutoring</option>
                  <option>Proofreading</option>
                  <option>Draft feedback</option>
                  <option>Assessment guidance</option>
                  <option>Assessor feedback</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Deadline"><input type="text" placeholder="Example: Friday" className="form-input" /></Field>
            </div>

            <Field label="What do you need help with?">
              <textarea rows="6" placeholder="Tell us about the assessment and where you're stuck..." className="form-input resize-none" />
            </Field>

            <Field label="Upload assessment">
              <input type="file" className="block w-full max-w-full text-[13px] sm:text-sm" />
            </Field>

            <div className="flex flex-col gap-5 bg-black p-5 text-white sm:p-6 md:flex-row md:items-center md:justify-between md:gap-6">
              <p className="mb-0 max-w-[470px] text-xs leading-5 text-white/50">We'll review your enquiry before confirming pricing or support.</p>
              <button type="submit" className="w-full border border-white bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#19aaa7] sm:px-7 sm:tracking-[0.18em] md:w-auto">
                Send enquiry ↗
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block min-w-0 border-b border-black p-5 sm:p-6">
      <span className="mono mb-3 block text-[9px] uppercase tracking-[0.18em] text-black/45 sm:mb-4 sm:tracking-[0.2em]">{label}</span>
      {children}
    </label>
  );
}

export default Contact;
