import useHeaderFooterCollapse from '../../../hooks/useHeaderFooterCollapse';

import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { getStatus } from './contactSlice';

import Contacts from '../../Contacts/Contacts';
import AccountsLinks from './AccountsLinks/AccountsLinks';
import Form from './Form/Form';
import FormSuccess from './FormSuccess/FormSuccess';

import './contactPage.scss';

function ContactPageMobile({ setHeader, setFooter }) {

	const status = useSelector(getStatus);
	const pageRef = useRef(null);

	useHeaderFooterCollapse(pageRef, setHeader, setFooter);

	return (
			<section className="contact page" ref={pageRef}>
				<div className="page__title">_contact-me</div>
				<div className="contact__side-bar">
					<Contacts />
					<AccountsLinks />
				</div>
				
				<SwitchTransition>
					<CSSTransition
						classNames='forms'
						addEndListener={(form, done) => form.addEventListener('transitionend', done, false)}
						key={status}
					>
						{
							status === 'waiting'
							? <Form />
							: <FormSuccess />
						}
					</CSSTransition>
				</SwitchTransition>
			</section>
	);
}

export default ContactPageMobile;