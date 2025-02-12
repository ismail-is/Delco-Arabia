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
  </section>
  {/*Brand One End*/}
</>

    )
}
