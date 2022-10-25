/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				richblue: '#202142',
				lilac: '#E0BECE',
				pink: {
					100: '#fba2bb',
					200: '#FF6A95',
				},
			},
			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				monsterrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
