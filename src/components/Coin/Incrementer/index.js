import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import { IncrementerContainer } from "./IncrementerElements";

const Incrementer = (value) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    cycleVisibility();
  }, [visible]);

  function cycleVisibility() {
    setTimeout(() => {
      setVisible(!visible);
    }, 500);
  }

  return (
    <IncrementerContainer>
      {visible && (
        <Animated animationIn="fadeOutUp" isVisible={true}>
          +1
        </Animated>
      )}
    </IncrementerContainer>
  );
};

export default Incrementer;
