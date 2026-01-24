import { Project, GroupedProjects } from '@/types/project';

/**
 * Parse team string into array of names
 * Example: "Luke Whitesides, Dora Heng" → ["Luke Whitesides", "Dora Heng"]
 */
export function parseTeamMembers(teamString: string): string[] {
    if (!teamString) return [];
    return teamString.split(',').map((name) => name.trim());
}

/**
 * Parse cohort date string to Date object for sorting
 * Example: "Apr 2024" → Date(2024, 3, 1)
 * Returns Date(0) for invalid or missing cohort values
 */
function parseCohortDate(cohort: string | undefined): Date {
    if (!cohort) return new Date(0); // Handle undefined/null/empty string

    const monthMap: Record<string, number> = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        sep: 8,
        oct: 9,
        nov: 10,
        dec: 11,
    };

    const parts = cohort.split(' ');
    if (parts.length !== 2) return new Date(0); // Invalid format

    const monthAbbr = parts[0].toLowerCase();
    const year = parseInt(parts[1], 10);
    const month = monthMap[monthAbbr];

    if (month === undefined || isNaN(year)) return new Date(0);

    return new Date(year, month, 1);
}

/**
 * Sort superlative projects with "Best Overall" first, then non-ties before ties
 */
function sortSuperlativeProjects(
    projects: Project[],
    superlativeCounts: Record<string, number>
): Project[] {
    return projects.sort((a, b) => {
        const aHasBestOverall = a.Superlative?.includes('Best Overall');
        const bHasBestOverall = b.Superlative?.includes('Best Overall');

        // First priority: Best Overall
        if (aHasBestOverall && !bHasBestOverall) return -1;
        if (!aHasBestOverall && bHasBestOverall) return 1;

        // Second priority: Non-tied awards before tied awards
        const aHasTie = a.Superlative?.some((award) => superlativeCounts[award] > 1);
        const bHasTie = b.Superlative?.some((award) => superlativeCounts[award] > 1);

        if (!aHasTie && bHasTie) return -1;
        if (aHasTie && !bHasTie) return 1;

        return 0;
    });
}

/**
 * Group projects by cohort and sort by date (most recent first)
 * Within each cohort, separate superlative and regular projects
 * Superlative projects are sorted with "Best Overall" first
 * Projects without a cohort or without the curated flag are filtered out
 */
export function groupProjectsByCohort(projects: Project[]): GroupedProjects[] {
    const grouped = new Map<string, Project[]>();

    // Group by cohort, filtering out projects without a cohort or not curated
    projects.forEach((project) => {
        if (!project.Cohort || !project['Curated?']) return; // Skip invalid projects

        if (!grouped.has(project.Cohort)) {
            grouped.set(project.Cohort, []);
        }
        grouped.get(project.Cohort)!.push(project);
    });

    // Sort cohorts by date (most recent first)
    const sortedCohorts = Array.from(grouped.keys()).sort((a, b) => {
        const dateA = parseCohortDate(a);
        const dateB = parseCohortDate(b);
        return dateB.getTime() - dateA.getTime(); // Descending order
    });

    // Create grouped structure with superlative vs regular
    return sortedCohorts.map((cohort) => {
        const cohortProjects = grouped.get(cohort)!;
        const superlativeProjects = cohortProjects.filter((p) => p['Has Superlative']);

        // Calculate superlative counts for this cohort
        const superlativeCounts: Record<string, number> = {};
        superlativeProjects.forEach((project) => {
            project.Superlative?.forEach((award) => {
                superlativeCounts[award] = (superlativeCounts[award] || 0) + 1;
            });
        });

        return {
            cohort,
            projects: {
                superlative: sortSuperlativeProjects(superlativeProjects, superlativeCounts),
                regular: cohortProjects.filter((p) => !p['Has Superlative']),
            },
        };
    });
}
