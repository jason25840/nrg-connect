import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";
import radix from "tailwindcss-radix";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDark: '#2a2d3e',
        customLight: '#fefefe',
        customGray: '#adadaf',
        customBlue: '#32b1f4',
        customGreen: '#63fcfa',
        customYellow: '#fef33f',
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
    containerQueries,
    animate,
    radix,
    daisyui,
  ],
} satisfies Config;
