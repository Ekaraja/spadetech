import React, { useState } from 'react'
import './contactMsg.css'
import Contact from '../../pages/contact/Contact'

const ContactMsg = ({openContact, setOpenContact}) => {

    return (
        <>
            <div className="contact__message">
                <span>
                    If you're looking for expert guidance to launch your blockchain
                    project, Spadetech is the perfect partner.
                </span>
                <button onClick={()=> setOpenContact(!openContact)} className="btn action__btn">Get in touch</button>
            </div>
        </>
    )
}

export default ContactMsg