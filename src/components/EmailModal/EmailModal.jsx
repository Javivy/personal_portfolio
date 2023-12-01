import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const EmailModal = () => {
  const kanitFont = {
    fontFamily: "Kanit",
  };

  return (
    <div className="mt-3 p-4 flex justify-center backdrop-blur-sm bg-[#0f0]/40 fixed z-20 rounded-lg modal-element scale-0 -translate-y-[150%] transition-all duration-150">
      <h3 className="text-3xl text-titleColor font-bold" style={kanitFont}>
        Email Sent Successfully <FontAwesomeIcon icon={faCheckCircle} />
      </h3>
    </div>
  )
}

export default EmailModal