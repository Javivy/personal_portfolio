import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

const Contact = () => {
  const SERVICE_ID = "service_58zkfg8";
  const TEMPLATE_ID = "template_6aarx7r";
  const PUBLIC_KEY = "c-Zihy2LWx7T-Oj06";

  const kanitFont = {
    fontFamily: "Kanit",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          document.querySelector('.modal-element').classList.add('scale-100', 'translate-y-0');
          setTimeout(() => {
            document.querySelector('.modal-element').classList.remove('scale-100', 'translate-y-[0]');
            document.querySelector('.modal-element').classList.add('scale-0', '-translate-y-[150%]');
          }, '3000')
          document.getElementById('my-form').reset();
        }, (error) => {
          console.log(error.text);
          document.getElementById('my-form').reset();
      });

  };

  return (
    <div>
      <h3 className="text-3xl text-primaryText/70 font-bold dark:text-primaryDark" style={kanitFont}>
        Contact <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
      </h3>
      <section class="bg-white dark:bg-backgroundPrimaryDark">
        <div class="py-8 lg:py-16">
          <form ref={form} action="#" class="space-y-8" id="my-form" style={kanitFont} onSubmit={sendEmail}>
            <div>
              <label
                for="from_email"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-none dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                for="from_name"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                class="block p-2.5 w-full text-gray-900 min-h-[5rem] max-h-[25rem] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="my-auto py-3 px-5 flex font-medium overflow-hidden text-center text-black rounded-lg group bg-backgroundPrimary sm:w-fit hover:bg-backgroundSecondary hover:text-white transition-all duration-150 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <span className="mr-2 duration-200 group-hover:mr-4">
                Send message
              </span>
              <SendTwoToneIcon />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
