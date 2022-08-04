import React, { useEffect, useRef } from 'react'
import './contact.css'
import close from "../../assets/icons/close.svg"
import emailjs from "emailjs-com"

const Contact = ({ openContact, setOpenContact }) => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// emailjs.sendForm('service_b6dswcx', 'template_7z2i4tf', form.current, 'ViBk2Ln_-fB5Hxtc0')
		// 	.then((result) => {
		// 		console.log(result.text);
		// 	}, (error) => {
		// 		console.log(error.text);
		// 	});

		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		e.target.reset()
	};


	useEffect(() => {
		if (openContact) {
			document.body.style.overflow = 'hidden'
			console.log(openContact);
			return () => document.body.style.overflow = 'unset';
		}
	}, [openContact])

	return (
		<>
			<div className='contact__container'>
				<div className='close-btn'>
					<button className='btn close' onClick={() => setOpenContact(false)}>
						<img src={close} alt="close-icon" />
					</button>
				</div>
				<form ref={form} onSubmit={sendEmail} className="contact__form --white-bg">
					<h5>Contact Us</h5>

					<div className="form__content">
						<div className='checkbox__container'>
							<div className="checkbox">
								<input type="radio" id="greeting" name="subject" />
								<label forHtml="html">SAY HI </label>
								<input type="radio" id="business" name="subject" />
								<label forHtml="css">DO BUSINESS </label>
							</div>
						</div>
						<div className="input__container">
							<div className="input">
								<label htmlFor=""></label>
								<input type="text" placeholder="Name*" id="name" name="name" />
							</div>
							<div className="input">
								<label htmlFor=""></label>
								<input type="text" placeholder="Email*" id="email" name="email" />
							</div>
							<div className="input">
								<label htmlFor=""></label>
								<input type="text" placeholder="Phone Number*" id="phoneNumber" name="phoneNumber" />
							</div>
							<div className="input">
								<label htmlFor=""></label>
								<textarea type="text" placeholder="Message*" id="message" name="message" />
							</div>
						</div>
					</div>
					<div className="submit-btn">
						<button className='btn submit'>Submit</button>
					</div>
				</form>
			</div>

		</>
	)
}

export default Contact