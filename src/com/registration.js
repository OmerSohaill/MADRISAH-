import Footer from './footer';
import Subscrib from './subscrib';
import './registration.css'
import './address.css';


import React, { useState } from 'react'

function Registration() {
 

 
  const countries = ['Pakistan', 'USA', 'UK', 'Canada', 'Australia']; // Example country names
  const districts = ['Attok', 'Kasoor', 'Peshawar']; // Example district names
  const states = ['Punjab', 'Sindh', 'Balochistan', 'Khyber Pakhtunkhwa']; // Example state/province names
  const cities = ['Lahore', 'Karachi', 'Islamabad', 'Peshawar']; // Example city names
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false); // Close the country dropdown menu after selecting a country
  };

  const handleDistrictSelection = (district) => {
    setSelectedDistrict(district);
    setShowDistrictDropdown(false); // Close the district dropdown menu after selecting a district
  };

  const handleStateSelection = (state) => {
    setSelectedState(state);
    setShowStateDropdown(false); // Close the state dropdown menu after selecting a state
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false); // Close the city dropdown menu after selecting a city
  };

  return (
    <>


      <form action='http://localhost:3001/registraion ' method='POST'>
        <hr></hr>
        <h1 className='basicinf'>Basic Information</h1>
        <hr></hr>
        <div className='grid md:grid-cols-2'>
          <div className='Regbox'>
            <span ><label className='pasreg'>Full Name *</label> <input placeholder='Full Name' className="Rinput rinp" type="text" name="fullname" /></span>



           <div className='radi'>
                <label className='rido rat' >Class Type</label>
                <div>
                  <div className='ccode coder'><label>Course Code</label></div>
                  <input className='ccode codeinp' type="Number" name="coursecode" placeholder='Enter your Course Code'/>
                </div>
                <div>
                  <label className='rido' >Online</label>
                <input className='rido' name="online"  type="radio"/>

                </div>
                <div>
                  <label className='rido' >Recorded</label>
                  <input className='rido' name="recorded"  type="radio"/>

                </div>
                <hr></hr>

                <label className='rido rat' >Gender</label>
                <div>
                  <label className='rido' >Mail</label>
                <input className='rido' name="mail"  type="radio"/>
                

                </div>
                <div>
                  <label className='rido' >Femail</label>
                <input  className='rido' name="femail" type="radio"/>

                <hr></hr>

                </div>
           </div>
            <div ><span className='pasreg'>CNIC No</span> <input placeholder='Cnic Num' className="Rinput rinp" type="number" name="cnic" /></div>
            <span> (Guardian's CNIC No if you are under 18)</span>

            <div ><span className='pasreg'>Password *</span> <input placeholder='Your password' name="password" className="Rinput rinp" type="password" /></div>

            <div><span className='pasreg'>Education *</span> <input className="Rinput rinp" name="education" placeholder='Enter Your Education' /></div>
            <div><span className='pasreg'>Skills *</span> <input name="skills" className="Rinput rinp" placeholder='Your Skills' /></div>
          </div>
          <div className='Regbox bsreg'>
            <div><span>Date of Birth </span><input className='rinp secondi reginl' name="DateOfBirth" placeholder='DD/MM/YY' type="calnder" /></div>
            
            <div className='secondrip'><span>confirm Pass</span> <input className='rinp secondi' placeholder='confirm-password' type="password" name="confirmpassword" /></div>
          
            <div className='secondrr'><span>Interest</span><input placeholder='Interest ' className='rinp secondi' /></div>
            <div className='secondrr'><span>profsion</span><input placeholder='Your Profession ' className='rinp secondi' /></div>
         
          </div>
        </div>
        <h1>Contact Information</h1>
        <hr></hr>

        <h1 className='Addresscuri'>Current Residential Address</h1>

        <div className='Address grid md:grid-cols-2'>
          <div className='addressbox'>
            <div className='Adfl'>
              <span className='addlb'>Country *</span>
              <div className="dropdown-container">
                <input
                  className='addinp'
                  type="text"
                  name="country"
                  placeholder="Select Your Country"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  value={selectedCountry}
                  readOnly
                />
                <div className="dropdown" style={{ display: showCountryDropdown ? 'block' : 'none' }}>
                  {countries.map((country, index) => (
                    <div key={index} onClick={() => handleCountrySelection(country)}>{country}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className='Adfl'>
              <span className='addlb'>District *</span>
              <div className="dropdown-container">
                <input
                  className='addinp'
                  type="text"
                  name="district"
                  placeholder="Select Your District"
                  onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
                  value={selectedDistrict}
                  readOnly
                />
                <div className="dropdown" style={{ display: showDistrictDropdown ? 'block' : 'none' }}>
                  {districts.map((district, index) => (
                    <div key={index} onClick={() => handleDistrictSelection(district)}>{district}</div>
                  ))}
                </div>
              </div>
            </div>





            <div className='Adfl'>
              <div className=''><span className='addlbtwo'>Phone Num *</span> <input name="phonenum" placeholder='03-00-0000-000' className='adi' /></div>

            </div>
            <div className='Adfl'>
              <div className=''><span className='addlbtwo'>Your  Email **</span> <input name="email" type="email" placeholder='Email' className='adi' /></div>

            </div>
          </div>

          <div className='addressbox'>
            <div className='Adfl'>
              <span className='addlb'>State/Province *</span>
              <div className="dropdown-container">
                <input
                  className='addinp adio'
                  name="stateprovince"
                  type="text"
                  placeholder="Select Your State/Province"
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  value={selectedState}
                  readOnly
                />
                <div className="dropdown" style={{ display: showStateDropdown ? 'block' : 'none' }}>
                  {states.map((state, index) => (
                    <div key={index} onClick={() => handleStateSelection(state)}>{state}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className='Adfl'>
              <span className='addlb'>Current City ***</span>
              <div className="dropdown-container">
                <input
                  className='addinp adio'
                  name="currentcity"
                  type="text"
                  placeholder="Select Your City"
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  value={selectedCity}
                  readOnly
                />
                <div className="dropdown" style={{ display: showCityDropdown ? 'block' : 'none' }}>
                  {cities.map((city, index) => (
                    <div key={index} onClick={() => handleCitySelection(city)}>{city}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className='Adfl'>
              <div >
                <span className='addlbtwo'>WhatsApp Num *** </span><input name="whatsappnum" placeholder='03-00-0000-000' className='adi' />
              </div>

            </div>
            <div className='Adfl'>
              <div >
                <span className='addlbtwo'>CURRENT ADDRESS  </span><input name="currentaddress" placeholder='861/7 railway stadium ' className='adi' />
              </div>

            </div>

          </div>
        </div>
        <div className='regisbfl'>

        <button className='registerbutton' type="submit">Submit</button>
        </div>
      </form>


      <Subscrib />
      <Footer />
    </>


  )
}

export default Registration;
