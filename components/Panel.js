// components/Panel.js
import React, { useState, useEffect, useRef } from "react";

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);
  const panelInnerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = panelInnerRef.current;
      const newHeight = el.scrollHeight;
      setHeight(newHeight);
    }, 333);

    return () => clearTimeout(timer);
  }, []);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label}
      </button>
      <div
        className="panel__inner"
        style={innerStyle}
        aria-hidden={!isActive}
        ref={panelInnerRef}
      >
        <p className="panel__content">{content}</p>
      </div>
    </div>
  );
};

export default Panel;
