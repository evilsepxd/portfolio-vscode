

import {
	setName,
	setEmail,
	setMessage,
	getName,
	getEmail,
	getMessage
} from '../contactSlice';

import { useSelector, useDispatch } from 'react-redux';

function Form() {
	const name = useSelector(getName);
	const email = useSelector(getEmail);
	const message = useSelector(getMessage);

	const dispatch = useDispatch();

	return (
		<form className="contact__form">
			<div className="contact__form-wrapper">
			<div className="contact__form-item">
				<label htmlFor="name" className='contact__label'>_name:</label>
				<input
					type="text"
					name='name'
					className='contact__input'
					value={name}
					id='name'
					onChange={(e) => dispatch(setName(e.target.value))}
				/>
				</div>

				<div className="contact__form-item">
					<label htmlFor="email" className='contact__label'>_email:</label>
					<input
						type="text"
						name='email'
						className='contact__input'
						value={email}
						id='email'
						onChange={(e) => dispatch(setEmail(e.target.value))}
					/>
				</div>

				<div className="contact__form-item">
					<label htmlFor="message" className='contact__label'>_message:</label>
					<textarea
						name="message"
						id="message"
						className='contact__input contact__input_textarea'
						value={message}
						onChange={(e) => dispatch(setMessage(e.target.value))}
					/>
				</div>

				<button type="submit" className='contact__btn'>submit-message</button>
			</div>
		</form>
	);
}

export default Form;