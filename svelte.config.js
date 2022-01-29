import adapter from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV;
const dev = mode === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: "/my-base-path",
		},

		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
