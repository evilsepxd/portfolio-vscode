

function Filter({ name, iconSrc }) {

	return (
		<label htmlFor={name} className="filters__item">
			<input type="checkbox" name={name} />
			<div className="filters__item-inner">
				<img src={iconSrc} alt="icon" className="filters__icon" />
				<div className="filters__name">{ name }</div>
			</div>
		</label>
	);
}


export default Filter;