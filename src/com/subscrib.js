import React from 'react';
import './subscrib.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Subscrib() {
    return (
        <div className='subscrib'>
            <div className='subscribei'>
                <i className="fab fa-telegram" style={{ fontSize: '48px', color: 'red' }}></i><span><h1 className='subscribeus'>SUBSCRIBE TO US</h1></span>
            </div>
            <p>Subscribe to Our Email for Latest updates and Lates Information</p>
            <div className='subscribefl'><input type="email" className='subscribeemail' placeholder='Enter Your Email' /><button className='subscribesubmit'>Submit</button></div>
        </div>
        
    );
}

export default Subscrib;
