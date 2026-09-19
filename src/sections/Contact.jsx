import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    unit: "",
    support: "Tutoring",
    deadline: "",
    message: "",
  });

  const whatsappNumber = "61424442055";

  const whatsappMessage =
    "Hi VETMate, I need some help with my VET assessment.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const gmailDirectUrl =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    "&to=vetmatesupport@gmail.com" +
    "&su=VETMate%20Study%20Support" +
    "&body=Hi%20VETMate,%20I%20need%20help%20with%20my%20VET%20assessment.";

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `VETMate enquiry - ${formData.name || "Student"}`;

    const body = `
Hi VETMate,

I would like help with my VET assessment.

Name: ${formData.name}
Student email: ${formData.email}
Course / Qualification: ${formData.course || "Not provided"}
Unit code: ${formData.unit || "Not provided"}
Support needed: ${formData.support}
Deadline: ${formData.deadline || "Not provided"}

What I need help with:
${formData.message || "Not provided"}

I will attach my assessment file to this email if required.

Thank you.
`.trim();

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent("vetmatesupport@gmail.com")}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="border-t-2 border-black bg-[#f8f6ef] px-4 py-20 md:px-7 md:py-24"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-black/55">
              06 / Contact
            </p>

            <h2 className="mt-7 text-[42px] font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-[52px] md:text-[70px]">
              Tell us
              <br />
              where you're
              <br />
              stuck.
            </h2>

            <p className="mt-7 max-w-[440px] text-[16px] leading-7 text-black/60 md:text-[18px]">
              Send us your assessment details, or contact us directly by
              WhatsApp or email.
            </p>

            {/* DIRECT CONTACT */}
            <div className="mt-10 grid max-w-[460px] gap-4">
              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-black bg-[#25D366] px-5 py-5 transition hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <div className="flex items-center gap-4">
                  <WhatsAppIcon />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-[16px] font-semibold">
                      0424 442 055
                    </p>
                  </div>
                </div>

                <ArrowIcon />
              </a>

              {/* EMAIL */}
              <a
                href={gmailDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-black bg-white px-5 py-5 transition hover:bg-[#19aaa7]"
              >
                <div className="flex items-center gap-4">
                  <EmailIcon />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                      Email
                    </p>

                    <p className="mt-1 text-[15px] font-semibold sm:text-[16px]">
                      vetmatesupport@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowIcon />
              </a>
            </div>
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="form-input"
                />
              </Field>

              <Field label="Email">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="e.g. Certificate III in Carpentry"
                  className="form-input"
                />
              </Field>

              <Field label="Unit code">
                <input
                  type="text"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="form-input"
                />
              </Field>
            </div>

            {/* SUPPORT + DEADLINE */}
            <div className="grid md:grid-cols-2">
              <Field label="Support needed">
                <select
                  name="support"
                  value={formData.support}
                  onChange={handleChange}
                  className="form-input"
                >
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
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g. Friday"
                  className="form-input"
                />
              </Field>
            </div>

            {/* MESSAGE */}
            <Field label="What do you need help with?">
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about the assessment and where you're stuck..."
                className="form-input resize-none"
              />
            </Field>

            {/* FILE */}
            <Field label="Assessment file">
              <input type="file" className="block w-full text-sm" />

              <p className="mt-3 text-[11px] leading-5 text-black/45">
                Your file cannot be added automatically to Gmail. Please attach
                it manually when Gmail opens.
              </p>
            </Field>

            {/* BOTTOM */}
            <div className="flex flex-col gap-6 bg-black p-5 text-white md:flex-row md:items-center md:justify-between md:p-6">
              <p className="max-w-[470px] text-[12px] leading-5 text-white/50">
                Press Send enquiry and Gmail will open with your details already
                filled in.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center border border-white bg-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#19aaa7] md:w-auto md:px-7"
              >
                <span>Send enquiry</span>

                <ArrowIcon />
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
      <span className="mono mb-4 block text-[9px] uppercase tracking-[0.2em] text-black/45">
        {label}
      </span>

      {children}
    </label>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 fill-black" aria-hidden="true">
      <path d="M16.04 3C8.86 3 3 8.77 3 15.87c0 2.27.61 4.49 1.77 6.43L3 29l6.91-1.79a13.1 13.1 0 0 0 6.12 1.52h.01C23.22 28.73 29 22.96 29 15.87S23.22 3 16.04 3Zm0 23.56h-.01a10.91 10.91 0 0 1-5.56-1.51l-.4-.24-4.1 1.06 1.1-3.96-.26-.41a10.67 10.67 0 0 1-1.66-5.63c0-5.91 4.89-10.71 10.9-10.71 6 0 10.87 4.8 10.87 10.71 0 5.9-4.88 10.69-10.88 10.69Zm5.97-8.01c-.33-.16-1.94-.94-2.24-1.05-.3-.11-.52-.16-.74.16-.22.33-.85 1.05-1.04 1.27-.19.22-.38.25-.71.09-.33-.16-1.39-.5-2.65-1.61-.98-.86-1.64-1.92-1.83-2.25-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.75-1.01-2.4-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.1-1.14 2.68s1.17 3.11 1.33 3.33c.16.22 2.3 3.46 5.57 4.85.78.33 1.39.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.94-.78 2.21-1.53.27-.76.27-1.4.19-1.53-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
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
  );
}

export default Contact;
