import { Project, GroupedProjects } from '@/types/project';

/**
 * Generate a stable anchor ID from a project name
 * Example: "Chicago Climate Action Map 🌎" → "chicago-climate-action-map"
 */
export function generateAnchorId(projectName: string): string {
    return projectName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

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
 */
function parseCohortDate(cohort: string): Date {
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
 * Sort superlative projects with "Best Overall" first
 */
function sortSuperlativeProjects(projects: Project[]): Project[] {
    return projects.sort((a, b) => {
        const aHasBestOverall = a.Superlative?.includes('Best Overall');
        const bHasBestOverall = b.Superlative?.includes('Best Overall');

        if (aHasBestOverall && !bHasBestOverall) return -1;
        if (!aHasBestOverall && bHasBestOverall) return 1;
        return 0;
    });
}

/**
 * Group projects by cohort and sort by date (most recent first)
 * Within each cohort, separate superlative and regular projects
 * Superlative projects are sorted with "Best Overall" first
 */
export function groupProjectsByCohort(projects: Project[]): GroupedProjects[] {
    const grouped = new Map<string, Project[]>();

    // Group by cohort
    projects.forEach((project) => {
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
    return sortedCohorts.map((cohort) => ({
        cohort,
        projects: {
            superlative: sortSuperlativeProjects(
                grouped.get(cohort)!.filter((p) => p['Has Superlative'])
            ),
            regular: grouped.get(cohort)!.filter((p) => !p['Has Superlative']),
        },
    }));
}
