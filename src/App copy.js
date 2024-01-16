import Spline from '@splinetool/react-spline';
import { Button, Typography } from "@mui/material";
import { motion, Variants, useScroll } from "framer-motion"
import { useRef } from "react"
import { useState } from 'react';

// const imageAnimate = {
//     offscreen:{
//       y:100
//               },
//     onscreen:{
//       y:0, 
//       transition: {
//         type: "spring", 
//         bounce:0.4,
//         duration: 3
//       }
//     }
// }

// const textAnimate = {
//   offscreen:{
//     x:-50,
//     y:100,
//     opacity:0
//             },
//   onscreen:{
//     x:-50,
//     y: 0,
//     opacity:1,
//     transition: {
//       type: "spring", 
//         // damping: 10,
//       // stiffness: 10, 
//       bounce: 0.4,
//       duration: 2.5,
//     }
//   }
// }

function App() {

  const lightOn1 = useRef();
  const lightOn2 = useRef();
  const lightOn3 = useRef();
  const lightOn4 = useRef();
  const lightOn5 = useRef();

  const [bright, setBright] = useState(false)
  const [content, setContent] = useState(false)

  function onLoad(spline) {
    lightOn1.current = spline.findObjectById("830a2708-8ed9-49cf-a68e-085299899103")
    lightOn2.current = spline.findObjectById("57bd326d-6e57-4c6b-959c-422c966dce8c")
    // lightOn3.current = spline.findObjectById("1a28f0f3-6f29-47b5-9113-3e8ea5d120e8")
    lightOn4.current = spline.findObjectById("0c17cc62-9144-4d0b-90af-73c18113e10a")
    // lightOn5.current = spline.findObjectById("ef18d56e-8e72-481e-870a-4e332e370cba")
  }

  function onWheel(e) {
    console.log(e)
    if (e.deltaY > 0 && lightOn1.current.intensity <0.6){
      lightOn1.current.intensity += 0.02
      lightOn2.current.intensity += 0.02
      // lightOn3.current.intensity += 0.02
      lightOn4.current.intensity += 0.02
      // lightOn5.current.intensity += 0.02

      if (lightOn1.current.intensity > 0.3){
        setBright(true)
      }
    }
    if (e.deltaY < 0 && lightOn1.current.intensity <0.7 && lightOn1.current.intensity >0){
      lightOn1.current.intensity -= 0.02
      lightOn2.current.intensity -= 0.02
      // lightOn3.current.intensity -= 0.02
      lightOn4.current.intensity -= 0.02
      // lightOn5.current.intensity -= 0.02
    }
  }


  return (
    
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center", 
    //     alignItems: "center"
    //   }}>

    //   <div 
    //       style={{
    //         height: "100vh",
    //         width: "100%",
    //         backgroundColor: "green",
    //         display: "flex",
    //         justifyContent: "center", 
    //         alignItems: "center",
    //       }}
    //     >
    //     <motion.div 
    //     initial={"offscreen"}
    //     whileInView={"onscreen"}
    //     viewport={{once:false, amount:0.5}}
    //     transition={{staggerChildren:0.5}}
    //     style={{
    //               height: "500px",
    //               width: "500px",
    //               backgroundColor: "pink",
    //               display: "flex",
    //               flexDirection:"column",
    //               justifyContent: "center", 
    //               alignItems: "center",
    //               margin: "10px",
    //             }}
    //           >
    //         <motion.p
    //         variants={textAnimate}
    //         style={{ margin: 0 }}>
    //           apple
    //         </motion.p>

    //         <motion.h2
    //         variants={textAnimate}
    //         style={{ margin: 0 }}>
    //           orange
    //         </motion.h2>
    //     </motion.div>
    //   </div>

    //   <div 
    //       style={{
    //         height: "100vh",
    //         width: "100%",
    //         backgroundColor: "green",
    //         display: "flex",
    //         justifyContent: "center", 
    //         alignItems: "center",
    //       }}
    //     >
    //     <div  
    //     style={{
    //               height: "500px",
    //               width: "500px",
    //               backgroundColor: "lightblue",
    //               display: "flex",
    //               justifyContent: "center", 
    //               alignItems: "center",
    //             }}
    //           >
    //         <p style={{ margin: 0 }}>blueberries</p>
    //     </div>
    //   </div>
      
    //   <div 
    //       style={{
    //         height: "100vh",
    //         width: "100%",
    //         backgroundColor: "green",
    //         display: "flex",
    //         justifyContent: "center", 
    //         alignItems: "center",
    //       }}
    //     >
    //   <div  
    //   style={{
    //             height: "500px",
    //             width: "500px",
    //             backgroundColor: "lightyellow",
    //             display: "flex",
    //             justifyContent: "center", 
    //             alignItems: "center",
    //             margin: "10px",
    //           }}
    //         >
    //       <p style={{ margin: 0 }}>pineapple</p>
    //   </div>
    //   </div>
    // </div>
    <>
    <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            margin: "0 auto",
            backgroundColor: "#000000",
            justifyContent: "center",
          }}
        >

    <Spline
        onLoad={onLoad}
        onWheelCapture={onWheel}
        style={{
          height:"90%",
          width: "100%",
          position: "absolute",
          left: "-10%",
        }}
        scene="https://prod.spline.design/afMLsCa4S4wWTCHx/scene.splinecode" />

  {bright && (
    <>
    <motion.div 
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.5}}
    transition={{repeat: Infinity}}>
    <Typography
      component={motion.div}
      variants={textAnimate}
      sx={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 40,
        color: "white",
      }}
    > 
    jyennnie
    </Typography>
    <Typography
      component={motion.div}
      variants={textAnimate}
      sx={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 35,
        color: "#C778DD",
      }}
    > 
    full-stack developer
    </Typography>
    </motion.div>
    <Button onClick={() => setContent(true)}>go down</Button>
    </>
    )}
    </div>

  {content && (
    <div
    style={{
      height: "100vh",
      width: "100%",
      margin: "0 auto",
      backgroundColor: "#000000",
      justifyContent: "center",
    }}
    > 
      <div
        style={{
          height: "30%",
          margin: "0 auto",
          backgroundColor: "#000000",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row"
        }}
        >
        <div 
          style={{
              width: "15%",
              height: "100%"
          }}>

          </div>
        <div
        style={{
          width:"35%",
          height: "100%",
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: 'column'
        }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontSize: 25,
              color: "grey",
            }}
          > 
          Yoga Tracker App
          </Typography>
          <Typography
            align='center'
            sx={{
              width: '50%',
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontSize: 15,
              color: "grey",
              marginTop: '10px'
            }}
          > 
          built with react native, an app to track and record yoga practices
          </Typography>
        </div>
        
      <Spline style={{
                  width:"50%",
                  position:"relative", 
                  left: "-12%"
                  }}
      scene="https://prod.spline.design/zUT17bqafUYDLHd2/scene.splinecode" />
      </div>
    </div>
  )}
   </>
  );
}

export default App;
