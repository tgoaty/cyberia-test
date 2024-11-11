import axios from 'axios';
import {endpoints} from '@/shared/api/api-config';
import {FormValues} from '@/shared/types/form-types';

export const submitFeedback = async (values: FormValues): Promise<void> => {
	await axios.post(endpoints.feedbacks, values);
};
