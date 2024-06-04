import {
    PER_COHORT_LINKS,
    CURRENT_COHORT,
    EXTERNAL_LINKS_PATH,
} from './src/app/cohort/softwareForClimateCourseLinks.js';

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
            // Add redirects for links for the current cohort of Software For Climate
            // (so that we only have to update those links in one place, for each new cohort)
            ...PER_COHORT_LINKS[CURRENT_COHORT].map(({ slug, url }) => {
                return {
                    source: `${EXTERNAL_LINKS_PATH}${slug}`,
                    destination: url,
                    permanent: false,
                };
            }),
        ];
    },
};

export default nextConfig;
