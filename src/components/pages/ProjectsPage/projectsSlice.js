import { createSlice, createSelector } from "@reduxjs/toolkit";

import HTMLIconSrc from '../../../assets/icons/projectsPage/html.svg';
import CSSIconSrc from '../../../assets/icons/projectsPage/css.svg';
import JSIconSrc from '../../../assets/icons/projectsPage/js.svg';
import ReactIconSrc from '../../../assets/icons/projectsPage/react.svg';
import ReduxIconSrc from '../../../assets/icons/projectsPage/redux.svg';

import HTMLDarkIconSrc from '../../../assets/icons/projectsPage/html-dark.svg';
import CSSDarkIconSrc from '../../../assets/icons/projectsPage/css-dark.svg';
import JSDarkIconSrc from '../../../assets/icons/projectsPage/js-dark.svg';
import ReactDarkIconSrc from '../../../assets/icons/projectsPage/react-dark.svg';
import ReduxDarkIconSrc from '../../../assets/icons/projectsPage/redux-dark.svg';

import rickAndMortyImgSrc from '../../../assets/img/projectsPage/rick-and-morty.jpg';

const initialState = {
	filters: [
		{
			name: 'HTML',
			iconSrc: HTMLIconSrc,
			darkIconSrc: HTMLDarkIconSrc
		},
		{
			name: 'CSS',
			iconSrc: CSSIconSrc,
			darkIconSrc: CSSDarkIconSrc
		},
		{
			name: 'JS',
			iconSrc: JSIconSrc,
			darkIconSrc: JSDarkIconSrc
		},
		{
			name: 'React',
			iconSrc: ReactIconSrc,
			darkIconSrc: ReactDarkIconSrc
		},
		{
			name: 'Redux',
			iconSrc: ReduxIconSrc,
			darkIconSrc: ReduxDarkIconSrc
		}
	],
	activeFilters: [
		{
			name: 'HTML',
			iconSrc: HTMLIconSrc,
			darkIconSrc: HTMLDarkIconSrc
		}
	],
	projects: [
		{
			name: 'rick-and-morty',
			descr: 'Веб-приложение, базирующееся на RickAndMorty API',
			link: 'https://evilsepxd.github.io/rick-and-morty',
			imgSrc: rickAndMortyImgSrc,
			filters: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
		}
	]
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addActiveFilter: (state, action) => {
			state.activeFilters.push(action.payload);
		},
		removeActiveFilter: (state, action) => {
			const i = state.activeFilters.findIndex(filter => filter.name === action.payload);
			state.activeFilters = [...state.activeFilters.slice(0, i), ...state.activeFilters.slice(i + 1)]
		},
		clearFilters : state => {
			state.activeFilters = []
		}
	}
});

export const getActiveFilters = createSelector(
	state => state,
	state => state.projects.activeFilters.map(filter => filter.name)
);

export const {
	addActiveFilter,
	removeActiveFilter,
	clearFilters
} = projectsSlice.actions;

export default projectsSlice.reducer;