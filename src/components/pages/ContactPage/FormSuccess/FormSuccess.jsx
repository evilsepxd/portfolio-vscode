

import { setStatus, clearForm } from '../contactSlice';

import { useDispatch } from 'react-redux';

import './formSuccess.scss';

function FormSuccess() {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setStatus('waiting'));
		dispatch(clearForm());
	}

	return (
		<div className="form-success">
			<h2 className="form-success__title">Thank you! 🤘</h2>
			<div className="form-success__descr">
				Your message has been accepted. You will recieve answer really soon!
			</div>
			<button
				className="contact__btn form-success__btn"
				onClick={handleClick}
			>
				send-new-message
			</button>
		</div>
	);
}

export default FormSuccess;