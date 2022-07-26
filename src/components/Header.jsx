import header from "../assets/icons/header.svg"
import ethereum from "../assets/icons/ethereum.svg"
import binance from "../assets/icons/binance.svg"
import solana from "../assets/icons/solana.svg"
import fantom from "../assets/icons/fantom.svg"
import starknet from "../assets/icons/starknet.svg"
import polygon from "../assets/icons/polygon.svg"
import img from "../assets/icons/img.svg"
import terra from "../assets/icons/terra.svg"

function Header() {
    return ( 
        <>
        <header class="container header__container">
        <div class="header__left">
            <h1>Bringing <span>blockchain</span> to life</h1>
            <p>
                Offering security, blockchain development and consulting services, Spadetech is the go-to blockchain
                development agency.
            </p>
            <button class="btn header__btn">GET STARTED</button>
        </div>
        <div class="header__right">
            <img src={header} alt="blockchain-header-img"/>
        </div>
    </header>
        <section class="container data__container">
        <ul class="data__list">
            <li><img src={ethereum} alt="ethereum-logo"/></li>
            <li><img src={binance} alt="binance-logo"/></li>
            <li><img src={solana} alt="solana-logo"/></li>
            <li><img src={fantom} alt="fantom-logo"/></li>
            <li><img src={starknet} alt="starknet-logo"/></li>
            <li><img src={polygon} alt="polygon-logo"/></li>
            <li><img src={img} alt="x-logo"/></li>
            <li><img src={terra} alt="terra-logo"/></li>
        </ul>
    </section>
    </>
     );
}

export default Header;