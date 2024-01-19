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

  const [bright, setBright] = useState(false);
  const [content, setContent] = useState(false);
  const [isSplineLoaded, setSplineLoaded] = useState(false);


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
    setSplineLoaded(true);
    setTimeout(() => {
      setBright(true);
    }, 1500);

    setTimeout(() => {
      setContent(true);
    }, 4000);

  }

  function onWheel(e) {
    console.log(e);
    if (e.deltaY > 0 && lightOn1.current.intensity < 0.7) {
      lightOn1.current.intensity += 0.02;

      if (lightOn1.current.intensity > 0.45) {
        setBright(true);

        setTimeout(() => {
          setContent(true);
        }, 1500);
      }
    }
    if (
      e.deltaY < 0 &&
      lightOn1.current.intensity < 0.6 &&
      lightOn1.current.intensity > 0
    ) {
      lightOn1.current.intensity -= 0.02;
    }
  }

  function onClick(e) {
    console.log(e)
    setBright(true);

    setTimeout(() => {
      setContent(true);
    }, 1500);
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
              height: "550px",
              width: "300px",
              position: "relative",
            }}
          >
            <Spline
              onLoad={onLoad}
              // onWheelCapture={isMobile ? undefined : onWheel}
              // onMouseDown={isMobile ? undefined : onClick}
              scene="https://prod.spline.design/afMLsCa4S4wWTCHx/scene.splinecode"
            />
          </div>

          {/* SCROLL ICON */}
          {bright || isMobile && isSplineLoaded ? (
            <>
              <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ staggerChildren: 0.5 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  top: "-50px"
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
            </>
          ) : (
            <div
              style={{
                width: 255,
                marginBottom: 100
              }}>
            {/* <motion.div
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
            </motion.div> */}
            </div>
          )}
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#000000",
            justifyContent: "center",
            position: content || isMobile ? "" : "fixed",
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
            demoUrl="https://github.com/jyennnn/a-tiny-speck-app"
          />

          <ProjectSection
            sceneUrl="https://prod.spline.design/dAjtUwAO2yBQZYPr/scene.splinecode"
            projectName="Online Bazaar"
            projectDescription="built with MERN stack, an online shopping platform to showcase
              local artisans. *Stay tuned for mobile optimization!"
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
            projectName="Rhythm Game"
            projectDescription="built with vanilla javascript, a music rhythm game that
              showcases local Singapore music. *Stay tuned for mobile optimization!"
            githubUrl="https://github.com/jyennnn/the-pastel-jukebox"
            demoUrl="https://jyennnn.github.io/"
          />

          {/* FOOTER */}

          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.2 }}
            style={{
              height: "100%",
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
                paddingBottom: "50px"
              }}
            >
              <Typography
                component={motion.div}
                variants={projectAnimate}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  fontSize: 16,
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
                  fontSize: 16,
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
                    fontSize: 30  ,
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
                    fontSize: 30,
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
