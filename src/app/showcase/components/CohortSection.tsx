import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import InfoTooltip from './InfoTooltip';

type Props = {
    cohort: string;
    projects: {
        superlative: Project[];
        regular: Project[];
    };
    expandedProjectId: string | null;
    onToggleProject: (id: string | null) => void;
};

export default function CohortSection({
    cohort,
    projects,
    expandedProjectId,
    onToggleProject,
}: Props) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">{cohort} Cohort</h2>

            {/* Superlative projects section */}
            {projects.superlative.length > 0 && (
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">Superlative Winners</h3>
                        <InfoTooltip content="Superlatives are assigned within each cohort by a vote of all the students in that cohort." />
                    </div>
                    <div className="space-y-4">
                        {projects.superlative.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isExpanded={true}
                                onToggle={() => {}}
                                showSuperlative
                                alwaysExpanded
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Regular projects section */}
            {projects.regular.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">Other Projects</h3>
                    {/* Grid layout on larger screens, single column on mobile */}
                    <div className="grid grid-cols-1 gap-4 auto-rows-fr lg:grid-cols-2">
                        {projects.regular.map((project) => {
                            const isExpanded = expandedProjectId === project.id;
                            return (
                                <div
                                    key={project.id}
                                    className={`transition-all duration-300 ${
                                        isExpanded ? 'lg:col-span-2' : ''
                                    }`}
                                >
                                    <ProjectCard
                                        project={project}
                                        isExpanded={isExpanded}
                                        onToggle={() =>
                                            onToggleProject(isExpanded ? null : project.id)
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}
