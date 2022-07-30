import { cardContent } from "../../utils/contents/cards-contents/servicesCard"
import Card from "../card/Card";

// Make sure to REMOVE service__icon

function Services() {
    return (
        <section className="container services">
            <h3 className="section__title">Our services</h3>
            <p className="section__desc">We make it easy for users to use our platform</p>
            <div className="services__container">
                {cardContent.map(card => {
                    return (<Card key={card.id} card={card} />)
                })}
            </div>
        </section>
    );
}

export default Services;