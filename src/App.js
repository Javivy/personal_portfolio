import * as React from "react";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import Separator from "./components/Separator/Separator";
import Projects from "./components/Projects/Projects";
import Socials from "./components/Socials/Socials";
import Contact from "./components/Contact/Contact";
import EmailModal from "./components/EmailModal/EmailModal";

function App() {
  const font = {
    fontFamily: "Roboto",
  };

  return (
    <div
      style={font}
      className="flex justify-center dark:bg-backgroundPrimaryDark"
    >
      <div className="mx-[3rem] md:mx-0 md:w-[75%] lg:w-1/2 dar:text-primaryTextDark">
        <Header />
        <Separator />
        <Experience />
        <Separator />
        <Projects />
        <Separator />
        <Socials />
        <Separator />
        <Contact />
      </div>
      <EmailModal />
    </div>
  );
}

export default App;
