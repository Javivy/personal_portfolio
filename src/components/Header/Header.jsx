import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMoon, faFile, faSun } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const h1Font = {
    fontFamily: 'Kanit'
  }

  const [darkState, setDarkState] = useState(false);

  const userPref = window.localStorage.getItem('theme')
  const mediaQuery = window.matchMedia("(prefer-color-scheme: dark)")

  const handleChange = () => {
    if (userPref) {
      let check = userPref === 'dark' ? 'dark' : 'light';
      setDarkState(check === 'dark' ? true : false);
      console.log('userPref', check, darkState)
      if (check === 'dark') {
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark');
        window.localStorage.setItem('theme', 'light')
      }
    } else {
      let check = mediaQuery.matches ? 'dark' : 'light';
      setDarkState(check === 'dark' ? true : false);
      console.log('MediaQuery', check, darkState)
      
      if (check === 'dark') {
        document.documentElement.classList.add('dark');
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark');
        window.localStorage.setItem('theme', 'light')
      }
    }
  }

  const toggleDarkTheme = () => {
    setDarkState(!darkState)

    if (!darkState) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    handleChange();
    // eslint-disable-next-line
  }, [])

  return (
    <header className='w-full transition-all duration-300'>
      <nav className='w-full flex justify-between align-middle h-[4rem] my-2'>
        <button onClick={toggleDarkTheme} className='my-auto ml-auto text-2xl text-backgroundPrimaryDark dark:text-backgroundPrimary'>{darkState ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faCloudMoon} />}</button>
      </nav>
      <div className='flex gap-5 justify-between max-[600px]:flex-col max-[600px]:mx-auto max-[600px]:text-center'>
        <img src='./assets/profile_pic.jpg' alt='Profile Pic' className='rounded-full h-[10rem] w-[10rem] border-8 border-primary dark:border-primaryDark shadow-primary dark:shadow-primaryDark shadow-lg max-[600px]:w-[10rem] max-[600px]:mx-auto'/>
        <div className='flex flex-col gap-4'>
          <h1 style={h1Font} className='text-3xl font-bold text-titleColor dark:text-[#fff]'>Javier Vargas</h1>
          <p className='text-gray-500 dark:text-gray-200'>I'm a passionate FrontEnd Web Developer eager to learn and apply all my knowledge into Web Applications that help people.</p>
          <div className="flex gap-3 max-[600px]:justify-center">
            <a href='https://www.linkedin.com/in/javier-alejandro-vargas-ortega/' target='_blank' rel='noreferrer' className="my-auto"><FontAwesomeIcon icon={faLinkedin} className="text-[2em] text-[#0a66c2] transition-all duration-75 my-auto dark:text-gray-200" /></a>
            <a href='https://github.com/javivy' target='_blank' rel='noreferrer' className="my-auto"><FontAwesomeIcon icon={faGithub} className="text-[2em] text-[#000] transition-all duration-75 my-auto mx-auto dark:text-gray-200" /></a>
            <a href='Resume-Javier-Alejandro-Vargas-Ortega-1.pdf' target='_blank' rel='noreferrer' className="my-auto bg-primary rounded-lg text-primaryText px-2 py-1 font-bold text-center hover:bg-[#b7fef8] dark:bg-primaryDark dark:text-gray-200 transition-all duration-100 ease-in-out"><FontAwesomeIcon icon={faFile} className="text-[#3b6b67] my-auto mx-auto text-center dark:text-gray-200" /> My Resume </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header