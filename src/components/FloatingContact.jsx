const WHATSAPP_NUMBER = "61424442055";
// Replace with your real number.
// Example: +61 412 345 678 becomes 61412345678

function FloatingContact() {
  const whatsappMessage =
    "Hi VETMate, I need some help with my VET assessment.";

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col gap-3 md:bottom-7 md:right-7">
      {/* WHATSAPP */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message VETMate on WhatsApp"
        title="Message us on WhatsApp"
        className="
          group
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          border-2
          border-black
          bg-[#25D366]
          shadow-[4px_4px_0_#111]
          transition-all
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-[2px_2px_0_#111]
          md:h-[64px]
          md:w-[64px]
        "
      >
        <WhatsAppIcon />
      </a>

      {/* CONTACT / EMAIL */}
      <a
        href="#contact"
        aria-label="Go to contact form"
        title="Contact VETMate"
        className="
          group
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          border-2
          border-black
          bg-[#f5f2e9]
          shadow-[4px_4px_0_#111]
          transition-all
          hover:bg-[#19aaa7]
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          hover:shadow-[2px_2px_0_#111]
          md:h-[64px]
          md:w-[64px]
        "
      >
        <EmailIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 fill-black md:h-8 md:w-8"
      aria-hidden="true"
    >
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
      className="h-7 w-7 md:h-8 md:w-8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default FloatingContact;
