'use client'
import Link from "next/link"


export default function ServicesTwo() {
    
    return (
        <>
            {/*Services Two Start*/}
            <section className="services-two" style={{marginTop:'-200px'}}>
                <div className="container">
                <div className="section-title text-center">
                    {/* <div className="section-title__tagline-box">
                    <span className="section-title__tagline">lATEST sERVICE</span>
                    </div> */}
                    {/* <h2 className="section-title__title">
                    Your supply chain partner
                    <br /> the for success
                    </h2> */}
                </div>
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/vision.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        {/* <Link href="/express-freight-solutions"> */}
                        Vision
                        {/* </Link> */}
                        </h3>
                        <p className="services-two__text">
                        To be an Industry leader in Oil & Gas field in the region, to be an nnovative and sustainable partner
                        </p>
                    </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/policy.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        {/* <Link href="/speedy-dispatch"> */}
                        Our HSEQ Policy
                        {/* </Link> */}
                        </h3>
                        <p className="services-two__text">
                        Committed to top-tier HSE management with zero tolerance, DACO ensures stakeholder protection while delivering superior services that exceed client expectations.
                        </p>
                    </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/mission.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        {/* <Link href="/quick-move-logistics"> */}
                            {" "}
                            Mission
                        {/* </Link> */}
                        </h3>
                        <p className="services-two__text">
                        To deliver world class sustainable, integrated and Quality products & ervices
                        </p>
                        <p className="services-two__text">
                        Striving for Excellence in Technical enhancement and Daily operation

                        </p>
                        <p className="services-two__text">
                        Safe and Quality working environment to our employees, 100% customer satisfaction and stakeholder's happiness
                        </p>
                    </div>
                    </div>

                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/Quality.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        {/* <Link href="/quick-move-logistics"> */}
                            {" "}
                            Our Quality Policy
                        {/* </Link> */}
                        </h3>
                        <p className="services-two__text">
                        It is explicit policy of our company to provide service to customer and meet
their demanding expectation in confirm with highest standard and highest
quality. We have also a quality trend to monitor our quality effectiveness to
ensure the company function to determined company procedure and guidelines
                        </p>
                    </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
                </div>
            </section>
            {/*Services Two End*/}
        </>


    )
}
