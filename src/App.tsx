import "./App.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

import Navbar from "./components/Navbar";
import Hr from "./components/Hr";
import Profile from "./components/Profile";
import SkillCards from "./components/SkillCards";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState } from "react";
import Container from "./components/Container";
import ScrollHorizontal from "./components/Project";
import { Moon, Sun } from "lucide-react";

function App() {

  const [changeColor, setChangeColor] = useState<Boolean>(true);
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  });

  return (
    <>
      <div className={changeColor ? 'h-auto bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' : 'bg-slate-800  h-auto'}>
        <p onClick={(() => { setChangeColor(!changeColor) })} className="z-50 absolute right-12 top-16 rounded-full sm:fixed sm:right-14 sm:top-24 ">
          {changeColor ? <Moon className="h-10 w-10" /> : <Sun className="h-10 w-10" />}
        </p>
        <motion.div
          className="progress-bar"
            style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "cornsilk",
                }}

        />
        <Navbar />
        <Container>
          <Profile />
          <Hr title="Skills" _id="skill" />
          <SkillCards />
          <Hr title="Projects" _id="project" />
          {/* <ProjectCards /> */}
          <ScrollHorizontal/>
          <Hr title="Contact" _id="contact" />
          <Contact />
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;
