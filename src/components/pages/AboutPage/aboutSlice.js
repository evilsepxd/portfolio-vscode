import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	infoType: 'professional',
	currentFile: 'high-school'
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
	}
});

export const {
	changeInfoType,
	setCurrentFile
} = aboutSlice.actions;

export default aboutSlice.reducer;