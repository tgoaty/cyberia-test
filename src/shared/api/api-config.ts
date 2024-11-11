const BASE_URL: string = 'https://api.test.cyberia.studio/api/v1';

interface Endpoints {
	projects: string;
	categories: string;
	feedbacks: string;
}

export const endpoints: Endpoints = {
	projects: `${BASE_URL}/projects`,
	categories: `${BASE_URL}/project-categories`,
	feedbacks: `${BASE_URL}/feedbacks`,
};
