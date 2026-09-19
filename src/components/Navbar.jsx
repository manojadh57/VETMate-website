import { useState } from "react";
import logo from "../assets/vetmate-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["01", "About", "#about"],
    ["02", "Services", "#services"],
    ["03", "Pricing", "#pricing"],
    ["04", "Approach", "#approach"],
    ["05", "Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 md:px-7 md:pt-5">
      <div className="mx-auto max-w-[1450px] border-2 border-black bg-[#f5f2e9] shadow-[5px_5px_0_#111]">
        <div className="flex h-[72px] items-stretch md:h-[92px]">
          {/* LOGO */}
          <a
            href="#home"
            className="
              flex
              w-[210px]
              shrink-0
              items-center
              overflow-hidden
              border-r-2
              border-black
              px-5
              md:w-[280px]
              md:px-7
            "
          >
            <img
              src={logo}
              alt="VETMate"
              className="
                block
                h-auto
                max-h-[48px]
                w-full
                max-w-[180px]
                object-contain
                object-left
                md:max-h-[58px]
                md:max-w-[240px]
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden min-w-0 flex-1 lg:flex">
            {links.map(([number, name, href]) => (
              <a
                key={name}
                href={href}
                className="
                  group
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-center
                  border-r
                  border-black
                  px-4
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                <span className="mono text-[9px] text-black/40 group-hover:text-white/50">
                  {number}
                </span>

                <span className="mt-1 text-[13px] font-semibold uppercase tracking-[0.07em]">
                  {name}
                </span>
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="
              hidden
              w-[180px]
              shrink-0
              items-center
              justify-center
              bg-black
              px-5
              text-[12px]
              font-bold
              uppercase
              tracking-[0.12em]
              !text-white
              transition
              hover:bg-[#18aaa7]
              hover:!text-black
              lg:flex
            "
          >
            Get support
            <span className="ml-3 text-lg">↗</span>
          </a>

          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(!open)}
            className="
              ml-auto
              flex
              min-w-[92px]
              items-center
              justify-center
              border-l-2
              border-black
              px-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              lg:hidden
            "
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="border-t-2 border-black lg:hidden">
            {links.map(([number, name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="grid grid-cols-[48px_1fr] border-b border-black px-5 py-5"
              >
                <span className="mono text-[10px] text-black/40">{number}</span>

                <span className="text-[15px] font-semibold uppercase tracking-[0.08em]">
                  {name}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between bg-black px-5 py-5 text-[14px] font-bold uppercase tracking-[0.1em] !text-white"
            >
              Get support
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
