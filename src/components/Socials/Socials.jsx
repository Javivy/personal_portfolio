import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Socials = () => {
  const ralewayFont = {
    fontFamily: "Raleway",
  };
  
  const kanitFont = {
    fontFamily: "Kanit",
  };

  return (
    <div>
      <h3 className="text-3xl text-primaryText/70 font-bold dark:text-primaryDark" style={kanitFont}>Socials <FontAwesomeIcon icon={faHashtag} /></h3>
      <div className="flex gap-3 mt-4 max-[600px]:flex-col max-[600px]:text-center" style={ralewayFont}>
        <a href='https://www.linkedin.com/in/javier-alejandro-vargas-ortega/' target='_blank' rel="noreferrer" className="p-4 text-[#0a66c2] text-[1.2em] font-bold shadow-[0px_0px_0px_2px_#ededed] dark:shadow-[0px_0px_0px_2px_#0a66c2] dark:hover:shadow-[0px_0px_0px_3px_#0a66c2] hover:shadow-[0px_0px_0px_3px_#dcdcdc] transition-all duration-150 rounded-md">
          Linkedin <FontAwesomeIcon icon={faLinkedin} className="text-2xl my-auto" />
        </a>
        <a href='https://www.linkedin.com/in/javier-alejandro-vargas-ortega/' target='_blank' rel="noreferrer" className="p-4 text-[#444] text-[1.2em] font-bold dark:text-gray-200 shadow-[0px_0px_0px_2px_#ededed] hover:shadow-[0px_0px_0px_3px_#dcdcdc] transition-all duration-150 rounded-md">
          Github <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://twitter.com/Vargas8683' target='_blank' rel="noreferrer" className="flex p-4 text-[#000] text-[1.2em] font-bold dark:text-white shadow-[0px_0px_0px_2px_#ededed] hover:shadow-[0px_0px_0px_3px_#dcdcdc] transition-all duration-150 rounded-md max-[600px]:flex max-[600px]:justify-center">
          Twitter <span className="text-gray-400 mx-1">-</span> X <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" className="h-6 my-auto ml-3 rounded-full" alt="X icon" title="X icon" />
        </a>
      </div>
    </div>
  )
}

export default Socials