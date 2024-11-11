import {FC} from 'react';
import styles from './SectionName.module.css';

interface SectionNameTitles {
	title: string;
	subtitle: string;
}

const SectionName: FC<SectionNameTitles> = ({title, subtitle}) => {
	return (
		<div>
			<span className={styles['title']}>{title} /</span>
			<span className={styles['subtitle']}> {subtitle}</span>
		</div>
	);
};

export default SectionName;
