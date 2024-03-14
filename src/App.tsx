import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 200vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {backgroundColor: "rgb(48, 204, 113)", transition: {duration: 10}},
};

function App() {
  const x = useMotionValue(0); 
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x, 
    [-800, 800], 
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const {scrollYProgress} = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <Wrapper style={{background: gradient}}>
      <Box 
        style={{ x, rotateZ, scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
