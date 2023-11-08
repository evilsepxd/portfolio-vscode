import { configureStore } from "@reduxjs/toolkit";

import about from "../pages/AboutPage/aboutSlice";

const store = configureStore({
	reducer: {
		about
	},
	middleware: gDWM => gDWM(),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;