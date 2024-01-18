import { projectAnimate } from "../animations/animate";
import { goToLink } from "../functionality/goToLink";
import { Button, Typography } from "@mui/material";
import { motion, Variants, useScroll } from "framer-motion";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

const ProjectSection = ({
  sceneUrl,
  projectName,
  projectDescription,
  githubUrl,
  demoUrl,
}) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ staggerChildren: 0.05 }}
      style={{
        height: "700px",
        marginLeft: "12%",
        marginRight: "13%",
        backgroundColor: "#000000",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.div
        variants={projectAnimate}
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Spline
            style={{
              position: "relative",
            }}
            scene={sceneUrl}
          />
        </div>
      </motion.div>

      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component={motion.div}
          variants={projectAnimate}
          sx={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: 28,
            color: "#B685F4",
          }}
        >
          {projectName}
        </Typography>
        <Typography
          component={motion.div}
          variants={projectAnimate}
          align="center"
          sx={{
            width: "50%",
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: 14,
            color: "grey",
            marginTop: "10px",
          }}
        >
          {projectDescription}
        </Typography>

        <motion.div
          variants={projectAnimate}
          style={{
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              margin: 10,
              borderRadius: 20, // Set border-radius for a round button
              padding: "10px 20px", // Adjust padding as needed
              borderColor: '#B685F4', // Set the color of the outline
              color: '#B685F4', // Set the text color
            }}
            onClick={goToLink(githubUrl)}
          >
            github
          </Button>
          <Button variant="outlined"
            color="primary"
            style={{
              margin: 10,
              borderRadius: 20, // Set border-radius for a round button
              padding: "10px 20px", // Adjust padding as needed
              borderColor: '#B685F4', // Set the color of the outline
              color: '#B685F4', // Set the text color
            }}onClick={goToLink(demoUrl)}>demo</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
