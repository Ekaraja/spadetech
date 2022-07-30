import icon1 from "../../../assets/icons/icon1.svg"
import icon2 from "../../../assets/icons/icon2.svg"
import icon33 from "../../../assets/icons/icon33.svg"

export const cardContent = [

    {
        id: 1,
        icon: icon1,
        title: "Security Audit",
        content: "Providing affordable, comprehensive smart contract audits that ensure the safety of your project.",
        iconClass: "service__icon",
        className: "col-card gray-card text-center",
        button: true,
        url:"/services/security-audit",
        subClass: "card__container"
    },
    {
        id:2,
        icon: icon2,
        title: "Blockchain Development",
        content: "We work with you to understand your business needs and develop a bespoke solution that meets your requirements.",
        iconClass: "service__icon",
        className: "col-card gray-card text-center",
        button: true,
        url:"/services/development",
        subClass: "card__container"
    },
    {
        id:3,
        icon: icon33,
        title: "Blockchain Consulting",
        content: "Launch your project with confidence. We can come onboard at any stage during the project lifecycle and assist  with strategy, planning, and execution.",
        iconClass: "service__icon",
        className: "col-card gray-card text-center",
        button: true,
        url:"/services/consultancy",
        subClass: "card__container"
    }
]

