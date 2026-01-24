import Airtable from 'airtable';

export const revalidate = 0; // No caching

const apiKey = process.env.AIRTABLE_API_KEY;
const PROJECTS_BASE_ID = 'appiTlFyRhnNrKlLh';
const PROJECTS_TABLE_ID = 'tblXD5Vfd9lUIhd10';

const base = new Airtable({ apiKey }).base(PROJECTS_BASE_ID);

interface ProjectRecord {
    id: string;
    'Curated?'?: boolean;
    [key: string]: unknown;
}

export async function GET() {
    try {
        const records = await base(PROJECTS_TABLE_ID).select().all();

        const projects = records
            .map((record) => ({
                id: record.id,
                ...record.fields,
            }))
            .filter((project: ProjectRecord) => project['Curated?'] === true);

        return Response.json({ data: projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return Response.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
