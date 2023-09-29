import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const portfolios = [
  // {
  //   id: 1,
  //   src: arrayDestruct,
  // },
  // {
  //   id: 2,
  //   src: installNode,
  // },
  // {
  //   id: 3,
  //   src: navbar,
  // },
  // {
  //   id: 4,
  //   src: reactParallax,
  // },
  // {
  //   id: 5,
  //   src: reactSmooth,
  // },
  {
    id: 6,
    src: reactWeather,
    demoLink: "https://aliadineh89.github.io/Weather-App/",
    codeLink: "https://github.com/AliAdineh89/Weather-App",
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center space-x-4 mt-4">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105 bg-gray-500 text-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
