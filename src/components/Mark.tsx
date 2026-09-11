export function Mark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`group flex items-center gap-3 ${light ? 'text-[#f5f4ed]' : 'text-[#181a16]'}`} aria-label="Halberd home">
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden">
        <img src="/logo_no_bg.png" alt="" className={`h-full w-full object-contain ${light ? 'brightness-0 invert' : ''}`} />
      </span>
      <span className="font-semibold tracking-[.2em]">HALBERD</span>
    </a>
  );
}
