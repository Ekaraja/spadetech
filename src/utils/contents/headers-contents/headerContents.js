import header1 from "../../../assets/img/header1.svg"
import header2 from "../../../assets/img/header2.svg"
import header3 from "../../../assets/img/header3.svg"
import hero from "../../../assets/img/SpadeTech.gif"



// HOME PAGE //
export const homeHeader = {
    title : <h1 className="home-header">Bringing <span className="hightlight">blockchain</span> to life</h1>,
    content: "Offering security, blockchain development and consulting services, Spadetech is the go-to blockchain development agency.",
    img: hero,
    homeHeader: true,
}


// SECURITY PAGE //
export const securityHeader = {

    title : <h2>The expertise you need to launch your <span className="hightlight">blockchain</span> project</h2>,
    content : "Launch your project with confidence. We can come onboard at any stage during the project lifecycle and assist with strategy, planning, and execution.",
    img: header3,
    url: "SERVICES / SECURITY-AUDIT"
}


// DEVELOPMENT PAGE //
export const developmentHeader = {

    title : <h2>Your <span className="hightlight">blockchain</span> project brought to life</h2>,
    content : "We work with you to understand your business needs and develop a bespoke solution that meets your requirements.",
    description : "From developing smart contracts to building decentralised applications (dApps), our team of experienced blockchain developers can help you bring your project to life. We've got a stellar track record, too, and have delivered on multiple platforms from ERC 20-based tokens to NFT games and DAOs.",
    img : header2,
    url: "SERVICES / DEVELOPMENT",
    extra: true
}


// CONSULTANCY PAGE //
export const consultancyHeader = {

    title : <h2>The expertise you need to launch your <span className="hightlight">blockchain</span> project</h2>,
    content : "Launch your project with confidence. We can come onboard at any stage during the project lifecycle and assist  with strategy, planning, and execution.",
    img : header1,
    url: "SERVICES / CONSULTANCY"
}


// ABOUT PAGE //
export const aboutHeader = {
    title: <h2>SpadeTech is a market-leading blockchain technology company.</h2>,
    content: "From developer tools to enterprise solutions, Spadetech is building Ethereum blockchain infrastructure and applications for new economic systems that are more open, efficient, and secure.",
}