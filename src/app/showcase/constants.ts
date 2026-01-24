// Course URL with UTM tracking for different sources
const BASE_COURSE_URL = 'https://www.terra.do/climate-change-courses/software-for-climate/';

export const COURSE_URLS = {
    // When clicked from the About modal
    fromModal: `${BASE_COURSE_URL}?utm_source=showcase&utm_medium=modal&utm_campaign=final_projects`,

    // When clicked from the header (currently not used but kept for reference)
    fromHeader: `${BASE_COURSE_URL}?utm_source=showcase&utm_medium=header&utm_campaign=final_projects`,

    // When clicked from the footer
    fromFooter: `${BASE_COURSE_URL}?utm_source=showcase&utm_medium=footer&utm_campaign=final_projects`,
};
