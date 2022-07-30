import React from 'react'
import Card from '../card/Card'
import ContactMsg from '../contactMsg/ContactMsg'

const ServicesDifferences = ({ cards, contact }) => {

    return (
        <section className="container services-section services-differences gray-card ">
            <h3 className="section__title text-center">The Spade Tech Difference</h3>
            <p className="section__desc text-center">Place holder text for a small description</p>
            <div className="services-differences__container">
                {cards.map(card => {
                    return <Card key={card.id} card={card} />
                })}
            </div>
            {contact && <ContactMsg />}
        </section>
    )
}

export default ServicesDifferences
