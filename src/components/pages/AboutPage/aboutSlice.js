import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	infoType: 'professional'
}

const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {
		changeInfoType: (state, action) => {
			state.infoType = action.payload
		}
	}
});

export const {
	changeInfoType
} = aboutSlice.actions;

export default aboutSlice.reducer;