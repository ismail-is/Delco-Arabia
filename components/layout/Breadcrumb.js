import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, page }) {
    // Define background images for different pages
    const backgroundImages = {
        about: "./assets/images/allimgs/banner/ABOUT.webp",
        contact: "./assets/images/allimgs/contactpage/Contactbanner.webp",
        service: "./assets/images/allimgs/banner/services.jpg",
    };

    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${backgroundImages[page] || backgroundImages.about})`
                    }}
                ></div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>{breadcrumbTitle}</h2>
                        <div className="thm-breadcrumb__box">
                            {/* <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <span className="icon-angle-left" />
                                </li>
                                <li>{breadcrumbTitle}</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}
        </>
    );
}
