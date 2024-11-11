import React, {FC, ReactNode, useState} from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import styles from './OpenDrawer.module.css';
import Image from 'next/image';

interface DrawerComponentProps {
	children: ReactNode;
}

const DrawerComponent: FC<DrawerComponentProps> = ({children}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setIsOpen(open);
	};

	return (
		<div>
			<IconButton onClick={toggleDrawer(true)} style={{padding: 0}}>
				<Image width={32} height={32} src="/burger-menu.svg" alt="open menu" />
			</IconButton>

			<Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
				<Box width="375px" role="presentation" className={styles['drawer--box']}>
					<div className={styles['close--icon--wrapper']}>
						<IconButton onClick={toggleDrawer(false)} style={{padding: 0}}>
							<Image width={32} height={32} src="/close-menu.svg" alt="close menu" />
						</IconButton>
					</div>

					{children}
				</Box>
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
