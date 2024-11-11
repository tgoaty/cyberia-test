'use client';
import {useEffect, useState} from 'react';
import {Project, ProjectData} from '@/shared/types/api-get-types';
import {fetchProjects} from './api/projectsService';
import ProjectCard from '@/entities/ProjectCard/ProjectCard';
import styles from './ProjectsList.module.css';
import {useStore} from '@/app/store/store';
import Loader from '@/shared/ui/Loader/Loader';
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage';

const ProjectsList = () => {
	const [projects, setProjects] = useState<ProjectData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const {sortCategory} = useStore();

	useEffect(() => {
		const loadProjects = async () => {
			try {
				const data = await fetchProjects();
				setProjects(data);
			} catch {
				setError('Failed to load projects');
			} finally {
				setLoading(false);
			}
		};

		loadProjects();
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage message={error} />;
	}

	return (
		<div className={styles['container']}>
			{projects?.items
				.filter((item: Project) => {
					if (!sortCategory) return true;
					return item.categories.some((category) => category.name === sortCategory.name);
				})
				.map((item) => (
					<div key={item.id}>
						<ProjectCard project={item} />
					</div>
				))}
		</div>
	);
};

export default ProjectsList;
