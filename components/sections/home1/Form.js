"use client";

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value; // FIXED: Changed from "text" to "subject"
        const message = event.target.message.value;

        const whatsappNumber = "966555923198"; // FIXED: Removed spaces and "+"
        const textMessage = `Hello,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

        console.log("WhatsApp Message:", textMessage); // Debugging

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
        
        window.open(whatsappURL, "_blank");
    };

    return (
        <>
            <section className="contact-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="contact-two__left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline">Contact</span>
                                    </div>
                                    <h2 className="section-title__title">Get In Touch Here</h2>
                                </div>
                                <form className="contact-form-validated contact-two__form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-two__input-box">
                                                <input type="email" name="email" placeholder="E-mail" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="contact-two__input-box">
                                                <input type="text" name="subject" placeholder="Subject" required /> {/* FIXED */}
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-two__input-box text-message-box">
                                                <textarea name="message" placeholder="Message" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-two__btn-box">
                                                <button type="submit" className="thm-btn contact-two__btn">
                                                    Submit Now <span />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result" />
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact-two__right">
                                <div className="contact-two__img">
                                    <img src="./assets/images/allimgs/contactpage/contact .webp" alt="Contact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
