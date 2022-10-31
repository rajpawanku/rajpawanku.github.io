import React from "react";
import Mythersa from "../assets/portfolio/mytheresa.png";
import Bewakoof from "../assets/portfolio/Bewakoof.png";
import News from "../assets/portfolio/News.png";
import OutLook from "../assets/portfolio/OutLook.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Mythersa,
      demoLink:"https://marvelous-torrone-9bbbc5.netlify.app/index.html",
      codeLink:"https://github.com/rajpawanku/Mytheresa",
    },
    {
      id: 2,
      src: Bewakoof,
      demoLink:"https://peaceful-paprenjak-26fb40.netlify.app/",
      codeLink:"https://github.com/rajpawanku/Unit2ProjectBewakoof",
    },
    {
      id: 3,
      src: News,
      demoLink:"https://splendorous-puppy-e94afa.netlify.app",
      codeLink:"https://github.com/rajpawanku/News-app",
    },
    {
      id: 4,
      src: OutLook,
      demoLink:"https://moonlit-sable-152afd.netlify.app",
      codeLink:"https://github.com/rajpawanku/OutLook",
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,codeLink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demoLink}  target="_blank" rel="noreferrer">  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={codeLink}  target="_blank" rel="noreferrer" >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;