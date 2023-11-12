import spinnerIconSrc from '../../assets/icons/spinner.svg';

import './spinner.scss';

function Spinner() {
	return (
		<img src={spinnerIconSrc} alt="spinner" className="spinner" />
	);
}

export default Spinner;