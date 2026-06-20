export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center text-center md:text-left">

            {/* Left: name + studio */}
            <div className="text-[12.5px] text-white/55">
              <span className="font-semibold text-white/85">Prime Tech Support</span>
              <span className="mx-2 text-white/25">·</span>
              <span>Founded by Daniel</span>
            </div>

            {/* Center: tagline */}
            <div className="text-center text-burnt font-serif italic text-[16px]">
              Websites that convert.
            </div>

            {/* Right: copyright */}
            <div className="text-[12.5px] text-white/55 md:text-right">
              © 2026 Prime Tech Support. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
