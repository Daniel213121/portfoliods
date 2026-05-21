import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#111111',
        body:         '#444444',
        paper:        '#FFFFFF',
        cream:        '#F9F8F6',
        line:         '#E5E5E5',
        soft:         '#F4F4F4',
        burnt:        '#E05C1A',
        'burnt-dark': '#C24A0F',
      },
      fontFamily: {
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
} satisfies Config

export default config
