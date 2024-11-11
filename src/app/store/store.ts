import {create} from 'zustand';
import {Category} from '@/shared/types/api-get-types';

interface StoreState {
	sortCategory: Category | null;
	setSortCategory: (category: Category | null) => void;
}

export const useStore = create<StoreState>((set) => ({
	sortCategory: null,
	setSortCategory: (category: Category | null) => set(() => ({sortCategory: category})),
}));
