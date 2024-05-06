import React, { useEffect, useState } from 'react';

function Youtube() {
  const [count, setCount] = useState({
    branches: 0,
    students: 0,
    courses: 0,
    awards: 0
  });

  useEffect(() => {
    const branchCount = 4;
    const studentCount = 30000;
    const courseCount = 35;
    const awardCount = 4;

    const countUp = () => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter <= branchCount) {
          setCount(prevCount => ({
            ...prevCount,
            branches: counter,
            students: counter * 3000,
            courses: counter * 5,
            awards: counter
          }));
          counter++;
        } else {
          clearInterval(interval);
        }
      }, 1000); // Adjust the interval as needed
    };

    countUp();

    // Cleanup function
    return () => clearInterval(countUp);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                {/* YouTube video embedded with iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D8PY4Iha0Q8"
                  title="YouTube Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                {/* Another YouTube video embedded with iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vgmgAdAu2ew"
                  title="YouTube Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
              <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {/* Your YouTube videos section */}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={count.branches} />
              </h2>
              <p className="leading-relaxed">Branches</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={count.students} />
              </h2>
              <p className="leading-relaxed">Students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={count.courses} />
              </h2>
              <p className="leading-relaxed">Courses</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                <CountUp end={count.awards} />
              </h2>
              <p className="leading-relaxed">Awards</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Youtube;

// CountUp Component
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    let start = 0;
    const increment = end / (duration / 20); // Adjust the division factor to control the speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, 20); // Adjust the interval as needed for smoothness
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};
