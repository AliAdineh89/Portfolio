import React from "react";
import myImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full pt-32 bg-gradient-to-b from-black via-black to-gray-800 flex "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-center h-full px-4 ">
        <div className="flex flex-col justify-center md:w-full md:flex-row">
          <div>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Fullstack JavaScript Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              Seit Januar 2023 sammle ich wertvolle Erfahrungen als
              Softwareentwickler. Mein besonderes Interesse liegt derzeit in der
              faszinierenden Welt der Webentwicklung. In dieser aufregenden
              Domäne beschäftige ich mich intensiv mit React und Tailwind.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={myImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
