'use client';
import {useEffect, useState} from 'react';
import {fetchCategories} from '@/features/SortProjects/api/categoriesService';
import {CategoryData} from '@/shared/types/api-get-types';
import SortButton from '@/features/SortProjects/SortButton';
import styles from './SortProjects.module.css';
import Loader from '@/shared/ui/Loader/Loader';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';

const SortProjects = () => {
	const [categories, setCategories] = useState<CategoryData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadCategories = async () => {
			try {
				const data = await fetchCategories();
				setCategories(data);
			} catch {
				setError('Failed to load categories');
			} finally {
				setLoading(false);
			}
		};

		loadCategories();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={error} />;
	}

	return (
		<div className={styles['sort-panel']}>
			{categories?.items.map((item) => (
				<div key={item.id}>
					<SortButton category={item} />
				</div>
			))}
		</div>
	);
};

export default SortProjects;
