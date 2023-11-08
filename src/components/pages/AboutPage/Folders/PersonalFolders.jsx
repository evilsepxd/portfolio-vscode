

import arrowIconSrc from '../../../../assets/icons/aboutPage/folder-arrow.svg';

import firstFolderIconSrc from '../../../../assets/icons/aboutPage/folder-1.svg';
import secondFolderIconSrc from '../../../../assets/icons/aboutPage/folder-2.svg';
import thirdFolderIconSrc from '../../../../assets/icons/aboutPage/folder-3.svg';

import fileIconSrc from '../../../../assets/icons/aboutPage/folder-file.svg';

function PersonalFolders() {
	return (
		<>
			<li className="folders__item">
				<button className='folders__btn'>
					<img src={arrowIconSrc} alt="arrow" className="folders__btn-arrow" />
					<div className="folders__btn-name">
						<img src={firstFolderIconSrc} alt="" className="folders__btn-icon" />
						<div className="folders__btn-text">bio</div>
					</div>
				</button>
				<ul className="folders__folder">
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">high-school</div>
						</button>
					</li>
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">university</div>
						</button>
					</li>
				</ul>
			</li>

			<li className="folders__item">
				<button className='folders__btn'>
					<img src={arrowIconSrc} alt="arrow" className="folders__btn-arrow" />
					<div className="folders__btn-name">
						<img src={secondFolderIconSrc} alt="" className="folders__btn-icon" />
						<div className="folders__btn-text">interests</div>
					</div>
				</button>
				<ul className="folders__folder">
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">high-school</div>
						</button>
					</li>
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">university</div>
						</button>
					</li>
				</ul>
			</li>

			<li className="folders__item">
				<button className='folders__btn'>
					<img src={arrowIconSrc} alt="arrow" className="folders__btn-arrow" />
					<div className="folders__btn-name">
						<img src={thirdFolderIconSrc} alt="" className="folders__btn-icon" />
						<div className="folders__btn-text">education</div>
					</div>
				</button>
				<ul className="folders__folder">
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">high-school</div>
						</button>
					</li>
					<li className='folders__file'>
						<button className="folders__file-btn">
							<img src={fileIconSrc} alt="file" className="folders__file-icon" />
							<div className="folders__file-text">university</div>
						</button>
					</li>
				</ul>
			</li>
		</>
	);
}

export default PersonalFolders;