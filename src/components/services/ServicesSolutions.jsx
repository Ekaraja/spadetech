import React from 'react'
import Card from '../card/Card'

const ServicesSolutions = ({ card, extra }) => {

    const { card_1, card_2, card_3, card_4 } = card.section_1;
    return (
        <section className="container services-solutions gray-card ">
            
            <Card card={card_1} />
            <div className="next__btn"></div>
            <Card card={card_2} />

            {extra &&
                <>
                    <Card card={card_3} />
                    <div className="next__btn"></div>
                    <Card card={card_4} />
                </>}
        </section>
    )
}

export default ServicesSolutions