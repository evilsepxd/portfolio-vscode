

import {
	setName,
	setEmail,
	setMessage,
	setStatus,
	getName,
	getEmail,
	getMessage
} from '../contactSlice';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// https://docs.google.com/forms/d/e/1FAIpQLSfFmvLJe2rJBPfYJtRAUxAG_jqmBL3QUqjkjAihOlWLGAPd5w/formResponse?usp=pp_url&entry.1106056267=%D0%9F%D1%91%D1%82%D1%80&entry.1525080091=%D0%BF%D0%BE%D1%87%D1%82%D0%B0@mail.ru&entry.1747520779=%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5+%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5


function Form() {
	const [btnDisabled, setBtnDisabled] = useState(false);

	const name = useSelector(getName);
	const email = useSelector(getEmail);
	const message = useSelector(getMessage);

	const dispatch = useDispatch();

	const onSubmit = () => {
		setBtnDisabled(true);
		setTimeout(() => {
			dispatch(setStatus('success'));
			setBtnDisabled(false);
		}, 1000);
	}

	return (
		<form
			className="contact__form"
			name='form'
			id='form'
			action='https://docs.google.com/forms/d/e/1FAIpQLSfFmvLJe2rJBPfYJtRAUxAG_jqmBL3QUqjkjAihOlWLGAPd5w/formResponse?'
			target='hidden-iframe'
			onSubmit={onSubmit}
		>
			<iframe name='hidden-iframe' id='hidden-iframe'></iframe>
			<div className="contact__form-wrapper">
			<div className="contact__form-item">
				<label htmlFor="entry.1106056267" className='contact__label'>_name:</label>
				<input
					type="text"
					name='entry.1106056267'
					className='contact__input'
					value={name}
					id='entry.1106056267'
					onChange={(e) => dispatch(setName(e.target.value))}
					required
				/>
				</div>

				<div className="contact__form-item">
					<label htmlFor="entry.1525080091" className='contact__label'>_email:</label>
					<input
						type="email"
						name='entry.1525080091'
						className='contact__input'
						value={email}
						id='entry.1525080091'
						onChange={(e) => dispatch(setEmail(e.target.value))}
						required
					/>
				</div>

				<div className="contact__form-item">
					<label htmlFor="entry.1747520779" className='contact__label'>_message:</label>
					<textarea
						name="entry.1747520779"
						id="entry.1747520779"
						className='contact__input contact__input_textarea'
						value={message}
						onChange={(e) => dispatch(setMessage(e.target.value))}
						required
					/>
				</div>

				<button type="submit" className='contact__btn' disabled={btnDisabled}>submit-message</button>
			</div>
		</form>
	);
}

export default Form;