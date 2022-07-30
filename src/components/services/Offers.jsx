import React from 'react'

const Offers = ({ page }) => {

    return (

        <section className="container services-section">
            <div className="services-works">
                <h3 className="section__title">
                    What we offer
                </h3>
                <div className="offers__list">
                    {page.map(offer => {
                        return <p key={offer.id}>{offer.content}</p>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Offers