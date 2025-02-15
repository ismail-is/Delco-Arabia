'use client'
import Breadcrumb from "@/components/layout/Breadcrumb"
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
              <Layout >
              <Breadcrumb breadcrumbTitle="SERVICES" page="service" />

<div>
    {/*Project Details Start*/}
    <section className="project-details">
        <div className="container">
        <div className="row">
            <div className="col-xl-2">
          
            </div>
            <div className="col-xl-12">
            <div className="project-details__right">
            <h2 className="section-title__title" style={{color:'#030C4D',marginBottom:'20px'}}>
         Manpower <span style={{color:'#F39F1B'}}>Supply General</span>  

                </h2>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/first.webp"
                    alt=""
                />
                </div>
                <h5 className="project-details__title-1">
                Reliable Manpower, Guaranteed Performance!
                </h5>
              
               

                <div className="project-details__img-box">
                <div className="row">
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Mechanical Engineers
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Civil Engineers
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Piping Engineers
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>QA/QC Engineers/Inspectors
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Instrument Engineers
                    </p>
                </li>
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Site Supervisors

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Painting Supervisors

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Planning and Costing Engineer

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Rotating Equipment Engineers

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Project Equipment Engineers

                    </p>
                </li>
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Technical Secretaries

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Executive Secretaries


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Accountants

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Document Controllers


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Pipe Fitter


                    </p>
                </li>
                </ul>
                    </div>
                    
                   
                </div>
                </div>
                <div className="project-details__img-box">
                <div className="row">
                <div className="col-xl-4" >
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Steel Erector


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Scaffolder


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Hydro-jetter


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>System Administrators



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>IT Engineers



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Skilled Labors






                    </p>
                </li>
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Computer Operator



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Project Controllers



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Schedulers


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Safety Engineer/Supervisors/Officers




                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Painting/Coating Inspectors




                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Riggers






                    </p>
                </li>
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Fabricators (Piping & Structural)



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Operator's (Crane, Forklift, etc.)




                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Semi-skilled Labors



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Mechanical Helpers





                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Welding Inspectors





                    </p>
                </li>
              
             
                </ul>
                    </div>
                </div>
                </div>





                <div className="project-details__img-box">
                <div className="row">
                    <div className="col-xl-6">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/1-2.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/1-3.webp"
                        alt=""
                        />
                    </div>
                    </div>
                </div>
                </div>
              
            </div>
            </div>
        </div>
        </div>
    </section>
    {/*Project Details End*/}


