import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				W900: "#FFFFFF",
				Y400: "#FFD58A",
				G400: "#83B18B",
				B900: "#0E1422",
				B500: "#5C5F6A",
				B400: "#A3BEF8",
				B200: "#B6B7BC",
				B300: "#878A92",
				B100: "#E6E7E8",
				W100: "#F6F6F6",
				W200: "#E9E9EB",
			},
			fontSize: {
				regular: "14px",
				extraBold: "20px",
				NormalSemoBold : "16px",
				semiBold: "32px",
				normalBold: "24px",
				looseMedium: "12px",
				normalSemiBold: "18px",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
