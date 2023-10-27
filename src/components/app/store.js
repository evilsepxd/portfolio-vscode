import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {

	},
	middleware: getDMW => getDMW(),
	devTools: !import.meta.env.PROD
});

export default store;