import { createSlice, createSelector } from "@reduxjs/toolkit";

import HTMLIconSrc from '../../../assets/icons/projectsPage/html.svg';
import CSSIconSrc from '../../../assets/icons/projectsPage/css.svg';
import JSIconSrc from '../../../assets/icons/projectsPage/js.svg';
import ReactIconSrc from '../../../assets/icons/projectsPage/react.svg';
import ReduxIconSrc from '../../../assets/icons/projectsPage/redux.svg';

const initialState = {
	filters: [
		{
			name: 'HTML',
			iconSrc: HTMLIconSrc
		},
		{
			name: 'CSS',
			iconSrc: CSSIconSrc
		},
		{
			name: 'JS',
			iconSrc: JSIconSrc
		},
		{
			name: 'React',
			iconSrc: ReactIconSrc
		},
		{
			name: 'Redux',
			iconSrc: ReduxIconSrc
		}
	],
	activeFilters: []
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