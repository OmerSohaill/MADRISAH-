import './home.css'
import About from './aboutus'
import Portfolio from './portfolio'
import Team from './ourteam'
import Subscrib from './subscrib'
import Footer from './footer'
import Youtube from './youtube'
import { useState } from 'react'
import ImageSlider from './slider'

function Home (){
  
    return(
        <>
        <div className="Home">
            <div className='HomeBox'>
                


            </div>
            <div className='homelines'>
            <h1 className='homehelp'>WE HELP YOU TO</h1>
            <div className="homebenefitf">

                <h1 className='homebenefit'>ONLY ALLAH CAN BENEFIT OR HARM</h1>
            </div>
                <p className='homeislamicedu'> "Madrisha" typically refers to an Islamic educational institution, often focusing on Quranic studies, Islamic jurisprudence, and theology. These institutions serve as centers for religious learning and community .</p>
                <div className='homeexplore'>EXPLORE NOW</div>

            </div>
           


        </div>
        <Youtube/>
        <About/>
        <ImageSlider/>
        
        <Portfolio/>
        <Team/>
        <Subscrib/>
        <Footer/>
        </>
    )
}

export default Home;