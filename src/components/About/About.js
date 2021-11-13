import React from "react";
import Fade from "react-reveal/Fade";
import about from "../../image/about.png";

const About = () => {
  const service = [
    {
      id: 1,
      text: "ORDER WITH SPREAD PAYMENTS",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "EASY DELIVERY WITH LOW COST",
      image: "../../../assets/sleep.png",
    },
    // { id: 2, text: 'SLEEP & TRAVEL IN COMFORT', image: '../../../assets/travel.png' },
    // { id: 3, text: 'FULLY LICENSED TOUR OPERATOR', image: '../../../assets/sleep.png' },
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
            About Us
          </h1>
          <div className="h-1 w-24 bg-red-400 rounded-full"></div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
        <Fade left>
          <div className="flex justify-center lg:justify-start">
            <img src={about} alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* description  */}

            <h1 className="mt-4 font-primary text-gray-600 text-xl font-semibold">
              Used by Million of People Every Month!
            </h1>
            <h1 className="mt-4 font-primary text-gray-900 text-xl font-semibold">
              We are Trusted Name in BIke Sales & Services
            </h1>
            <p className="text-gray-500 text-sm font-primary">
              Owning and riding a bike is the best thing you can do to get
              around Philadelphia. A bike is a two-wheeled vehicle that is
              propelled by pedals and steered with handlebars. Bikes are city
              vehicles and make getting around a city a lot easier than driving
              a car. I chose this topic because I’m a bike lover, and I wanted
              to find out if other people agreed with me. Bikes are better than
              cars because they are easier to maintain, they are cheaper, and
              they are more accessible. A bike is better than a car. One of the
              reasons a bike is better than a car is that they are easier to
              maintain. This means that you can fix a bike more easily than you
              can fix a car. <br />
              <br />
              One example that shows this is getting a flat tire. When you get a
              flat on your bike you can fix it by getting a new tube and taking
              off the old one. But, for a car’s flat you have to go to a shop to
              get it fixed. This makes bikes better than cars because on a bike
              you can fix most issues yourself as opposed to having to take it
              to a bike shop. Bikes are better than cars because they are easier
              to fix, and they are also cheaper than cars.
            </p>

            {/* heading  */}
            <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className="flex items-center space-x-3" key={item.id}>
                  <img className="w-12" src={item.image} alt={item.text} />
                  <span className="w-36 text-gray-500 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
