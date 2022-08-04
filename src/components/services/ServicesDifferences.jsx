import React, {useState} from 'react'
import Contact from '../../pages/contact/Contact'
import Card from '../card/Card'
import ContactMsg from '../contactMsg/ContactMsg'

const ServicesDifferences = ({ cards, contact }) => {
    const [openContact, setOpenContact] = useState(false)





    return (
        <section className="container services-section services-differences --light-gray-bg ">
            <h3 className="section__title --text-center">The Spade Tech Difference</h3>
            <p className="section__desc --text-center">Place holder text for a small description</p>
            <div className="services-differences__container">
                {cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </div>
            {contact && <ContactMsg openContact={openContact} setOpenContact={setOpenContact}/>}
            {openContact && <Contact openContact={openContact} setOpenContact={setOpenContact} />}
        </section>
    )
}

export default ServicesDifferences
