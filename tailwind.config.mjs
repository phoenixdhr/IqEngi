/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				IqEngi:{'azul-oscuro_IQ': '#003366',
				'azul-claro_IQ': '#007bff',
				'gris-claro_IQ': '#f8f9fa',
				'gris-oscuro_IQ': '#343a40',
				'blanco_IQ': '#ffffff',
				'naranja-acento_IQ': '#fd7e14',
				'verde-suave_IQ': '#28a745',}
			  },
			//    primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      		},

		// 	  fontFamily: {
		// 		'body': [
		// 	  'Inter',
		// 	  'ui-sans-serif',
		// 	  'system-ui',
		// 	  '-apple-system',
		// 	  'system-ui',
		// 	  'Segoe UI',
		// 	  'Roboto',
		// 	  'Helvetica Neue',
		// 	  'Arial',
		// 	  'Noto Sans',
		// 	  'sans-serif',
		// 	  'Apple Color Emoji',
		// 	  'Segoe UI Emoji',
		// 	  'Segoe UI Symbol',
		// 	  'Noto Color Emoji'
		// 	],
		// 		'sans': [
		// 	  'Inter',
		// 	  'ui-sans-serif',
		// 	  'system-ui',
		// 	  '-apple-system',
		// 	  'system-ui',
		// 	  'Segoe UI',
		// 	  'Roboto',
		// 	  'Helvetica Neue',
		// 	  'Arial',
		// 	  'Noto Sans',
		// 	  'sans-serif',
		// 	  'Apple Color Emoji',
		// 	  'Segoe UI Emoji',
		// 	  'Segoe UI Symbol',
		// 	  'Noto Color Emoji'
		// 	]


		// },

	},

	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated'),
		require("daisyui")
	],

}