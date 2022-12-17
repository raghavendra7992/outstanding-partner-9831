import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import { AppContext } from '../context/AppContext';
import Banner from './Banner';
import Style from "./Home.module.css";
import ProductSlide from './ProductSlide';
import ProductSlide2 from './ProductSlide2';

const Home = () => {
const navigate=useNavigate()
    const {images,addItems1,addItems2,addItems3,addItems4,addItems5,addItems11,
      addItems6,addItems7,addItems8, addItems9, addItems10, bigarr}=useContext(AppContext)

      useEffect(() => {
        localStorage.setItem("bigarr",JSON.stringify(bigarr))
      }, [])
      
      
    return (
    <div>
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Boot-Up-ICICI-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmNS85ODYxNDY0NjIxMDg2LmpwZ3xmYzQzYzE3MTg1YTk5MjE5OWU4ZTE3ODYzNjU1ZmIxYzg1Mjc0YThjZmMyYWYxNGE2NjRmZjM2OTNkMTI5NDMx" alt="no"/>

        <Banner list={images}/>
        <br/>
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>BEST DEALS ON LATEST LAPTOPS  |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/laptops")}>VIEW ALL</h1>
        </div>
        
        <div style={{"width":"95%",margin:"auto"}}><ProductSlide list={addItems1} number={5}/></div>
        <br/><hr/><br/>
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>LOWEST PRICES ON SMALL APPLIANCES  |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/small_appliances")}>VIEW ALL</h1>
        </div><br/>
        <div style={{"width":"95%",margin:"auto"}}><ProductSlide list={addItems2} number={5}/></div>
        <br/><hr/>
        <br/><h1 className={Style.zz}>TOP BRANDS - WASHING MACHINE</h1><br/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
          {addItems3.map(e=><img src={e} alt="no"/>)}
        </div>
        <br/><h1 className={Style.zz}>OFFER YOU CANNOT MISS</h1><br/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"95%",margin:"auto"}}>
          {addItems4.map(e=><img src={e} alt="no"/>)}
        </div>
        <Banner list={addItems5}/>
        <hr/>
        <br/><h1 className={Style.zy}>EXPLORE OUR RANGE OF PRODUCTS</h1><br/>
        <div style={{"width":"95%",margin:"auto"}}><ProductSlide2 list={addItems6} number={5}/> </div> 
        <br/><h1 className={Style.zy} style={{color:"#1f4985"}}>THE RELIANCE DIGITAL BRAND PROMISE</h1><br/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
          {addItems7.map(e=>
          <div className={Style.sd}>
          <img src={e.img} alt="no" style={{backgroundColor:"#f5f5f5", width:"40px"}}/>
          <p>{e.h1}</p>
          <p>{e.h2}</p>
          </div>
          )}
        </div>
        <br/><hr/><br/>
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>LATEST SMARTPHONES  |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/smartphone")}>VIEW ALL</h1>
        </div>
        
        <div style={{"width":"95%",margin:"auto"}}><ProductSlide list={addItems11} number={5}/></div>
        <br/><hr/><br/>
        
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>SMARTWATCHES AT NEVER BEFORE PRICES  |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/smartwatches")}>VIEW ALL</h1>
        </div><br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <div >
            <img style={{height:"350px"}} src="https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE" alt='no'/>
          </div>
          <div style={{width:"70%"}}>
          <ProductSlide list={addItems8} number={4}/>
          </div>
        </div>
        <br/><hr/>
        <br/>
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>TOP SELLERS FROM TCL & IFFALCON |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/topsellers")}>VIEW ALL</h1>
        </div><br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <div style={{width:"70%"}}>
          <ProductSlide list={addItems9} number={4}/>
          </div>
          <div>
            <img style={{height:"350px"}} src="https://www.reliancedigital.in/medias/Top-seller-from-TCL-IFFALCON.jpg?context=bWFzdGVyfGltYWdlc3wxNTY1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hmNS85ODU5NzA0Njg0NTc0LmpwZ3w5ZTg5YzdmNDlkZTAzY2YyZjY1NzY4NzA3MGFjMzJlZTkyNTIyZGJmY2U0NjMxN2E3NWVkODM3NTI0ZDIzYWI1" alt='no'/>
          </div>
        </div>
        <br/><hr/><br/>
        <div style={{display:"flex",alignItems:"baseline"}}>
        <h1 className={Style.zz}>LATEST TABLET LAUNCHES |</h1><br/>
        <h1 className={Style.zr} onClick={()=>navigate("/tablets")}>VIEW ALL</h1>
        </div><br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <div>
            <img style={{height:"350px"}} src="https://www.reliancedigital.in/medias/Tablets.jpg?context=bWFzdGVyfGltYWdlc3w1NDUyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk4NjIyMDgwOTQyMzguanBnfDJkYTA3NzA1YWUxZmNiMGY0N2EzZjBjOTlkMTNiYzlkNjM5NjAxN2YzMWRjNjA3MjljNDExYzg3OGU1OTJhM2Y" alt='no'/>
          </div>
          <div style={{width:"70%"}}>
          <ProductSlide list={addItems10} number={4}/>
          </div>
        </div>
        <br/>
    </div>
  )
}

export default Home