import axios from 'axios';
import {endpoints} from '@/shared/api/api-config';
import {CategoryData} from '@/shared/types/api-get-types';

export const fetchCategories = async (): Promise<CategoryData> => {
	const response = await axios.get(endpoints.categories);
	return response.data as CategoryData;
};
