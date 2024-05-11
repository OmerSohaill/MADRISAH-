import { useState } from 'react';
import './address.css';

function Address() {
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
                        <div className=''><span className='addlbtwo'>Phone Num *</span> <input placeholder='03-00-0000-000' className='adi'/></div>

                    </div>
                    <div className='Adfl'>
                        <div className=''><span className='addlbtwo'>Your  Email **</span> <input type="email"  placeholder='Email' className='adi'/></div>

                    </div>
                </div>

                <div className='addressbox'>
                <div className='Adfl'>
                        <span className='addlb'>State/Province *</span>
                        <div className="dropdown-container">
                            <input
                            className='addinp adio'
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
                        <span className='addlbtwo'>WhatsApp Num *** </span><input placeholder='03-00-0000-000' className='adi'/>
                     </div>

                    </div>
                    <div className='Adfl'>
                     <div >
                        <span className='addlbtwo'>CURRENT ADDRESS  </span><input placeholder='861/7 railway stadium ' className='adi'/>
                     </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Address;
