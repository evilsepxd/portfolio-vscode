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

import rickAndMortyImgSrc from '../../../assets/img/projectsPage/rick-and-morty.webp';
import heroAdminPanelImgSrc from '../../../assets/img/projectsPage/hero_admin_panel_template.webp';
import marvelImgSrc from '../../../assets/img/projectsPage/marvel.webp';
import oldPortfolioImgSrc from '../../../assets/img/projectsPage/old-portfolio.webp';
import snakeImgSrc from '../../../assets/img/projectsPage/snake.webp';
import goSurfImgSrc from '../../../assets/img/projectsPage/go-surf.webp';
import createxImgSrc from '../../../assets/img/projectsPage/createx.webp';
import castawayImgSrc from '../../../assets/img/projectsPage/castaway.webp';
import cyberpunkImgSrc from '../../../assets/img/projectsPage/cyberpunk.webp';
import runsmartImgSrc from '../../../assets/img/projectsPage/runsmart.webp';

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
			name: '_rick-and-morty',
			descr: 'Веб-приложение, базирующееся на RickAndMorty API',
			link: 'https://evilsepxd.github.io/rick-and-morty',
			imgSrc: rickAndMortyImgSrc,
			filters: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
		},
		{
			name: '_hero_admin_panel',
			descr: 'Проект, созданный при изучении React и Redux',
			link: 'https://evilsepxd.github.io/hero_admin_panel_template/',
			imgSrc: heroAdminPanelImgSrc,
			filters: ['HTML', 'CSS', 'JS', 'React', 'Redux'],
		},
		{
			name: '_marvel',
			descr: 'Первый проект на React',
			link: 'https://evilsepxd.github.io/marvel/',
			imgSrc: marvelImgSrc,
			filters: ['HTML', 'CSS', 'JS', 'React'],
		},
		{
			name: '_old-portfolio',
			descr: 'Первое, созданное мной, портфолио',
			link: 'https://evilsepxd.github.io/portfolio/dist',
			imgSrc: oldPortfolioImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_snake',
			descr: 'Змейка, созданная для этого проекта',
			link: 'https://evilsepxd.github.io/snake/',
			imgSrc: snakeImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_go-surf',
			descr: 'Лендинг для практики в верстке',
			link: 'https://evilsepxd.github.io/go-surf/',
			imgSrc: goSurfImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_createx',
			descr: 'Лендинг для практики в верстке',
			link: 'https://evilsepxd.github.io/createx/',
			imgSrc: createxImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_castaway',
			descr: 'Лендинг для практики в верстке',
			link: 'https://evilsepxd.github.io/castaway/',
			imgSrc: castawayImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_cyberpunk-2077',
			descr: 'Лендинг для практики в верстке',
			link: 'https://evilsepxd.github.io/Cyberpunk-2077/',
			imgSrc: cyberpunkImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
		},
		{
			name: '_runsmart',
			descr: 'Лендинг для практики в верстке',
			link: 'https://evilsepxd.github.io/runSmart/dist',
			imgSrc: runsmartImgSrc,
			filters: ['HTML', 'CSS', 'JS'],
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

export const getFilteredProjects = createSelector(
	getActiveFilters,
	state => state.projects.projects,
	(filters, projects) => {
		if (filters.length === 0) {
			return projects;
		} else {
			return projects.filter(project => {
				let count = 0;

				filters.forEach(filter => {
					if (project.filters.includes(filter)) {
						count++;
					}
				});

				if (count === filters.length) return project;
			});
		}
	}
)

export const {
	addActiveFilter,
	removeActiveFilter,
	clearFilters
} = projectsSlice.actions;

export default projectsSlice.reducer;