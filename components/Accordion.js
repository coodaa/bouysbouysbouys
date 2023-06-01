// components/Accordion.js
import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  };

  return (
    <div className="accordion" role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
