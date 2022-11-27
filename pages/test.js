import React, { useRef, useEffect, createElement } from 'react';
import './style.css';
import gsap from 'gsap';
import Split from './split-text';


export default function App() {
  const ref = useRef();

  useEffect(() => {
    Split(ref.current);
    // SplitText(ref.current);
  }, []);
  return (
    <div>
      <h1 ref={ref}>Perrier- Jouet</h1>
    </div>
  );
}
