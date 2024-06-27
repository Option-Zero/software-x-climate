import Airtable, { Attachment } from 'airtable';

const apiKey = process.env.AIRTABLE_API_KEY;
const SOFTWARE_X_CLIMATE_COMPANIES_BASE_ID = 'app97sUZfBc4P5fgr';
const COMPANIES_TABLE_NAME = 'Companies';
const COMPANIES_GRID_VIEW = 'Grid view';

const base = new Airtable({ apiKey }).base(SOFTWARE_X_CLIMATE_COMPANIES_BASE_ID);

export async function GET() {
    const records = await base(COMPANIES_TABLE_NAME).select({ view: COMPANIES_GRID_VIEW }).all();

    // eslint-disable-next-line no-console
    console.log('Fetching records from Airtable...');

    const companies = records.map((record) => {
        return {
            ...record.fields,
            Logo: record.fields.Logo ? (record.fields.Logo as Attachment[])[0] : undefined, // Logo field is an array of Attachments, so just pick the first
        };
    });

    // eslint-disable-next-line no-console
    console.log(`Fetched ${companies.length} records`);

    return Response.json({ data: companies });
}

// Tell next.js to revalidate every time this page is fetched
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 0;
