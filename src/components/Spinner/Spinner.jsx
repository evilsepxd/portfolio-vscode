import spinnerIconSrc from '../../assets/icons/spinner.svg';

import './spinner.scss';

function Spinner() {
	return (
		<div className="spinner">
			<img src={spinnerIconSrc} alt="spinner" className="spinner__img" />
		</div>
	);
}

export default Spinner;