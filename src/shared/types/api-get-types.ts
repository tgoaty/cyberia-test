export interface Category {
	id: number;
	name: string;
}

export interface CategoryData {
	items: Category[];
}

export interface Geo {
	lat: number | null;
	lng: number | null;
}

export interface Project {
	id: number;
	title: string;
	slug: string;
	project_url: string | null;
	image: string;
	image_dark: string;
	description: string;
	geo: Geo;
	categories: Category[];
}

export interface ProjectData {
	items: Project[];
}
