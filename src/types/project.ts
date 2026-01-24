export type AirtableImage = {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    width: number;
    height: number;
    thumbnails: {
        small: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
        full: { url: string; width: number; height: number };
    };
};

export type Project = {
    id: string;
    Name: string;
    Description: string;
    Team: string; // Comma-separated names
    Cohort: string; // e.g., "Apr 2024"
    'Hero Image'?: AirtableImage[];
    Superlative?: string[]; // e.g., ["Best Overall", "Most Interesting"]
    'Has Superlative'?: boolean;
    'Curated?'?: boolean;
    'Presentation recording'?: string;
    'Presentation slides'?: string;
    'Code repository'?: string;
    'Demo App'?: string;
    'Hex notebook'?: string;
    'Climate Data Sources'?: string;
    Created: string;
};

export type GroupedProjects = {
    cohort: string;
    projects: {
        superlative: Project[];
        regular: Project[];
    };
};
