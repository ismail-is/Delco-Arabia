import BrandSlider1 from '@/components/slider/BrandSlider1'
import CounterUp from "@/components/elements/CounterUp"
export default function Brand() {
    return (
        <>
  {/*Brand One Start*/}
  <section className="brand-one" style={{marginBottom:'140px',marginTop:'-30px'}}>
    <div className="container">
      {/* <h2 className="brand-one__text count-box">
      Our Clients {" "}
        <CounterUp end={40} />
        <span>+</span> 
      </h2> */}
      <h2 class="section-title__title" style={{textAlign:'center',margin:'20px'}}>Our Clients</h2>
      <BrandSlider1/>
    </div>

    <div className="project-details__img-box" style={{marginTop:'30px',margin:'30px',marginBottom:'-30px'}}>
                <div className="row">
                <h2 class="section-title__title" style={{textAlign:'center',margin:'20px'}}>Our  Projects  </h2>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/project/KAFD .webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>KAFD Project</h3>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/project/King .webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}>King Salman Park Project
                        </h3>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="project-details__img-box-img">
                        <img
                        src="./assets/images/allimgs/project/Qiddiya .webp"
                        alt=""
                        />
                        <h3 style={{textAlign:'center',margin:'10px'}}> Qiddiya Project
                        </h3>
                    </div>
                    </div>
                   
                </div>
</div>
  </section>
  {/*Brand One End*/}
</>

    )
}
