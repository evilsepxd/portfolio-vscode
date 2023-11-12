import { configureStore } from "@reduxjs/toolkit";

import about from "../pages/AboutPage/aboutSlice";
import projects from '../pages/ProjectsPage/projectsSlice';

const store = configureStore({
	reducer: {
		about,
		projects
	},
	middleware: gDWM => gDWM(),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;