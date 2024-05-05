import React from 'react';
import './aboutus.css';
import { useInView } from 'react-intersection-observer';

function About() {
  const [refOne, inViewOne] = useInView({
    triggerOnce: true,
    threshold: 0.2 // Adjust threshold as needed
  });

  const [refTwo, inViewTwo] = useInView({
    triggerOnce: true,
    threshold: 0.2 // Adjust threshold as needed
  });

  return (
    <div className="About grid md:grid-cols-2">
      <div ref={refOne} className={`aboutbox aboutone ${inViewOne ? 'fadeInLeft' : ''}`}>
        <h1 className="aboutwho">Who We Are</h1>
        <hr className="unline" />
        <p className="aboutallah">
          Allah is the most common word from to represent God
        </p>
        <p className="aboutwelcome">
          Welcome to our Madrisah, a sanctuary of learning and spiritual
          growth. Here, we cultivate a deep reverence for knowledge and a
          steadfast devotion to faith. Our dedicated educators guide
          students on a transformative journey of discovery, instilling
          values of compassion, integrity, and resilience. Together, we
          forge a community bound by the pursuit of wisdom and the embrace
          of diversity. Join us as we embark on this sacred endeavor,
          shaping minds and souls for a brighter tomorrow.
        </p>
        <div className="aboutusround ">Read More</div>
      </div>
      <div ref={refTwo} className={`aboutbox abouttwo ${inViewTwo ? 'fadeInRight' : ''}`}>
        <img
          className="aboutusimg"
          src="https://images.unsplash.com/photo-1601191362988-ac6ebec629c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
        />
      </div>
    </div>
  );
}

export default About;
