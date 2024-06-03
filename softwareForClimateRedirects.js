const CURRENT_COHORT = '2024-06';

const COHORT_REDIRECTS = {
    '2024-06': {
        // Hex
        'hex-workspace': '/todo',
        'assignment-1-hex-notebook': '404',
        'assignment-2-hex-notebook': '404',
        'assignment-3-hex-notebook': '404',
        'assignment-4a-hex-notebook': '404',
        'assignment-4b-hex-notebook': '404',
        'assignment-5-hex-notebook': '404',
        // Airtable
        'cohort-airtable': 'https://airtable.com/appqRZmfelIxD17dP',
        'fellows-list': 'https://airtable.com/appqRZmfelIxD17dP/shroUmvQRS6orkby3',
        'fellows-form': 'https://airtable.com/appqRZmfelIxD17dP/pagnU7FXYAYMqQeqp/form',
        'final-project-ideas-form': 'https://airtable.com/appqRZmfelIxD17dP/shrzpJ6mTAEOlnDbG',
        'final-project-ideas-list': 'https://airtable.com/appqRZmfelIxD17dP/shr4BhZOzgWrzKP0m',
        'final-project-plans-form': 'https://airtable.com/appqRZmfelIxD17dP/shrj0lQpITOP3Z9Al',
        'final-projects-list': 'https://airtable.com/appqRZmfelIxD17dP/shrMHmBfehRFJCbmS',
        'final-project-ratings-form': 'https://airtable.com/appqRZmfelIxD17dP/shrBdzcjZBgoq2Hf2',
    },
    '2024-04': {
        // Hex
        'hex-workspace': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5',
        'assignment-1-hex-notebook': '404',
        'assignment-2-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/dc0f8d9b-a4d1-4bb0-92fb-9a7e9487faf6/draft/logic', //prettier-ignore
        'assignment-3-hex-notebook': '404',
        'assignment-4a-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/010efa2c-5d16-4d2b-a17d-8c569ba91701/draft/logic', //prettier-ignore
        'assignment-4b-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/5deb822e-3862-40b1-95ec-336dd0bb53cd/draft/logic', //prettier-ignore
        'cohort-airtable': 'https://airtable.com/appny4e2a2OxHugIM',
        'final-project-ideas-form': 'https://airtable.com/appny4e2a2OxHugIM/shr1medZdJbX82wDw',
        'final-project-ideas-list': 'https://airtable.com/appny4e2a2OxHugIM/shrh863LQ6vrZHqn8',
        'final-project-plans-form': 'https://airtable.com/appny4e2a2OxHugIM/shrx4Ll7Ix0NSuVg5',
        'final-projects-list': 'https://airtable.com/appny4e2a2OxHugIM/shrWZR0SlGYGRFIPi',
        'final-project-ratings-form': 'https://airtable.com/appny4e2a2OxHugIM/shrkOxQuRZqIw1LZV',
    },
};

const currentCohortRedirects = Object.entries(COHORT_REDIRECTS[CURRENT_COHORT]).map(
    ([name, url]) => {
        return {
            source: `/links/${name}`,
            destination: url,
            permanent: false,
        };
    }
);

export default currentCohortRedirects;
