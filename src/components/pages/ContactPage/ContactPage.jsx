

import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { getStatus } from './contactSlice';

import Contacts from '../../Contacts/Contacts';
import AccountsLinks from './AccountsLinks/AccountsLinks';
import Tab from './Tab/Tab';
import Form from './Form/Form';
import Code from './Code/Code';
import FormSuccess from './FormSuccess/FormSuccess';

import './contactPage.scss';

function ContactPage() {
	const status = useSelector(getStatus);

	return (
			<section className="contact page">
				<div className="contact__side-bar">
					<Contacts />
					<AccountsLinks />
				</div>
				
				<Tab />
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
				<Code />
			</section>
	);
}

export default ContactPage;