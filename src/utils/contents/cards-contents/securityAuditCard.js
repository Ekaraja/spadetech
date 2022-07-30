
import sunrise from "../../../assets/icons/sunrise.svg"
import smile from "../../../assets/icons/smile.svg"
import img8 from "../../../assets/img/img8.svg"
import img9 from "../../../assets/img/img9.svg"
import img10 from "../../../assets/img/img10.svg"
import img11 from "../../../assets/img/img11.svg"

export const securityCard = {
    section_1: {
        card_1: {
            icon: sunrise,
            title: "The problem",
            content: "Smart contracts are vulnerable to security risks that can lead to devastating consequences. Your project could be at risk of being hacked, stolen, or frozen due to vulnerabilities in your code.",
            iconClass: "card__icon",
            className: "white-card services-section",
            subClass: "icon--row-card"
        },
        card_2: {
            icon: smile,
            title: "The solution",
            content: "Spadetech's security audits provide a robust analysis of your smart contract to identify and address any security concerns. A comprehensive, line by line review of your project's code ensures that your project is secure against any potential threats.",
            iconClass: "card__icon",
            className: "red-card",
            subClass: "icon--row-card"
        }
    },
    section_3 : [
        {
            id: 1,
            icon: img8,
            title: "No technical knowledge required",
            content: "We'll take the time to explain our findings in simple terms, so you can make informed decisions about the security of your project.",
            iconClass: "card__img",
            className: "white-card",
            subClass: "img--row-card"
        },
        {
            id: 2,
            icon: img9,
            title: "Your customised solution",
            content: "Our report and recommendations will be tailored to your project's needs - whether you're a startup with a simple smart contract or an enterprise with a complex system.",
            iconClass: "card__img",
            className: "white-card",
            subClass: "img--row-card"
        },
        {
            id: 3,
            icon: img10,
            title: "Robust analysis",
            content: "We go beyond superficial security checks to provide a comprehensive analysis of your code. Our 5-step audit methodology means we can provide a thorough and accurate assessment of your project's security.",
            iconClass: "card__img",
            className: "white-card",
            subClass: "img--row-card"
        },
        {
            id: 4,
            icon: img11,
            title: "A team you can trust",
            content: "Our team are committed to maintaining the highest standards of professionalism and integrity. We're confident in our ability to provide accurate and reliable security audits that you can trust.",
            iconClass: "card__img",
            className: "white-card",
            subClass: "img--row-card"
        }
    ]
}