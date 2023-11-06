import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#2C2C2A45',
      foreground: '#FFF3F3',
      accents: '#A07CFF',
    },
    extend: {
      backgroundImage: {
        photo: 'url(/assets/Background.jpg)',
      },
    },
  },
  plugins: [],
}
export default config
