import styled from "styled-components";
import { motion } from "framer-motion"
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  const biggerBoxRef = useRef<HTMLDivElement>(null); // create reference
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box 
          drag
          dragSnapToOrigin
          dragElastic={0.5} // between 0 and 1: 0-stay in the BiggerBox, 1-move with mouse
          dragConstraints={biggerBoxRef} 
          variants={boxVars}
          whileDrag="drag"
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
