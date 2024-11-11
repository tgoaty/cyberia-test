import SortProjects from '@/features/SortProjects/SortProjects';
import styles from './ProjectsSection.module.css';
import ProjectsList from '@/widgets/ProjectsSection/ProjectsList';

const ProjectsSection = () => {
	return (
		<div className={styles['wrapper']}>
			<h1 className={styles['title']}>Кейсы</h1>
			<SortProjects />
			<ProjectsList />
		</div>
	);
};

export default ProjectsSection;
