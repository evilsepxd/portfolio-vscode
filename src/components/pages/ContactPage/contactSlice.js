import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	name: '',
	email: '',
	message: '',
	status: 'waiting'
}

const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		clearForm: state => {
			state.name = '';
			state.email = '';
			state.message = '';
		},
		setStatus: (state, action) => {
			state.status = action.payload;
		}
	}
});

export const getName = createSelector(
	state => state.contact,
	state => state.name
);
export const getEmail = createSelector(
	state => state.contact,
	state => state.email
);
export const getMessage = createSelector(
	state => state.contact,
	state => state.message
);
export const getStatus = createSelector(
	state => state.contact,
	state => state.status
);

export const {
	setName,
	setEmail,
	setMessage,
	clearForm,
	setStatus
} = contactSlice.actions;

export default contactSlice.reducer;