import React, { useState, useEffect, useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

const TestComponent = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-100px");

  return (
    <div
      ref={ref}
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: isVisible ? "red" : "blue",
      }}
    />
  );
};

export default TestComponent;
