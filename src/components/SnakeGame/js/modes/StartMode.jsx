function StartMode({ btnRef }) {

	const handleClick = () => {

		setTimeout(() => {
			btnRef.current.classList.remove('active');
			setTimeout(() => {
				btnRef.current.remove();
			}, 300);
		}, 500);
	}

	return (
		<button 
			className="btn-start active"
			onClick={handleClick}
			ref={btnRef}
		>
			start-game
		</button>
	);
}

export default StartMode;