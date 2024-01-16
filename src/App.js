import Spline from "@splinetool/react-spline";
import { Button, Typography } from "@mui/material";
import { motion, Variants, useScroll } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import {
  textAnimate,
  arrowAnimate,
  projectAnimate,
} from "./components/animations/animate";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmoothScroll from "./components/SmoothScroll";
import ProjectSection from "./components/sections/ProjectSection";
import { goToLink } from "./components/functionality/goToLink";
import { useMediaQuery } from "react-responsive";

function App() {
  const lightOn1 = useRef();
  const lightOn2 = useRef();
  const lightOn3 = useRef();
  const lightOn4 = useRef();
  const lightOn5 = useRef();

  const [bright, setBright] = useState(false);
  const [content, setContent] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const scrollDown = () => {
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
  };

  function onLoad(spline) {
    lightOn1.current = spline.findObjectById(
      "830a2708-8ed9-49cf-a68e-085299899103"
    );
    lightOn2.current = spline.findObjectById(
      "57bd326d-6e57-4c6b-959c-422c966dce8c"
    );
    // lightOn3.current = spline.findObjectById("1a28f0f3-6f29-47b5-9113-3e8ea5d120e8")
    lightOn4.current = spline.findObjectById(
      "0c17cc62-9144-4d0b-90af-73c18113e10a"
    );
    // lightOn5.current = spline.findObjectById("ef18d56e-8e72-481e-870a-4e332e370cba")
  }

  function onWheel(e) {
    console.log(e);
    if (e.deltaY > 0 && lightOn1.current.intensity < 0.8) {
      lightOn1.current.intensity += 0.005;
      // lightOn2.current.intensity += 0.02;
      // lightOn3.current.intensity += 0.02
      // lightOn4.current.intensity += 0.02;
      // lightOn5.current.intensity += 0.02

      if (lightOn1.current.intensity > 0.6) {
        setBright(true);

        setTimeout(() => {
          setContent(true);
        }, 1500);
      }
    }
    if (
      e.deltaY < 0 &&
      lightOn1.current.intensity < 0.7 &&
      lightOn1.current.intensity > 0
    ) {
      lightOn1.current.intensity -= 0.02;
      lightOn2.current.intensity -= 0.02;
      // lightOn3.current.intensity -= 0.02
      lightOn4.current.intensity -= 0.02;
      // lightOn5.current.intensity -= 0.02
    }
  }

  return (
    <>
      <SmoothScroll>
        <div
          style={{
            height: "100vh",
            width: "100%",
            margin: "0 auto",
            backgroundColor: "#000000",
            justifyContent: "center",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: isMobile ? "column" : "row"
          }}
        >
          <div
            style={{
              height: "700px",
              width: "300px",
              position: "relative",
            }}
          >
            <Spline
              onLoad={onLoad}
              onWheelCapture={onWheel}
              scene="https://prod.spline.design/afMLsCa4S4wWTCHx/scene.splinecode"
            />
          </div>

          {/* SCROLL ICON */}
          {bright || isMobile ? (
            <div>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ staggerChildren: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Typography
                  component={motion.div}
                  variants={textAnimate}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 35,
                    color: "white",
                  }}
                >
                  Joy Heng
                </Typography>
                <Typography
                  component={motion.div}
                  variants={textAnimate}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 25,
                    color: "#C778DD",
                  }}
                >
                  full-stack developer
                </Typography>
              </motion.div>

              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 1 }}
                style={{
                  position: "absolute",
                  bottom: "10%", 
                  right: "10%",
                  visibility: isMobile ? "hidden" : "visible"
                }}
              >
                <Button
                  component={motion.div}
                  variants={arrowAnimate}
                  sx={{
                    color: "#C778DD",
                    borderRadius: "50%",
                  }}
                  onClick={scrollDown}
                >
                  <KeyboardDoubleArrowDownIcon
                    sx={{
                      fontSize: 40,
                    }}
                  />
                </Button>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 2,
                  delay: 3.5,
                },
              }}
              class="scroll-icon"
            >
              <span class="scroll-icon__wheel-outer">
                <span class="scroll-icon__wheel-inner"></span>
              </span>
            </motion.div>
          )}
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#000000",
            justifyContent: "center",
            position: content ? "" : "fixed",
            zIndex: 0,
          }}
        >
          {/* INTRODUCTION */}
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            style={{
              height: "700px",
              marginLeft: "13%",
              marginRight: "12%",
              backgroundColor: "#000000",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component={motion.div}
              variants={textAnimate}
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 26,
                color: "#CFCFCF",
              }}
            >
              I am a{" "}
              <span style={{ color: "#B685F4" }}>full-stack developer</span>{" "}
              based in Singapore. I create aesthetic designs and translate them
              into responsive web applications with user-friendly interfaces.
            </Typography>
          </motion.div>

          {/* PROJECTS */}
          <ProjectSection
            sceneUrl="https://prod.spline.design/zUT17bqafUYDLHd2/scene.splinecode"
            projectName="Yoga Tracker App"
            projectDescription="built with react native, an app to track and record yoga
            practices"
            githubUrl="https://github.com/jyennnn/a-tiny-speck-app"
            demoUrl=""
          />

          <ProjectSection
            sceneUrl="https://prod.spline.design/dAjtUwAO2yBQZYPr/scene.splinecode"
            projectName="Online Bazaar"
            projectDescription="built with MERN stack, an online shopping platform to showcase
              local artisans."
            githubUrl="https://github.com/caiyinn/the-local-choice"
            demoUrl="https://the-local-choice.vercel.app/"
          />

          <ProjectSection
            sceneUrl="https://prod.spline.design/7Rmv072wif8kf-am/scene.splinecode"
            projectName="AI Chat App"
            projectDescription="built with react, a chat application powered by AI, to replicate
              a friend."
            githubUrl="https://github.com/jyennnn/fwens"
            demoUrl="https://fwens.vercel.app/"
          />

          <ProjectSection
            sceneUrl="https://prod.spline.design/ZyYx6Mym4Szd2CU4/scene.splinecode"
            projectName="Music Rhythm Game"
            projectDescription="built with vanilla javascript, a music rhythm game that
              showcases local Singapore music."
            githubUrl="https://github.com/jyennnn/the-pastel-jukebox"
            demoUrl="https://jyennnn.github.io/"
          />

          {/* FOOTER */}

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              height: "150px",
              marginLeft: "12%",
              marginRight: "13%",
              backgroundColor: "#000000",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "30%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                component={motion.div}
                variants={projectAnimate}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "white",
                }}
              >
                contact
              </Typography>
              <Typography
                component={motion.div}
                variants={projectAnimate}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: 18,
                  color: "#B685F4",
                }}
              >
                joyhengg@gmail.com
              </Typography>
            </div>

            <div
              style={{
                width: "20%",
                height: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                component={motion.div}
                variants={projectAnimate}
                sx={{
                  color: "#C778DD",
                  borderRadius: "50%",
                }}
                onClick={goToLink("https://www.linkedin.com/in/joyheng-dev/")}
              >
                <LinkedInIcon
                  sx={{
                    fontSize: 40,
                  }}
                />
              </Button>
              <Button
                component={motion.div}
                variants={projectAnimate}
                sx={{
                  color: "#C778DD",
                  borderRadius: "50%",
                }}
                onClick={goToLink("https://github.com/jyennnn")}
              >
                <GitHubIcon
                  sx={{
                    fontSize: 40,
                  }}
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
