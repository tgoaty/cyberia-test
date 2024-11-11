import {Project} from '@/shared/types/api-get-types';
import {FC} from 'react';
import styles from './ProjectCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardInterface {
	project: Project;
}

const ProjectCard: FC<ProjectCardInterface> = ({project}) => {
	return (
		<Link href={'/'} className={styles['wrapper']}>
			<Image
				width={387}
				height={378}
				className={styles['image']}
				src={project.image}
				alt={project.title}
				priority
			/>
			<div className={styles['sub--wrapper']}>
				<Image width={25} height={25} className={styles['logo']} src="/blue.svg" alt="blue" />
				<p className={styles['title']}>{project.title}</p>
				<p className={styles['description']}>{project.description}</p>
			</div>
		</Link>
	);
};

export default ProjectCard;
