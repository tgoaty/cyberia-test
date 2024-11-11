import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer-main']}>
				<Link href="/">
					<Image
						width={196}
						height={41}
						src="/logo.svg"
						alt="logo"
						className={styles['logo']}
					/>
				</Link>

				<p className={styles['link']}>Веб-разработка и усиление IT-команд</p>
			</div>

			<div className={styles['nav']}>
				<p className={styles['link']}>+7 999 123 45 67</p>
				<p className={styles['link']}>hello@cyberia.studio</p>
				<p className={styles['link']}>ул.Ярных, д.35, оф.10</p>

				<Link className={styles['link']} href="/">
					Агенство
				</Link>
				<Link className={styles['link']} href="/">
					Услуги
				</Link>
				<Link className={styles['link']} href="/">
					Кейсы
				</Link>

				<Link className={styles['link']} href="/">
					Блог
				</Link>
				<Link className={styles['link']} href="/">
					Контакты
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
