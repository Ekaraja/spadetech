import icon1 from "../assets/icons/icon1.svg"
import icon2 from "../assets/icons/icon2.svg"
import icon33 from "../assets/icons/icon33.svg"

function Services() {
    return ( 
        <section class="container services">
        <h2 class="section__title">Our services</h2>
        <p class="section__desc">We make it easy for users to use our platform</p>

        <div class="services__container">
            <article class="service card">
                <div class="card__body">
                    <div class="service__icon">
                        <img src={icon1} alt=""/>
                    </div>
                    <h4>Security Audit</h4>
                    <p>
                        Providing affordable, comprehensive smart contract audits that ensure the safety of your
                        project.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>

            <article class="service card">
                <div class="card__body">
                    <div class="service__icon">
                        <img src={icon2} alt=""/>
                    </div>
                    <h4>Blockchain Development</h4>
                    <p>
                        We work with you to understand your business needs and develop a bespoke solution that meets
                        your
                        requirements.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>

            <article class="service card">
                <div class="card__body">
                    <div class="service__icon">
                        <img src={icon33} alt=""/>
                    </div>
                    <h4>Blockchain Consulting</h4>
                    <p>
                        Launch your project with confidence. We can come onboard at any stage during the project
                        lifecycle
                        and assist with strategy, planning, and execution.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>
        </div>
    </section>
     );
}

export default Services;