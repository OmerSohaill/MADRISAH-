import './portfolio.css';

function Portfolio() {
  // Array of image URLs
  const imageUrls = [
    'https://plus.unsplash.com/premium_photo-1678373453638-4bf2c8df91bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1577561426384-62154a1e9457?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1677533016381-3a8f9a3fc9b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1678373455835-7dade255ef6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  return (
    <>
      <section className="text-gray-600 body-font portfolioma">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Awesome Portfolio</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">In Islamic Trading there are 99 names of God (al-asma al-Husna lit. Meaning: 'the best names' or the most beautiful names), each of which evoke a distinct characteristics of Allah.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4 marquee-container">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={imageUrl} alt={`Image ${index + 1}`} />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Item {index + 1}</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Portfolio;
