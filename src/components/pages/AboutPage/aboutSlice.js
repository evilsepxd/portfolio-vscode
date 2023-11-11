import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	infoType: 'personal',
	currentFile: 'aboutMe',
	openedFiles: [
		'aboutMe'
	]
}

const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {
		changeInfoType: (state, action) => {
			state.infoType = action.payload
		},
		setCurrentFile: (state, action) => {
			state.currentFile = action.payload
		},
		newOpenedFile: (state, action) => {
			state.openedFiles.push(action.payload)
		},
		deleteOpenedFile: (state, action) => {
			const i = action.payload;
			state.openedFiles = [...state.openedFiles.splice(0, i), ...state.openedFiles.splice(i + 1)]
		}
	}
});

export const {
	changeInfoType,
	setCurrentFile,
	newOpenedFile,
	deleteOpenedFile
} = aboutSlice.actions;

export default aboutSlice.reducer;