import Link from "next/link"

export default function Footer1() {
    return (
        <>
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-y">
            {/* <img src="assets/images/shapes/footer-shape-1.png" alt="" /> */}
            </div>
            <div className="site-footer__top">
            <div className="container">
                <div className="site-footer__top-inner">
                <div className="row">
                    <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                    >
                    <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__logo">
                        <Link href="/">
                            <img
                            src="./assets/images/allimgs/Delco Logo White.png" alt=""  style={{height:'70px'}}/>
                        </Link>
                        </div>
                        <p className="footer-widget__about-text">
                        It is a long established fact that a reader Empowering
                        Communities
                        </p>
                        <ul className="footer-widget__about-contact list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-envolop email-icon"   style={{color:'#F39F1B'}}/>
                            </div>
                            <p>
                            <Link href="mailto:info@delcoarabia.com">
                            info@delcoarabia.com

                            </Link>
                            </p>
                        </li>
                        {/* <li>
                            <div className="icon">
                            <span className="icon-location location-icon" />
                            </div>
                            <p>Ibn Al-Jawazi St. Makkah Al Mukarama Road, Al-Jubail Industrial City 35514, Kingdom of Saudi Arabia</p>
                        </li> */}
                        <li>
                            <div className="icon">
                            <span className="icon-call phone-call"  style={{color:'#F39F1B'}}/>
                            </div>
                            <p>
                            <Link href="tel:966 55 592 3198 
">+966 55 592 3198 

                            </Link><br/>
                            <Link href="tel:966 58 176 5070 
">+966 58 176 5070 

                            </Link>
                            </p>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                    >
                    <div className="footer-widget__column footer-widget__company">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Useful links</h3>
                        </div>
                        <ul className="footer-widget__company-list list-unstyled">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        
                        <li>
                            <Link href="/services">Service</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                    >
                    <div className="footer-widget__column footer-widget__services">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Services</h3>
                        </div>
                        <ul className="footer-widget__services-list list-unstyled">
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Manpower Supply General
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Specialized Crew Supply

                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Specialized Equipment Supply

                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Equipment Rental Services

                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Vehicle Rental Services

                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                            <span className="icon-angle-left"   style={{color:'#F39F1B'}}/>
                            Specialized In Oil & Gas, Marine, Industrial Material And Mechanical Fabrication Works
                            </Link>
                        </li>
                   
                      
                       
                      
                        </ul>
                    </div>
                    </div>
                    {/* <div
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                    >
                    <div className="footer-widget__column footer-widget__newsletter">
                        <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Newslatter</h3>
                        </div>
                        <p className="footer-widget__newsletter-text">
                        Financial planners help people to gain knowledge aboutw
                        </p>
                        <form
                        className="footer-widget__newsletter-form mc-form"
                        data-url="MC_FORM_URL"
                        noValidate="novalidate"
                        >
                        <div className="footer-widget__newsletter-form-input-box">
                            <input
                            type="email"
                            placeholder="Your e-mail"
                            name="EMAIL"
                            />
                            <button
                            type="submit"
                            className="footer-widget__newsletter-btn"
                            >
                            <span className="icon-paper-plane" />
                            </button>
                        </div>
                        </form>
                        <div className="mc-form__response" />
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
            </div>
            <div className="site-footer__bottom">
            <div className="container">
                <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                    © Delco Arabia 2025 |Site Created By
                    <a href="https://mscreation.tech/" style={{color:"#F39F1B"}}> Ms Creation</a>
                </p>
                <div className="footer-widget-two__social">
                            <Link href="#">
                            <span className="icon-instagram" />
                            </Link>
                            <Link href="#">
                            <span className="icon-facebook-f" />
                            </Link>
                            <Link href="#">
                            <span className="icon-Vector" />
                            </Link>
                            <Link href="#">
                            <span className="icon-linkedin-in" />
                            </Link>
                        </div>
                </div>
               
            </div>
            </div>
        </footer>
        {/*Site Footer End*/}
        </>
    )
}