{/* 2 */}
<section className="why-choose-one" style={{marginBottom:'200px',marginTop:'-200px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{color:'#030C4D'}}>
                        Specialized <span style={{color:'#F39F1B'}}>Crew Supply</span> 

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        DELCO Have specialized Crew for Execute the Mega Projects for Mechanical , Coating , E & I and Civil Crews.

                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/2.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
{/* 2 */}
   
{/* 3 */}

<section className="why-choose-one" style={{marginBottom:'200px',marginTop:'-130px'}}>
                <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/3.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{color:'#030C4D',marginTop:'20px'}}>
                        Specialized <span style={{color:'#F39F1B'}}> Equipment Supply</span>  

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        DELCO Capable to Modify and Supply Specialized Equipment for Long Term Project. Our extensive staff of experienced technicians, you can be assured that the equipment will remain reliable and well supported.


                        </p>

                        <div className="project-details__img-box">
                <div className="row">
                <h4>Specialized Equipment List As follows:
                </h4>
                    <div className="col-xl-12" style={{marginTop:'10px'}}>
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Fire Truck

                    </p>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Ambulance

                    </p>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Mobile Clinic

                    </p>
                </li>
              
               
               
                </ul>
                    </div>
                    <div className="col-xl-6" style={{marginTop:'15px'}}>
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Mobile Toilet


                    </p>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Mist Fan


                    </p>
                </li>
               
             
               
                </ul>
                    </div>
                    
             
                    
                   
                </div>
                </div>
                    </div>
                    </div>
                    
                </div>
                </div>
            </section>
{/* 3 */}



{/* 4 */}
<section className="why-choose-one" style={{marginBottom:'200px',marginTop:'-130px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{color:'#030C4D',marginTop:'-30px'}}>
                        Equipment <span style={{color:'#F39F1B'}}>Rental Services</span>  


                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        We are one of the most reputed equipment hire companies in the Kingdom with a large and ever expanding fleet of heavy and light equipment. And with our extensive staff of experienced technicians, you can be assured that the equipment will remain reliable and well supported. DELCO maintains a  comprehensive inventory of heavy and light equipment such as various size of Cranes, Forklifts Dozers, Graders, Trailers, Vacuum tankers, High pressure water jetting machines, Loaders, Man lift, Light & Heavy Vehicles and Paint units, Sledge pumps, Pneumatic and Hydraulic impact tools, Pipe cutters and various miscellaneous equipment.


                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/4.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>


                    {/* img */}
                    <div className="project-details__img-box" style={{marginTop:'30px'}}>
                <div className="row">
              
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/1.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/2.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/3.webp"
                        alt=""
                        />
                    </div>
                    </div>
                   
                </div>
</div>
                    <div className="project-details__img-box" style={{marginTop:'30px'}}>
                <div className="row">
              
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/4.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/5.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/more/6.webp"
                        alt=""
                        />
                    </div>
                    </div>
                   
                </div>
</div>
       {/* img */}
                </div>
                </div>
            </section>
{/* 4*/}


{/* 5 */}
<section className="why-choose-one" style={{marginBottom:'150px',marginTop:'-130px'}}>
                <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/5.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{color:'#030C4D',marginTop:'30px'}}>
                        Vehicle <span style={{color:'#F39F1B'}}>Rental Services</span>  

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Our company offers fantastic vehicles to make your journey comfortable. If you are looking for a rental car, bus, pickup or any other vehicle, let us know. We’re here for customer satisfaction and strive to offer a wide variety of services to better meet our customers’ needs. We offer numerous models suitable for any taste or style and at a price that you can’t beat. We service a wide area across all of Saudi Arabia and offer only exceptional customer service. Our aim is to satisfy every customer and your no exception.

                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    
                </div>
                </div>
            </section>
            
{/* 5 */}




{/* 6 */}

<section className="why-choose-one" style={{marginBottom:'240px',marginTop:'-130px'}}>
                <div className="container">
                <div className="row">
                <div className="col-xl-12">
            <div className="project-details__right">
            <h3 className="section-title__title" style={{color:'#030C4D',textAlign:'center'}}>
            SPECIALIZED IN OIL & GAS, MARINE, <span style={{color:'#F39F1B',textAlign:'justify',textJustify:'inter-word'}}>INDUSTRIAL MATERIAL AND MECHANICAL FABRICATION WORKS</span>  
                </h3>
           
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/6-1.webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
                 <h3 className="project-details__title-1">
            MECHANICAL VALVES  AND FITTINGS

                </h3>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}> All kind of mechanical valves, CS and SS steel pipes and fittings, butt weld fittings, flanges and
branches
</p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Material Type:</span>Carbon Steel | Stainless Steel | Brass | Bronze | Cast Iron | Special Alloy
Industry Standards: ASTM | ANSI | API 600 | API 603 | API 598 | ASME B16.34 | B16.5 | B16.10 | MSSSP-25
 </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Pressure Class:</span>150 | 300 | 600 | 800 | 1500 | 1690 | 2500 | 2680 | 4500 </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Valve Types :</span>Ball Valves, Check Valves, Gate Valves, Globe Valves, Butterfly Valves, Flush Bottom Valves,
                Balancing Valves, Pressure releasing Valves, Angle Valve, Needle Valve</p>

                <div className="project-details__img-box">
                <div className="row">
                      <h6 className="blog-details__title-2" style={{marginTop:'-10px'}}>
                      Flanges

                </h6>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Slip on Flanges 
                    </p>
                </li>
              
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>  Blind Flanges
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Socket Weld Flanges
                    </p>
                </li>
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Weld Neck Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Threaded Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Screwed Flanges 
                    </p>
                </li>
              
                
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Nipo Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Flanged Expansion Joints


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Flanged Rubber Bellows

                    </p>
                </li>
               
               
                </ul>
                    </div>
                    
                   
                </div>
                </div>
            
              
            </div>
            </div>
                    



            <div className="col-xl-12" style={{marginTop:'20px'}}>
            <div className="project-details__right">
            <h3 className="project-details__title-1">
            Pipes and Fittings

                </h3>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/6-2.webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
              
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Carbon Steel Seamless Pipes & Tubes:</span>ASTM/ASME (A53 GR. B, A106GR B, A333 GR.6), APl5L (Gr.B,
X42/46/52/56/60/65/70/75-PSL 1 & PSL2)
SA (179, 192, 210, 213), DIN (2391, 1629, 17100), BS (3059),P235TR1, etc. -
IBR/NIBR,
</p>
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Size Range:</span>¼" NB to 28" NB</p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Galvanized (GI) Pipes & Mild Steel (MS) ERW Pipes:</span>As per IS1239 Part1-Class A(Light), Class B(Medium), Class C (Heavy) Size
                Range:½" NBto6"NB. As per IS 3589 -Fe330/Fe410&APl5L GR. B -ERW, HSAW, LSAW, DSAW,
                </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Size Range:</span>7" NB to 80" NB.  </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Alloy Steel Seamless Pipes & Tubes:</span>ASTM/ASME NSA335, GR, P1, P2, P5, P9, P11, P12, P22, P91 & SA213, T5, T9,
                T11, T22, T91, Etc-I BR & NIBR. </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Size Range:</span>¼ NB to 28" NB </p>
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Stainless Steel Seamless & ERW Pipes & Tubes: </span>ASTM/ASME/SA (312, 213, 269, 249) Grade 202, 304, 304H, 304L, 316, 304L,
316, 316H, 316L, 316TI, 309,310, 317L, 321, 347,904, 904L, 409, 409M,
410,420,430,446, Etc.  </p>
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Size Range:</span>SEAMLESS 1/4" NB to 28"NB, ERW: ¼" NB to 80" NB </p>
                {/* <div className="project-details__img-box">
                <div className="row">
                      <h6 className="blog-details__title-2">
                      Flanges

                </h6>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Slip on Flanges 
                    </p>
                </li>
              
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>  Blind Flanges
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Socket Weld Flanges
                    </p>
                </li>
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Weld Neck Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Threaded Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Screwed Flanges 
                    </p>
                </li>
              
                
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Nipo Flanges

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Flanged Expansion Joints


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Flanged Rubber Bellows

                    </p>
                </li>
               
               
                </ul>
                    </div>
                    
                   
                </div>
                </div> */}
            
              
            </div>
            </div>


{/* pdf page 4 */}

<section className="why-choose-one" style={{marginBottom:'40px',marginTop:'50px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title">
                        Butt Weld Fitting 

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        <span style={{color:'#030C4D'}}>Stainless Steel:</span>
                        ASTM A403
WP304/304U304H/316/316U317 /3171/321/310/347 /904L etc. Carbon Steel: ASTM
A234 WPB/ A420 WPL3/A420 WPL6/ MSSSP-75 WPHY 42/46/52/56/60/65/70 
                        </p>
                        <p className="why-choose-one__text">
                        <span style={{color:'#030C4D'}}>Alloy Steel:</span>
                        ASTM A234 WP1/WP5/WP9/WP11/WP22/WP91 etc. Others: Monel, Nickel,
lnconel, Hastalloy, Copper, Brass, Bronze, Titanium, Bismuth, Aluminium, High
Speed Steel, Zinc, Lead etc. Types: Elbow, Tee, Reducer, Return, Bends, Stub-Ends,
Cap, Collar, Cross, Insert etc. 
                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-3.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>




            <section className="why-choose-one" style={{marginBottom:'20px',marginTop:'20px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title">
                        Screwed and Forged Fittings 

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        <span style={{color:'#030C4D'}}>Stainless Steel:</span>
                        ASTM A 182 F304/304U304H/316/316U317 /321/ 310/34 7 /904L etc.
Carbon Steel: ASTM A105/ A694 F42/46/52/56/60/65/70/ A350LF3/ A350LF2.
Alloy Steel: ASTM A 182 F1/F5/F9/F11/F22/F91 etc.  
                        </p>
                        <p className="why-choose-one__text">
                        <span style={{color:'#030C4D'}}>Others:</span>
                        Monel, Nickel, lnconel, Hastalloy, Copper, Brass, Bronze, Titanium, Tantalum,
Bismuth, Aluminium, High Speed Steel Zinc, Lead etc.
Types: Elbow, Tee, Union, Cross, Coupling, Cap, Bushing, Plug, Swage, Nipple,
Welding Boss, Hexagon Nipple, Barrel Nipple, Welding Nipple, Parraler Nipple,
Street Elbow, Hexagon Nut, Hose, Nipple, Bend, Adapter, Insert, Weldolet, Elbowlet,
Sockolet, Threadolet, Ni pol et, Letrolet etc<br/>
<span style={{color:'#030C4D'}}>Size:</span>¼" NB TO 4" NB (Socketweld & Threaded)<br/>
<span style={{color:'#030C4D'}}>Class:</span>3000#, 6000#, 9000#
                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-4.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
{/* pdf page 4 */}

{/* pdf page 5 */}
<div className="col-xl-12">
            <div className="project-details__right">
            <h3 className="project-details__title-1">
           Plates

                </h3>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/6-5.webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
                
               
                
                <p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Carbon Steel :</span>
                : IS 2062 Gr NB, ASTM, A36, SS400, IS 2062 CuWc, IS -
2062 E 250 A (Fe 41 Ow A), E 250 B (Fe 41 OW B), E 300 (Fe 440), E
350(Fe 490), E 41 O(Fe 540), E 450, S355JR, S275JR.
Boiler Quality : ASTM A 515 Grade 55, 60, 65, 70 ASTM A515 Grade 60,
65, 70
</p>
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Alloy Steel :</span>ASTM / ASME N SA 387 Gr. 2,5,9, 11, 12,22,91-CL. 1/2/3</p>   
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Forged Plates :</span> F2, F5, F9, F11, F12, F22, F91</p>   
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Stainless Steel :</span>ASTM A240 Grade 201, 202, 301, 301 LN, 304, 304LN,
304H, 309, 309, 309S, 31 OS, 31 OL, 31 OH, 316, 316L, 316LN, 316H, 316Ti,
321, 321H, 347, 347H, 317L, 317LN, 409, 409M, 409S, 410, 410S, 420, 430,
431, 309, 309S, 309H, 310, UNS S31000,310S,UNSS31008,310H,UNS
S31009,310S- Co Rolled, Hot Rolled. Carten NB, Hadox, Abrex,
Abrasion / Wear Resistant & High Manganese Steel Plates.</p>   
<p className="why-choose-one__text" style={{marginTop:'20px'}}><span style={{color:'#030C4D'}}>Aluminum Alloys & Extrusion :</span> AA 2014, 2017, 2024, 3003, 5052,
5086, 5083, 6061, 6061 T6, 6063, 6063 T6, 6066, 6101, 6351, 6082, 7010,
7018, 7075, 55000, 54300
EN Series, Titanium, lnconel, Monel, lncoloy, Hastelloy, Nickel Alloy,
Duplex & Super Duplex, BRASS, Gunmetal, Phosphor Bronze</p> 


<div className="project-details__img-box">
                <div className="row">
                
                    <div className="col-xl-6">
                    <h3 className="project-details__title-1">
                Round and Flat Bar 
 

                </h3>
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-6.webp"
                        alt=""
                        />
                          <h3 style={{textAlign:'center',margin:'10px'}}>Stainless Steel and Carbon Steel Round Bar<br/>Stainless Steel and Carbon Steel Flat Bar</h3>
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <h3 className="project-details__title-1">
                    Gratings
 

                </h3>
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-7.webp"
                        alt=""
                        />
                          <h3 style={{textAlign:'center',margin:'10px'}}>Galvanized Gratings<br/>FRP Gratings</h3>
                    </div>
                    
                    </div>
                  
                    <section className="why-choose-one" style={{marginBottom:'40px',marginTop:'30px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title">
                        Fastener, Nuts and Bolts

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Stud Bolt | Anchor Bolt| Collar Bolts | Bonnet Bolts | CS washer | SS Washer
All varieties of fasteners, nuts, bolts and solutions

                        </p>
                        <p className="why-choose-one__text">
                        Stainless & Duplex Steel | Carbon & Alloy Steel | Nickel and Copper Alloy |
                        Hastelloy | Inconel | Incoloy | Monel | Titanium

                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-8.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="why-choose-one" style={{marginBottom:'10px',marginTop:'30px'}}>
                <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-9.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{marginTop:'25px'}}>
                        Plastic Valves And Fittings

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Wide range of Plastic PVC / CPVC Pipe Fittings and Valves
Valves: Ball Valves | 3-way Ball Valves | Lab Valves | Industrial Swing Check
Valves | Utility Swing Check Valves | Ball Check Valves | Diaphragm Valves |
Gate Valves | Globe Valves | Needle Valves | Butterfly Valves |High Purity
Butterfly Valves | Actuated Valves
                        </p>
                        <p className="why-choose-one__text">
                        Fittings Types: PVC Sch.40 & SCh.80 | CPVC Sch.80 | CPVC Copper Tube Size
| PVC & CPVC Special Reinforced (SR) Fittings & Adapters | PVC & CPVC
Clamp On Saddles | PVC & CPVC Tank Adapters | PVC Insert Fittings | CPVC
Fire Sprinkler Fittings
                        </p>
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                  
                </div>
                </div>
            </section>
                </div>
</div>
              
            </div>
            </div>
{/* pdf page 5 */}

{/* pdf page 6 */}
<div className="col-xl-12" >
            <div className="project-details__right">
            <h3 className="project-details__title-1">
            Instrumentation and Fittings

                </h3>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/6-10.webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
                
               
                
                <p className="why-choose-one__text" style={{marginTop:'20px'}}>Full range of instrumentation products, hardware and fittings </p>
                <p className="why-choose-one__text" style={{marginTop:'20px',fontWeight:'bold'}}>Tube Fitting Double Ferrules | Weld Fittings |
Pipe Fittings | Instrumentation Valves |
Instrumentation Hardware
 </p>

 <div className="project-details__img-box">
                <div className="row">
                {/* <h4>Specialized Equipment List As follows:
                </h4> */}
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Union Tee

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Male Connector NPT


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Reducing Union

                    </p>
                </li>
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Bulk-Head Union


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Male Elbow NPT


                    </p>
                </li>
             
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Pressure Temperature Gauges


                    </p>
                </li>
             
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Back Ferrule


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Front Ferrule


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Copper Tubes and Fittings

                    </p>
                </li>
               
               
                </ul>
                    </div>
                    
             
                    
                   
                </div>
                </div>


<div className="project-details__img-box">
                <div className="row">
                
                    <div className="col-xl-6">
                    <h3 className="project-details__title-1">
                    Welding Solutions 
 

                </h3>
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-11.webp"
                        alt=""
                        />
                           <div className="project-details__img-box">
                <div className="row">
              
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Welding Discs

                    </p>
                </li>
                
               
               
                </ul>
                    </div>
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Welding Rods 


                    </p>
                </li>
               
             
               
                </ul>
                    </div>
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Welding Consumables 


                    </p>
                </li>
              
             
               
                </ul>
                    </div>
                    
             
                    
                   
                </div>
                </div>
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <h3 className="project-details__title-1">
                    Coating Solution

 

                </h3>
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-12.webp"
                        alt=""
                        />
                         <div className="project-details__img-box">
                <div className="row">
              
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Coating Paints

                    </p>
                </li>
               
              
               
                </ul>
                    </div>
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Sand Blasting Material


                    </p>
                </li>
                
             
               
                </ul>
                    </div>
                    <div className="col-xl-6">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Coating Consumables


                    </p>
                </li>
              
             
               
                </ul>
                    </div>
                    
             
                    
                   
                </div>
                </div>
                    </div>
                    
                    </div>
                  
                    <section className="why-choose-one" style={{marginBottom:'40px',marginTop:'30px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title">
                        Clamps And Hangers

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Wide varieties of clamps and hangers
Split Clamps | Rubber Hanger | Clevis Hangers | Heavy Duty
Saddles | Sprinkler Hangers | Mounting Angles | Slotted Base &
Slotted Strip | U – Bolts | Electric Junction Flush Boxes | Fastners
& Base U Clamp | Sliding Pipe Support | Saddle Support | C
Channels | Rail Nuts | Double Pipe Hanger with EPDM Lining

                        </p>
                       
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-13.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="why-choose-one" style={{marginBottom:'10px',marginTop:'30px'}}>
                <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-14.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title" style={{marginTop:'25px'}}>
                        Mechanical And Power Tools

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Wide range of mechanical and power tools
Cordless XR Lithium | XR Combo Kits | Construction
Instruments | Drilling and Screw Driving | Hammers | Vices |
Spanners | Wrenches | Building Tools | Allen Keys | Pliers |
Sockets
                        </p>
                        
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                  
                </div>
                </div>
            </section>
                </div>
</div>
              
            </div>
            </div>
{/* pdf page 6 */}


{/* pdf page 7 */}

<section className="why-choose-one" style={{marginBottom:'40px',marginTop:'30px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        {/* <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div> */}
                        <h2 className="section-title__title">
                        Industrial Ventilation Solution

                        </h2>
                        </div>
                        <div className="project-details__img-box">
                <div className="row">
              
                    <div className="col-xl-10">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Centrifugal Down Blast Exhaust Fan

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Centrifugal Up Blast Exhaust Fan


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Centrifugal Roof Exhaust Fan

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Tube Axial inline Fan

                    </p>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Vane Axial Fan

                    </p>
                </li>
                
               
                </ul>
                    </div>
                
                  
                    
             
                    
                   
                </div>
                </div>
                       
                        {/* <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
                            Read more
                            <span />
                        </Link>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src="./assets/images/allimgs/servicepage/6-15.webp"
                            alt=""
                        />
                       
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <div className="col-xl-12">
            <div className="project-details__right">
            <h3 className="project-details__title-1">
            General Trading

                </h3>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/General .webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
                
               
                
                

 <div className="project-details__img-box">
                <div className="row">
                {/* <h4>Specialized Equipment List As follows:
                </h4> */}
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
               
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Industrial Solvents Industrial degreasers


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Rust Remover

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Lubricant Oil & Greases 

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Air Conditioner and Coil Cleaner

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Heat Exchangers and Cooling Tower Cleaner

                    </p>
                </li>
                </ul>
                    </div>
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Solar Speed Radar


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Speed Gun


                    </p>
                </li>
             
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Oil Absorbent pad and Rolls


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Pipe Cutting and Beveling Tools

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Spill Pallets


                    </p>
                </li>
             
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                        
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Measuring Tools



                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Hand Tools


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Power Tools

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Conical and Basket Strainers
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Gasket O-rings and Compression Packing

                    </p>
                </li>
               
               
                </ul>
                    </div>
                    
             
                    
                   
                </div>
                </div>



              
            </div>
            </div>
{/* pdf page 7 */}

{/* pdf page 8 */}


<div className="project-details__img-box" style={{marginBottom:'-50px'}}>
                <div className="row">
                <h3 className="project-details__title-1">
                Mechanical Fabrication

 

                </h3>
                    <div className="col-xl-12">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-17.webp"
                        alt=""
                        />
                    </div>
                    </div>
                  
                  
                    
                </div>
</div>

<div className="project-details__img-box" >
                <div className="row">
                <h3 className="project-details__title-1">
                Structural Steel Fabrication
 

                </h3>
                    <div className="col-xl-6">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-18.webp"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/6-19.webp"
                        alt=""
                        />
                    </div>
                    </div>
                  
                    
                </div>
</div>
<div className="project-details__img-box" style={{marginTop:'-30px'}}>
                <div className="row">
                <h3 className="project-details__title-1">
                Spools and Supports
 

                </h3>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/Piping .webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>Piping Spool</h3>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/PipeSupport.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>Pipe Support</h3>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/Pipe Clamps.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>Pipe Clamps</h3>
                    </div>
                    </div>
                    
                </div>
</div>

<div className="project-details__img-box" style={{marginTop:'-30px'}}>
                <div className="row">
                <h3 className="project-details__title-1">
                Pipe Clamps 

                </h3>
                    <div className="col-xl-3">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/ShoeClamp.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>Shoe Clamp</h3>
                    </div>
                    </div>
                    <div className="col-xl-3">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/SaddleClamp.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>Saddle Clamp </h3>
                    </div>
                    </div>
                    <div className="col-xl-3">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/Utraps.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>U-Traps</h3>
                    </div>
                    </div>
                    <div className="col-xl-3">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/servicepage/Ubolt.webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>U-Bolt</h3>
                    </div>
                    </div>
                </div>
</div>
{/* pdf page 8 */}

{/*PDF page 9 */}
<div className="col-xl-12">
            <div className="project-details__right">
            <h3 className="project-details__title-1">
            Structural Steel Works

                </h3>
                <div className="project-details__img">
                <img
                    src="./assets/images/allimgs/servicepage/structuralsteel .webp"
                    alt=""
                />
                </div>
                {/* <h6 className="blog-details__title-2">
                Reliable Manpower, Guaranteed Performance!
                </h6> */}
                
               
                
                <div className="project-details__img-box">
                <div className="row">
                     
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Pipe Racks
                    </p>
                </li>
              
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Saddle, Pipe Supports
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Equipment Structures
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Derrick (Flare) Structure
                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Grating, Handrail, Checkered Plate
                    </p>
                </li>
               
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    Platforms

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Steel Buildings and Shelters

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Commercial Building Structure

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Miscellaneous Steel Structure

                    </p>
                </li>
              
                
                </ul>
                    </div>
                    <div className="col-xl-4">
                    <ul className="project-details__points list-unstyled">
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>
                    High-Rise Building Structure

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Boiler Structure


                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p> Sports Stadium Structure

                    </p>
                </li>
                <li>
                    <div className="icon">
                    <span className="icon-dabble-arrow" />
                    </div>
                    <p>Heavy Special Fabrication

                    </p>
                </li>
               
               
                </ul>
                    </div>
                    
                   
                </div>
                </div>
            
              
            </div>
            </div>
{/*PDF page 9 */}


                </div>
                </div>
            </section>

{/* 6 */}















    {/*CTA One Start*/}
    {/* <section className="cta-one">
        <div className="container">
        <div className="cta-one__inner">
            <div
            className="cta-one__bg-img"
            style={{
                backgroundImage: "url(./assets/images/allimgs/contactpage/footer.webp)"
            }}
            />
            <div className="cta-one__content-box">
            <div className="cta-one__icon">
                <span className="icon-call" />
                <div className="cta-one__shape-1">
                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
                </div>
            </div>
            <h3 className="cta-one__title">
                Need any help?
                <br /> contact us!
            </h3>
            <div className="cta-one__contact-box">
                <div className="icon">
                <span className="icon-phone" />
                </div>
                <div className="content">
                <p>Need help?</p>
                <h3>
                    <Link href="tel:966 55 592 3198 
">+966 55 592 3198 
</Link>
                </h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section> */}
    <Cta/>
    {/*CTA One End*/}

    
</div>


</Layout>
        </>
    )
}