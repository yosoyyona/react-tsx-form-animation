import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
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
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  
  return (
    <Wrapper>
      <Box 
        style={{ x, scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
