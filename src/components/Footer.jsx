import logo from "../assets/icons/logo.svg"

function Footer() {
    return ( 
        <footer>
        <div class="footer__container">
            <div class="footer__left">
                <div class="footer__logo">
                    <a href="index.html" class="footer__logo">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <div class="footer__copyright">
                    <small>&copy; 2022 by Spade Tech. All Rights Reserved</small>
                </div>
            </div>
            
            <div class="footer__right">
                <div class="footer__1">
                    <h5>Services</h5>
                    <ul class="permalinks">
                        <li><a href="index.html">Blockchain Development</a></li>
                        <li><a href="about.html">Blockchain Security</a></li>
                        <li><a href="course.html">Blockchain Consultancy</a></li>
                    </ul>
                </div>

                <div class="footer__2">
                    <h5>Company</h5>
                    <ul class="privacy">
                        <li><a href="./">About</a></li>
                        <li><a href="./">Privacy Policy</a></li>
                        <li><a href="./">Cookie Policy</a></li>
                        <li><a href="./">Terms and Conditions</a></li>
                    </ul>
                </div>

                <div class="footer__3">
                    <h5>Socials</h5>
                    <ul class="footer__socials">
                        <li><a href="./">Telegram</a></li>
                        <li><a href="./">Youtube</a></li>
                        <li><a href="./">Medium</a></li>
                        <li><a href="./">LinkedIn</a></li>
                        <li><a href="./">Wechat</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
     );
}

export default Footer;