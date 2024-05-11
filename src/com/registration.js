import Footer from './footer';
import Subscrib from './subscrib';
import './registration.css'
import Address from './address';


import React, { useState } from 'react'

function Registration() {
  const [inb, afterinb] = useState({
    display: 'none'
  })

  const change = () => {
    if (inb.display === 'none') {
      afterinb({ display: "inline" })
    } else {
      afterinb({ display: "none" })
    }
  }

  return (
    <>
    

      <form>
        <hr></hr>
        <h1 className='basicinf'>Basic Information</h1>
        <hr></hr>
        <div className='grid md:grid-cols-2'>
          <div className='Regbox'>
            <span ><label className='pasreg'>Full Name *</label> <input placeholder='Full Name' className="Rinput rinp" type="tex" /></span>
         

            
            <div onClick={change}><span >Student of Ul Burhan</span><input className="Rinput" type="radio" /></div>
            <div className='rgaib' style={inb}>
           
              <div><span>Identity Type</span><input className="Rinput" type="radio" /><span>Self</span><input className="rgg" type="radio" /><span>Guardian</span></div>
              <hr></hr>
              <div><span>Gender</span><input className="Rinput" type="radio" /><span>Male</span><input className="rgg" type="radio" /><span>Female</span></div>
            
            </div>
            <div ><span className='pasreg'>CNIC No</span> <input placeholder='Cnic Num' className="Rinput rinp" type="number"  /></div>
            <span> (Guardian's CNIC No if you are under 18)</span>
            
            <div ><span className='pasreg'>Password *</span> <input placeholder='Your password' className="Rinput rinp" type="password"  /></div>

            <div><span className='pasreg'>Education *</span> <input className="Rinput rinp" placeholder='Enter Your Education' /></div>
            <div><span className='pasreg'>Skills *</span> <input className="Rinput rinp" placeholder='Your Skills' /></div>
          </div>
          <div className='Regbox bsreg'>
          <div><span>Dates </span><input className='rinp secondi' placeholder='DD/MM/YY' type="calnder"/></div>
          <div><span>of Birth </span></div>
          <div className='secondrip'><span>confirm </span> <input className='rinp secondi' placeholder='confirm-password' type="password"/></div>
          <div className=''><span>Password </span> </div>
           <div className='secondrr'><span>Interest</span><input placeholder='Interest ' className='rinp secondi'/></div>
           <div className='secondrr'><span>profsion</span><input placeholder='Your Profession ' className='rinp secondi'/></div>
          </div>
        </div>
      </form>

      <Address/>
      <Subscrib />
      <Footer />
    </>


  )
}

export default Registration;
