'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import {useMediaQuery, useTheme} from '@mui/material';
import OpenDrawer from '@/features/OpenDrawer/OpenDrawer';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const Header = () => {
	const theme = useTheme();
	const [isReady, setIsReady] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down(376));

	useEffect(() => {
		if (theme) setIsReady(true);
	}, [theme]);

	if (!isReady) return null;
	return (
		<header className={styles['header']}>
			<Link href="/">
				<Image width={131} height={28} src="/logo.svg" alt="logo" className={styles['logo']} />
			</Link>

			{isMobile ? (
				<OpenDrawer>
					<div className={styles['nav']}>
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
					<div className={styles['line']}></div>
					<div className={styles['contacts']}>
						<h3 className={styles['contact--header']}>Контакты:</h3>
						<p className={styles['contact']}>+7 999 123 45 67</p>
						<p className={styles['contact']}>hello@cyberia.studio</p>
						<p className={styles['contact']}>ул.Ярных, д.35, оф.10</p>
					</div>

					<div className={styles['line']}></div>
				</OpenDrawer>
			) : (
				<div className={styles['nav']}>
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
			)}
		</header>
	);
};

export default Header;
