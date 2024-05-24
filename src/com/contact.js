import Footer from './footer';
import Subscrib from './subscrib';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

function Contact() {
  const [message, setMessage] = useState('');
  const [email,seteamil]=useState('')
  const [num,setnum]=useState('')
  const onemailchange=(e)=>{
    seteamil(e.target.value)


  }
  const onnumberchange=(e)=>{
    setnum(e.target.value)

  }


  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to Server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMsg = (e) => {
    e.preventDefault();
    socket.emit('user-message', message);
    console.log(message);
    
    fetch('http://localhost:3001/contactus',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        num,num,
        message:message

      })
    }).then(function(res){
      return res.json()
    }).then(function(data){
      alert(data)
    }).catch(function(error){
      alert(error)
    })
  
        setMessage('');
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          ></iframe>
        </div>
        {/* <form action="http://localhost:3001/contactus" method="POST" onSubmit={sendMsg}> */}
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Enter your Email or Phone num or both and your message
              </p>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" onChange={onemailchange} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="number" onChange={onnumberchange} id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={message} onChange={handleMessageChange}></textarea>
              </div>
              <button onClick={sendMsg} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
              <p className="text-xs text-gray-500 mt-3">
                Enter your email and your message and click on the send button. We will contact you through email as soon as possible.
              </p>
            </div>
          </div>
        {/* </form> */}
      </section>
      <Subscrib />
      <Footer />
    </>
  );
}

export default Contact;
