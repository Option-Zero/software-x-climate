'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/types/project';
import { groupProjectsByCohort } from '@/lib/utils';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import CohortSection from './components/CohortSection';
import CohortNavigation from './components/CohortNavigation';
import AboutModal from './components/AboutModal';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';

export default function ShowcasePage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAndHandleAnchor() {
            try {
                // Fetch projects from API
                const response = await fetch('/api/projects');
                const result = await response.json();

                if (result.data) {
                    setProjects(result.data);

                    // Preload all hero images to prevent layout shift
                    result.data.forEach((project: Project) => {
                        const heroImage = project['Hero Image']?.[0];
                        if (heroImage) {
                            const img = new Image();
                            img.src = heroImage.url;
                        }
                    });
                }
                setLoading(false);

                // Handle anchor from URL hash
                const hash = window.location.hash.slice(1);
                if (hash) {
                    // Wait for render
                    setTimeout(() => {
                        const element = document.getElementById(hash);
                        if (element) {
                            // Find project by last 6 chars of Airtable ID
                            const project = result.data?.find(
                                (p: Project) => p.id.slice(-6) === hash
                            );
                            if (project) {
                                setExpandedProjectId(project.id);
                            }
                            // Scroll to element
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 100);
                }
            } catch (error) {
                console.error('Failed to fetch projects:', error);
                setLoading(false);
            }
        }

        fetchAndHandleAnchor();
    }, []);

    const groupedProjects = groupProjectsByCohort(projects);
    const cohorts = groupedProjects.map((g) => g.cohort);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50">
            <Header />
            <IntroSection />
            {!loading && <CohortNavigation cohorts={cohorts} />}
            <main className="container mx-auto px-4 py-8 max-w-7xl">
                {loading ? (
                    <LoadingSkeleton />
                ) : groupedProjects.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">No projects available at this time.</p>
                    </div>
                ) : (
                    groupedProjects.map((group) => (
                        <CohortSection
                            key={group.cohort}
                            cohort={group.cohort}
                            projects={group.projects}
                            expandedProjectId={expandedProjectId}
                            onToggleProject={setExpandedProjectId}
                        />
                    ))
                )}
            </main>
            <Footer />
            <AboutModal />
        </div>
    );
}
