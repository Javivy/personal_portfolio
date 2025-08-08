import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projects = () => {
  const kanitFont = {
    fontFamily: "Kanit",
  };

  return (
    <div>
      <h2
        className="text-primaryText/70 font-bold text-3xl mb-10 dark:text-secondaryDark"
        style={kanitFont}
      >
        Projects <FontAwesomeIcon icon={faCode} />
      </h2>
      <div>
        <div className="flex gap-5 max-[600px]:flex-col">
          <a
            href="https://javivy.github.io/capstone-1/index.html"
            className="inline-block group rounded-lg overflow-hidden shadow-[0px_0px_0px_4px_#A6D8D4] mb-5 hover:shadow-[0px_0px_0px_7px_#8EAF9D] dark:shadow-[0px_0px_0px_4px_theme(colors.primaryDark)] dark:hover:shadow-[0px_0px_0px_7px_theme(colors.primaryDark)] transition-all duration-200 w-[18rem] h-[14rem] max-[600px]:h-full max-[600px]:w-full max-[600px]:mb-0"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Project Conference Page"
              title="Project Conference Page"
              className="rounded-lg group-hover:scale-110 transition-all duration-300 w-full h-full object-cover"
              src="assets/conference-website.png"
            />
          </a>

          <div className="w-1/2 max-[600px]:w-full">
            <time className="text-gray-400">September 2022</time>
            <h3 className="block text-2xl font-bold text-gray-600 dark:text-white">
              Conference Website
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Simple Landing Page built with HTML, CSS and JavaScript, from
              sketch to code
            </p>
            <ul className="mt-2 flex gap-2">
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  HTML
                </span>
                <img
                  className="h-6"
                  src="assets/html.png"
                  alt="HTML Icon"
                  title="HTML Icon"
                />
              </li>
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  CSS
                </span>
                <img
                  className="h-6"
                  src="assets/css.png"
                  alt="CSS Icon"
                  title="CSS Icon"
                />
              </li>
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  JavaScript
                </span>
                <img
                  className="h-6"
                  src="assets/js.png"
                  alt="JavaScript Icon"
                  title="JavaScript Icon"
                />
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a
                href="https://github.com/Javivy/capstone-1"
                target="_blank"
                rel="noreferrer"
                style={kanitFont}
                className="bg-primaryDark p-2 rounded-lg text-white transition-all duration-100 font-bold hover:bg-secondaryDark"
              >
                Source <FontAwesomeIcon icon={faCode} className="ml-2" />
              </a>
              <a
                href="https://javivy.github.io/capstone-1/index.html"
                target="_blank"
                rel="noreferrer"
                style={kanitFont}
                className="bg-primaryDark p-2 rounded-lg text-white transition-all duration-100 font-bold hover:bg-secondaryDark"
              >
                Live <FontAwesomeIcon icon={faLink} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-4 max-[600px]:mt-[5rem] max-[600px]:flex-col max-[600px]:mb-[4rem]">
          <a
            href="https://javivy.github.io/capstone-1/index.html"
            className="inline-block group rounded-lg overflow-hidden shadow-[0px_0px_0px_4px_#A6D8D4] mb-5 hover:shadow-[0px_0px_0px_7px_#8EAF9D] dark:shadow-[0px_0px_0px_4px_theme(colors.primaryDark)] dark:hover:shadow-[0px_0px_0px_7px_theme(colors.primaryDark)] transition-all duration-200 w-[18rem] h-[14rem] max-[600px]:h-full max-[600px]:w-full"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Project Conference Page"
              title="Project Conference Page"
              className="rounded-lg group-hover:scale-110 transition-all duration-300 w-full h-full object-cover"
              src="assets/crypto-website.png"
            />
          </a>
          <div className="w-1/2 max-[600px]:w-full">
            <time className="text-gray-400">November 2022</time>
            <h3 className="block text-2xl font-bold text-gray-600 dark:text-white">
              Crypto Website
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              React/Redux Project, fetching REST API's, made use of a Chart
              library, Framer Motion, React Hooks, and more.
            </p>
            <ul className="mt-2 flex gap-2">
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  React/Redux
                </span>
                <img
                  className="h-6"
                  src="assets/react.png"
                  alt="React Icon"
                  title="React Icon"
                />
              </li>
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  CSS
                </span>
                <img
                  className="h-6"
                  src="assets/css.png"
                  alt="CSS Icon"
                  title="CSS Icon"
                />
              </li>
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  JavaScript
                </span>
                <img
                  className="h-6"
                  src="assets/js.png"
                  alt="JavaScript Icon"
                  title="JavaScript Icon"
                />
              </li>
              <li className="relative group flex flex-col justify-center">
                <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                  Framer/Motion
                </span>
                <img
                  className="h-6"
                  src="assets/framer-motion.png"
                  alt="Framer Motion Icon"
                  title="Framer Motion Icon"
                />
              </li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a
                href="https://github.com/Javivy/react-capstone"
                target="_blank"
                rel="noreferrer"
                style={kanitFont}
                className="bg-primaryDark p-2 rounded-lg text-white transition-all duration-100 font-bold hover:bg-secondaryDark"
              >
                Source <FontAwesomeIcon icon={faCode} className="ml-2" />
              </a>
              <a
                href="https://cryptos-website-javivy.netlify.app/"
                target="_blank"
                rel="noreferrer"
                style={kanitFont}
                className="bg-primaryDark p-2 rounded-lg text-white transition-all duration-100 font-bold hover:bg-secondaryDark"
              >
                Live <FontAwesomeIcon icon={faLink} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-3 my-4 max-[600px]:flex-col max-[600px]:mx-auto">
          <a
            href="https://github.com/Javivy/blog_app"
            target="_blank"
            rel="noreferrer"
            className="flex max-[600px]:mx-auto max-[600px]:w-full gap-5 mt-4 w-1/2 border-2 border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:bg-[#f4f4f4] dark:bg-[#f4f4f4] hover:shadow-md hover:-translate-y-1 transition-all group/anchor"
          >
            <div>
              <time className="text-gray-400">October 2023</time>
              <h3 className="block text-2xl font-bold text-gray-600">
                Blog App
              </h3>
              <p className="text-gray-500">
                Ruby on Rails Project. PostgreSQL Database, CRUD Operations.
              </p>
              <ul className="mt-2 flex gap-2 flex-wrap">
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    Ruby
                  </span>
                  <img
                    className="h-6"
                    src="assets/ruby.png"
                    alt="Ruby Icon"
                    title="Ruby Icon"
                  />
                </li>
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    CSS
                  </span>
                  <img
                    className="h-6"
                    src="assets/css.png"
                    alt="CSS Icon"
                    title="CSS Icon"
                  />
                </li>
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    PostgreSQL
                  </span>
                  <img
                    className="h-6"
                    src="assets/postgresql.png"
                    alt="PostgreSQL Icon"
                    title="PostgreSQL Icon"
                  />
                </li>
              </ul>
              <span className="p-2 rounded-full bg-gray-200 absolute right-2 bottom-2 scale-0 translate-y-5 transition-all duration-100 group-hover/anchor:scale-100 group-hover/anchor:translate-y-0">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </div>
          </a>
          <a
            href="https://github.com/Javivy/budget-app"
            target="_blank"
            rel="noreferrer"
            className="flex gap-5 relative max-[600px]:mx-auto max-[600px]:w-full mt-4 w-1/2 border-2 border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:bg-[#f4f4f4] dark:bg-[#f4f4f4] hover:shadow-md hover:-translate-y-1 transition-all group/anchor"
          >
            <div>
              <time className="text-gray-400">November 2022</time>
              <h3 className="block text-2xl font-bold text-gray-600">
                Budget App
              </h3>
              <p className="text-gray-500">
                Ruby on Rails Project. PostgreSQL Database, CRUD Operations,
                Login and Registration System.
              </p>
              <ul className="mt-2 flex gap-2">
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    Ruby
                  </span>
                  <img
                    className="h-6"
                    src="assets/ruby.png"
                    alt="Ruby Icon"
                    title="Ruby Icon"
                  />
                </li>
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    TailwindCSS
                  </span>
                  <img
                    className="h-6"
                    src="assets/tailwind.png"
                    alt="TailwindCSS Icon"
                    title="TailwindCSS Icon"
                  />
                </li>
                <li className="relative group flex flex-col justify-center">
                  <span className="absolute bg-titleColor text-white text-center rounded-lg p-1 -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    PostgreSQL
                  </span>
                  <img
                    className="h-6"
                    src="assets/postgresql.png"
                    alt="PostgreSQL Icon"
                    title="PostgreSQL Icon"
                  />
                </li>
              </ul>
              <span className="p-2 rounded-full bg-gray-200 absolute right-2 bottom-2 scale-0 translate-y-5 transition-all duration-100 group-hover/anchor:scale-100 group-hover/anchor:translate-y-0">
                <FontAwesomeIcon icon={faLink} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
