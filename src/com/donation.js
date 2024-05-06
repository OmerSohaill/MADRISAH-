import React, { useRef, useEffect, useState } from 'react';
import './donation.css';

function Donation() {
    const donationRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const donationElement = donationRef.current;
            const donationPosition = donationElement.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (donationPosition < screenPosition && !isAnimated) {
                setIsAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAnimated]);

    return (
        <div ref={donationRef} className={`donation grid md:grid-cols-2 ${isAnimated ? 'animate' : ''}`}>
            <div className="donationbox">
                <img src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mosque" />
            </div>
            <div className="donationbox">
                <h1 className='donah'>Give Donation Get Times The Reward</h1>
                <p>The Mosque started in 2020 and planning to be finished in 2025, a hard work for 5 years.</p>
                <div className="donationf">
                    <span className="donaro">Amount required</span><span className="donaro">Amount received</span>
                    <span className="donaro">Amount remain</span>
                    <div className="donationf">
                        <span className="donaro">25000</span><span className="donaro">36000</span>
                        <span className="donaro">50000</span>
                    </div>
                </div>
            </div>
            <div className='dobtn'>
                <button className='Donationbutton'>I want to give Donation</button>
            </div>
        </div>
    );
}

export default Donation;
