const CURRENT_COHORT = '2024-04';

const COHORT_REDIRECTS = {
    '2024-06': [],
    '2024-04': [
        // HEX
        {
            name: 'hex-workspace',
            url: 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/home',
        },
        // Explicitly DON'T include the hex invite link!
        // {
        //     name: 'hex-invite-link',
        //     url: '',
        // },
        // {
        //     name: 'assignment-1-hex-notebook',
        //     url: '',
        // },
        {
            name: 'assignment-2-hex-notebook',
            url: 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/dc0f8d9b-a4d1-4bb0-92fb-9a7e9487faf6/draft/logic',
        },
        // {
        //     name: 'assignment-3-hex-notebook',
        //     url: '',
        // },
        {
            name: 'assignment-4a-hex-notebook',
            url: 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/010efa2c-5d16-4d2b-a17d-8c569ba91701/draft/logic',
        },
        {
            name: 'assignment-4b-hex-notebook',
            url: 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/5deb822e-3862-40b1-95ec-336dd0bb53cd/draft/logic',
        },
        {
            name: 'assignment-5-hex-notebook',
            url: 'https://app.hex.tech/8848a05c-8000-408c-9011-f87eca4333c5/hex/57060506-9601-4855-98cc-27cd7dd3d0f7/draft/logic',
        },
        // AIRTABLE
        {
            name: 'airtable',
            url: 'https://airtable.com/appny4e2a2OxHugIM',
        },
        {
            name: 'final-project-ideas-form',
            url: 'https://airtable.com/appny4e2a2OxHugIM/shr1medZdJbX82wDw',
        },
        {
            name: 'final-project-ideas-list',
            url: 'https://airtable.com/appny4e2a2OxHugIM/shrh863LQ6vrZHqn8',
        },
        {
            name: 'final-project-plans-form',
            url: 'https://airtable.com/appny4e2a2OxHugIM/shrx4Ll7Ix0NSuVg5',
        },
        {
            name: 'final-projects-list',
            url: 'https://airtable.com/appny4e2a2OxHugIM/shrWZR0SlGYGRFIPi',
        },
        {
            name: 'final-project-ratings-form',
            url: 'https://airtable.com/appny4e2a2OxHugIM/shrkOxQuRZqIw1LZV',
        },
    ],
};

const currentCohortRedirects = COHORT_REDIRECTS[CURRENT_COHORT].map((redirect) => {
    return {
        source: `/links/${redirect.name}`,
        destination: redirect.url,
        permanent: false,
    };
});

export default currentCohortRedirects;
