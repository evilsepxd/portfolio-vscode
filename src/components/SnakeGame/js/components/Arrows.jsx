import upArrowSrc from '../../assets/img/up-arrow.svg';
import leftArrowSrc from '../../assets/img/left-arrow.svg';
import botArrowSrc from '../../assets/img/bot-arrow.svg';
import rightArrowSrc from '../../assets/img/right-arrow.svg';

function Arrows() {

	return (
		<>
			<div className="arrows__text text">
				&#47;&#47; use keyboard <br/>
				&#47;&#47; arrows to play
			</div>
			<div className="arrows__inner">
				<img src={upArrowSrc} alt="arrow" className='arrows__arrow arrows__arrow_top'/>
				<img src={leftArrowSrc} alt="arrow" className='arrows__arrow arrows__arrow_left'/>
				<img src={botArrowSrc} alt="arrow" className='arrows__arrow arrows__arrow_bot'/>
				<img src={rightArrowSrc} alt="arrow" className='arrows__arrow arrows__arrow_right'/>
			</div>
		</>
	);
}

export default Arrows;