import transparent from "../assets/icons/transparent.svg"
import honest from "../assets/icons/honest.svg"
import secure from "../assets/icons/secure.svg"
import efficient from "../assets/icons/efficient.svg"

function Solutions() {
    return ( 
        <section class="solutions container">
        <h2 class="section__title">Our solution for your business</h2>
        <p class="section__desc">We make it easy for users to use our platform, that’s why we provide the benefit.</p>
        <div class="solutions__container">

            <article class="solution card">
                <div class="card__body">
                    <div class="solution__icon">
                        <img src={transparent} alt="transparent-icon"/>
                    </div>
                    <h4>Transparent</h4>
                    <p>
                        We're an open book. We believe in total transparency and will always keep you in the loop. We'll
                        be
                        completely open about any findings, regardless of whether they're good or bad.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>

            <article class="solution card">
                <div class="card__body">
                    <div class="solution__icon">
                        <img src={honest} alt="honest-icon"/>
                    </div>
                    <h4>Honest</h4>
                    <p>
                        We do things the right way. We're honest, reliable and always deliver on our promises. If we say
                        we're going to do something, we'll do it.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>

            <article class="solution card">
                <div class="card__body">
                    <div class="solution__icon">
                        <img src={secure} alt="secure-icon"/>
                    </div>
                    <h4>Secure</h4>
                    <p>
                        Our top priority is ensuring every project we audit is 100% secure for users. This means we'll
                        never
                        take shortcuts or overlook any potential vulnerabilities.
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>

            <article class="solution card">
                <div class="card__body">
                    <div class="solution__icon">
                        <img src={efficient} alt="efficient-icon"/>
                    </div>
                    <h4>Efficient</h4>
                    <p>
                        We move quickly and efficiently, without compromising on quality. We understand that time is
                        often
                        of the essence for many blockchain projects, so we'll always work to deliver re....
                    </p>
                </div>
                <a class="learn-more__btn" href="./">Learn More</a>
            </article>
        </div>
    </section>
     );
}

export default Solutions;