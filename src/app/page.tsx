import Header from '@/widgets/Header/Header';
import styles from './page.module.css';
import SectionName from '@/shared/ui/SectionName/SectionName';
import ProjectsSection from '@/widgets/ProjectsSection/ProjectsSection';
import Footer from '@/shared/ui/Footer/Footer';
import ProjectForm from '@/widgets/ProjectForm/ProjectForm';

const Home = () => {
	return (
		<>
			<Header />
			<div className={styles['wrapper']}>
				<SectionName title="Главная" subtitle="Кейсы" />
				<ProjectsSection />
				<ProjectForm />
			</div>
			<Footer />
		</>
	);
};

export default Home;
