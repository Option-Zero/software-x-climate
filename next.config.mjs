/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'v5.airtableusercontent.com',
                port: '',
            },
        ],
    },
    async redirects() {
        return [
            // Redirect from home to the only page we've built so far
            {
                source: '/',
                destination: '/frameworks/drawdown-solutions-sectors',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
