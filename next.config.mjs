/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.test.cyberia.studio',
				pathname: '/storage/**',
			},
		],
	},
};

export default nextConfig;
