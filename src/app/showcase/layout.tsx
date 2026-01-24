import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects Showcase - Software for Climate',
    description:
        'Explore innovative climate tech projects from the Software for Climate fellowship. Browse projects by cohort, discover solutions tackling emissions reduction, climate adaptation, and sustainability challenges.',
    openGraph: {
        title: 'Projects Showcase - Software for Climate',
        description:
            'Explore innovative climate tech projects from the Software for Climate fellowship. Browse projects by cohort, discover solutions tackling emissions reduction, climate adaptation, and sustainability challenges.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects Showcase - Software for Climate',
        description:
            'Explore innovative climate tech projects from the Software for Climate fellowship. Browse projects by cohort.',
    },
};

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
