import axios from 'axios';
import {endpoints} from '@/shared/api/api-config';
import {ProjectData} from '@/shared/types/api-get-types';

export const fetchProjects = async (): Promise<ProjectData> => {
	const response = await axios.get(endpoints.projects);
	return response.data as ProjectData;
};
