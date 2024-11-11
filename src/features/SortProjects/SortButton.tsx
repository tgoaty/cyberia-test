'use client';
import {FC} from 'react';
import {useStore} from '@/app/store/store';
import styles from './SortButton.module.css';
import {Category} from '@/shared/types/api-get-types';

interface SortButtonInterface {
	category: Category;
}

const SortButton: FC<SortButtonInterface> = ({category}) => {
	const {setSortCategory, sortCategory} = useStore();

	const changeCategory = () => {
		if (sortCategory?.name === category.name) {
			setSortCategory(null);
		} else {
			setSortCategory(category);
		}
	};

	return (
		<button className={styles['button']} onClick={changeCategory}>
			{category.name}
		</button>
	);
};

export default SortButton;
