import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Experience = () => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const h2Font = {
    fontFamily: "Kanit",
  };

  return (
    <div>
      <h2
        className="text-primaryText/70 font-bold text-3xl dark:text-secondaryDark"
        style={h2Font}
      >
        Experience <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
      </h2>
      <div className="my-5">
        <ol class="relative border-s border-primary dark:border-primaryDark/60">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-secondaryDark"></div>
            <time class="dark:text-gray-400 mb-1 text-sm font-normal leading-none text-gray-400">
              May 2023
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Freelance Project: Rubocop Bot Development
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Worked as a freelancer for 2 months building a Rubocop Bot that
              extracts images from Midjourney Bot. Coded and implemented various
              methods to develop the bot, handled deployment, and utilized
              technologies such as JavaScript, Rubocop, and Python.
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-secondaryDark dark:bg-gray-700"></div>
            <time class="dark:text-gray-400 mb-1 text-sm font-normal leading-none text-gray-400">
              October 2023
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Blog App in Ruby on Rails
            </h3>
            <ul>
              <li>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Project Built with Ruby on Rails using MVC architecture.
                  Implemented PostgreSQL Database, handled the functionality to
                  Register and Sign In using Devise Gem, Authorization,
                  Authenticatable User.
                </p>
              </li>
              <li className="mt-4">
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Worked collaboratively to implement different features to the
                  project, schedule meetings, meet deadlines, communicate, give
                  and receive constructive feedback.
                </p>
              </li>
            </ul>
            <a
              href="https://github.com/Javivy/blog_app"
              class="inline-flex group transition-all items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-backgroundSecondaryDark dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180 group-hover:translate-x-1 transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-secondaryDark dark:bg-gray-700"></div>
            <time class="dark:text-gray-400 mb-1 text-sm font-normal leading-none text-gray-400">
              July 2023
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Crypto Website Fetching RESTful APIs Using React/Redux for
              Real-Time Data
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {isFullTextVisible
                ? "I spearheaded the development of a dynamic React/Redux project that seamlessly integrates with external RESTful APIs, showcasing my proficiency in modern web technologies. Utilizing Tailwind CSS for a streamlined and responsive user interface, along with the fluid animations brought to life by Framer Motion, I meticulously crafted an engaging and visually appealing user experience. My adept use of JavaScript facilitated efficient data retrieval and manipulation, allowing for the seamless integration of real-time data from the API. Moreover, I implemented interactive graphs using a React library, demonstrating a comprehensive understanding of data visualization techniques. This project not only highlights my technical prowess in React/Redux and JavaScript but also showcases my commitment to delivering user-centric and aesthetically pleasing web applications"
                : "I spearheaded the development of a dynamic React/Redux project that seamlessly integrates with external RESTful APIs, showcasing my proficiency in modern web technologies."}
            </p>
            <button
              onClick={toggleTextVisibility}
              className="text-blue-500 cursor-pointer block font-bold hover:underline dark:text-primary"
            >
              {isFullTextVisible ? "Read less..." : "Read more..."}
            </button>
            <a
              href="https://github.com/Javivy/react-capstone"
              class="inline-flex group transition-all items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-backgroundSecondaryDark dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              Learn more{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180 group-hover:translate-x-1 transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
