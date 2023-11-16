import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	infoType: 'personal',
	currentFile: 'aboutMe',
	openedFiles: [
		'aboutMe'
	],
	folders: {
		professional: [
			{
				name: 'skills',
				files: [
					'projects',
					'stack',
				]
			},
			{
				name: 'education',
				files: [
					'languages',
					'education',
					'courses'
				]
			},
			{
				name: 'experience',
				files: [
					'experience'
				]
			}
		],
		personal: [
			{
				name: 'bio',
				files: [
					'aboutMe',
					'residence'
				]
			},
			{
				name: 'contacts',
				files: [
					'contacts'
				]
			}
		],
		hobbies: [
			{
				name: 'hobbies',
				files: [
					'hobbies'
				]
			},
			{
				name: 'interests',
				files: [
					'moviesAndGames',
					'sports'
				]
			}
		]
	}
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
			const i = state.openedFiles.indexOf(action.payload);
			state.openedFiles = [...state.openedFiles.slice(0, i), ...state.openedFiles.slice(i + 1)]
		}
	}
});

export const getFolders = createSelector(
	state => state.about,
	about => about.folders
);

export const getInfoType = createSelector(
	state => state.about,
	about => about.infoType
);

export const getCurrentFile = createSelector(
	state => state.about,
	about => about.currentFile
);

export const {
	changeInfoType,
	setCurrentFile,
	newOpenedFile,
	deleteOpenedFile
} = aboutSlice.actions;

export default aboutSlice.reducer;