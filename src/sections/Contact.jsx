function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
  }

  return (
    <section
      id="contact"
      className="
        border-t-2
        border-black
        bg-[#f8f6ef]
        px-4
        py-20
        md:px-7
        md:py-24
      "
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-black/55">
              06 / Contact
            </p>

            <h2
              className="
                mt-7
                text-[42px]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.055em]
                sm:text-[52px]
                md:text-[70px]
              "
            >
              Tell us
              <br />
              where you're
              <br />
              stuck.
            </h2>

            <p
              className="
                mt-7
                max-w-[440px]
                text-[16px]
                leading-7
                text-black/60
                md:text-[18px]
              "
            >
              Send us a few details about your assessment and the support you're
              looking for. We’ll review your enquiry and get back to you.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden border-2 border-black bg-white"
          >
            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="form-input"
                />
              </Field>

              <Field label="Email">
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="form-input"
                />
              </Field>
            </div>

            {/* COURSE + UNIT */}
            <div className="grid md:grid-cols-2">
              <Field label="Course / qualification">
                <input
                  type="text"
                  placeholder="e.g. Certificate III in Carpentry"
                  className="form-input"
                />
              </Field>

              <Field label="Unit code">
                <input
                  type="text"
                  placeholder="Optional"
                  className="form-input"
                />
              </Field>
            </div>

            {/* SUPPORT + DEADLINE */}
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

              <Field label="Deadline">
                <input
                  type="text"
                  placeholder="e.g. Friday"
                  className="form-input"
                />
              </Field>
            </div>

            {/* MESSAGE */}
            <Field label="What do you need help with?">
              <textarea
                rows="6"
                placeholder="Tell us about the assessment and where you're stuck..."
                className="form-input resize-none"
              />
            </Field>

            {/* FILE */}
            <Field label="Upload assessment">
              <input type="file" className="block w-full text-sm" />
            </Field>

            {/* FORM FOOTER */}
            <div
              className="
                flex
                flex-col
                gap-6
                bg-black
                p-5
                text-white
                md:flex-row
                md:items-center
                md:justify-between
                md:p-6
              "
            >
              <p className="max-w-[470px] text-[12px] leading-5 text-white/50">
                We’ll review your enquiry before confirming pricing or support.
              </p>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  border
                  border-white
                  bg-white
                  px-6
                  py-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-black
                  transition
                  hover:bg-[#19aaa7]
                  md:w-auto
                  md:px-7
                "
              >
                <span>Send enquiry</span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="ml-3 h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
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
    <label className="block border-b border-black p-5 md:p-6">
      <span
        className="
          mono
          mb-4
          block
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-black/45
        "
      >
        {label}
      </span>

      {children}
    </label>
  );
}

export default Contact;
