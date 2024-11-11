import {CircularProgress} from '@mui/material';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles['loader']}>
			<CircularProgress disableShrink />
		</div>
	);
};

export default Loader;
