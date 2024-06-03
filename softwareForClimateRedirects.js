const CURRENT_COHORT = '2024-06';

const COHORT_REDIRECTS = {
    '2024-06': {
        'hex-workspace': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4',
        'assignment-1-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/ace22725-1516-4039-9b49-6089ecb71c4b', // prettier-ignore
        'assignment-2-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/0f1a4929-52a0-4288-a808-aa5d27765b4c', // prettier-ignore
        'assignment-3-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/ff28be91-e132-4a5a-8815-df703b75d382', // prettier-ignore
        'assignment-4a-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/5cfa7a62-22c5-427e-bc46-6ae7eda5bdce', // prettier-ignore
        'assignment-4b-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/a10717d4-f330-4577-a3e4-580c91adafde', // prettier-ignore
        'assignment-5-hex-notebook': 'https://app.hex.tech/22816b08-0e6f-4dd8-8bc7-fda1c98d25d4/hex/457978c9-9cbd-4f8a-949f-d9f7a33ede11', // prettier-ignore
        'cohort-airtable': 'https://airtable.com/appqRZmfelIxD17dP',
        'fellows-list': 'https://airtable.com/appqRZmfelIxD17dP/shroUmvQRS6orkby3',
        'fellows-form': 'https://airtable.com/appqRZmfelIxD17dP/pagnU7FXYAYMqQeqp/form',
        'final-project-ideas-form': 'https://airtable.com/appqRZmfelIxD17dP/shrzpJ6mTAEOlnDbG',
        'final-project-ideas-list': 'https://airtable.com/appqRZmfelIxD17dP/shr4BhZOzgWrzKP0m',
        'final-project-plans-form': 'https://airtable.com/appqRZmfelIxD17dP/shrj0lQpITOP3Z9Al',
        'final-projects-list': 'https://airtable.com/appqRZmfelIxD17dP/shrMHmBfehRFJCbmS',
        'final-project-ratings-form': 'https://airtable.com/appqRZmfelIxD17dP/shrBdzcjZBgoq2Hf2',
        'final-project-presentation-signup': 'https://docs.google.com/spreadsheets/d/1kIfaeswc7HOTjuyFuv7ZZqFpGMR2e7UHB0JWep1wUaI/edit#gid=739439826', // prettier-ignore
    },
    '2024-04': {
        'hex-workspace': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5',
        'assignment-1-hex-notebook': '404',
        'assignment-2-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/dc0f8d9b-a4d1-4bb0-92fb-9a7e9487faf6/draft/logic', // prettier-ignore
        'assignment-3-hex-notebook': '404',
        'assignment-4a-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/010efa2c-5d16-4d2b-a17d-8c569ba91701/draft/logic', // prettier-ignore
        'assignment-4b-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/5deb822e-3862-40b1-95ec-336dd0bb53cd/draft/logic', // prettier-ignore
        'assignment-5-hex-notebook': 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/57060506-9601-4855-98cc-27cd7dd3d0f7/draft/logic', // prettier-ignore
        'cohort-airtable': 'https://airtable.com/appny4e2a2OxHugIM',
        'final-project-ideas-form': 'https://airtable.com/appny4e2a2OxHugIM/shr1medZdJbX82wDw',
        'final-project-ideas-list': 'https://airtable.com/appny4e2a2OxHugIM/shrh863LQ6vrZHqn8',
        'final-project-plans-form': 'https://airtable.com/appny4e2a2OxHugIM/shrx4Ll7Ix0NSuVg5',
        'final-projects-list': 'https://airtable.com/appny4e2a2OxHugIM/shrWZR0SlGYGRFIPi',
        'final-project-ratings-form': 'https://airtable.com/appny4e2a2OxHugIM/shrkOxQuRZqIw1LZV',
        'final-project-presentation-signup': 'https://docs.google.com/spreadsheets/d/1SSSvtCUFxuekxBHLBMdbZU2kn4TiSxUu8itS79XU-3I/edit#gid=739439826', // prettier-ignore
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
