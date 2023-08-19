/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		MAPBOX_ACCESS_TOKEN_KEY: process.env.MAPBOX_ACCESS_TOKEN_KEY,
	},
};

module.exports = nextConfig;
