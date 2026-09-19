function SectionHeader({ number, title }) {
  return (
    <div className="mb-8 grid gap-3 sm:mb-10 md:mb-12 md:grid-cols-[120px_1fr] md:gap-5 lg:grid-cols-[140px_1fr]">
      <p className="mono text-[10px] uppercase tracking-[0.2em] text-black/50">
        {number}
      </p>

      <h2 className="max-w-full break-words text-[38px] font-black leading-[0.94] tracking-[-0.05em] sm:text-[46px] md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
