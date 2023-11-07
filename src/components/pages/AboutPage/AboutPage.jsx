

import Folders from './Folders/Folders';
import Contacts from '../../Contacts/Contacts';
import Tabs from '../../Tabs/Tabs';
import InfoBlock from './InfoBlock/InfoBlock';
import Snippets from './Snippets/Snippets';

import './aboutPage.scss';


function AboutPage() {

	// nav - навигация между блоками с информацией. управляет стейтом, который меняет отображение блоков с инфой
	// Folders - папками с информацией, меняется в завис. от стейта
	// div.contacts - статичный
	// Tabs - владки с открытыми ранее файлами
	// InfoBlock - блок с инфой, меняется в завис. от стейта
	// div.code-snippets - статичный, сниппеты кода

	return (
		<>
			<section className="about page">
				<nav className="about__nav">
					<button className='about__navlink active' >
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.4" clipPath="url(#clip0_64_1623)">
								<path d="M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z" fill="#607B96"/>
							</g>
							<defs>
								<clipPath id="clip0_64_1623">
									<rect width="24" height="24" fill="white" transform="translate(0 0.651855)"/>
								</clipPath>
							</defs>
						</svg>
					</button>
					<button className='about__navlink' >
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.4" clipPath="url(#clip0_64_1620)">
								<path d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z" fill="#607B96"/>
							</g>
							<defs>
								<clipPath id="clip0_64_1620">
									<rect width="24" height="24" fill="white" transform="translate(0 0.651855)"/>
								</clipPath>
							</defs>
						</svg>
					</button>
					<button className='about__navlink' >
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.4" clipPath="url(#clip0_64_1617)">
								<path d="M17 4.87793C18.5913 4.87793 20.1174 5.51007 21.2426 6.63529C22.3679 7.76051 23 9.28663 23 10.8779V14.8779C23 16.4692 22.3679 17.9954 21.2426 19.1206C20.1174 20.2458 18.5913 20.8779 17 20.8779H7C5.4087 20.8779 3.88258 20.2458 2.75736 19.1206C1.63214 17.9954 1 16.4692 1 14.8779V10.8779C1 9.28663 1.63214 7.76051 2.75736 6.63529C3.88258 5.51007 5.4087 4.87793 7 4.87793H17ZM10 9.87793H8V11.8779H6V13.8779H7.999L8 15.8779H10L9.999 13.8779H12V11.8779H10V9.87793ZM18 13.8779H16V15.8779H18V13.8779ZM16 9.87793H14V11.8779H16V9.87793Z" fill="#607B96"/>
							</g>
							<defs>
								<clipPath id="clip0_64_1617">
									<rect width="24" height="24" fill="white" transform="translate(0 0.87793)"/>
								</clipPath>
							</defs>
						</svg>
					</button>
				</nav>

				<div className="about__files">
					<Folders />

					<Contacts />
				</div>

				<Tabs text='personal-info' className='about__tabs' />

				<InfoBlock />

				<div className="about__empty"></div>
				<Snippets />
			</section>
		</>
	)
}

export default AboutPage;