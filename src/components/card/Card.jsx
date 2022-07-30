import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({ card }) => {
    return (
        <article className={`card ${card.className}`}>
            <div className={card.subClass}>
                <div className={card.iconClass}>
                    <img src={card.icon} alt={card.icon} />
                </div>
                <div className="card__body">
                    <h4>{card.title}</h4>
                    <p>
                        {card.content}
                    </p>
                </div>
            </div>
            {card.button && <Link className="learn-more__btn" to={card.url}>
                Learn More
            </Link>}
        </article>
    )
}

export default Card
