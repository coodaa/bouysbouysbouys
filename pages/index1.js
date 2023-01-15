// import Head from "next/head";
import styles from "../styles/Index1.module.scss";
import { useEffect, useState, useMemo } from "react";
import { getInterpolators } from "../components/Interpolators.js";
import ScrollContext from "../components/ScrollContext.js";
import StickyView from "../components/StickyView.js";

export default function Full(props) {
  const [scrollingElement, setScrollingElement] = useState(null);

  const {
    firstSectionInterpolator,
    secondSectionBackgroundInterpolator,
    secondSectionForegroundInterpolator,
  } = useMemo(() => getInterpolators(), []);

  function scrollingElRef(ref) {
    setScrollingElement(ref);
  }

  function checkActive(proportion, lower, upper) {
    return proportion > lower && proportion < upper ? "active" : "";
  }

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className={styles["scrolling-view"]} ref={scrollingElRef}>
        <StickyView height={3240}>
          {(proportion) => (
            <div className={styles["full-sticky-content sticky-content-1"]}>
              <h5 className={styles["full-directions"]}>Scroll this page!</h5>
              <div
                className={styles["full-sticky-foreground"]}
                style={firstSectionInterpolator(proportion)}
              >
                <h1>{proportion}</h1>
                <p>
                  This section has code that takes the number above and does the
                  following:
                </p>
                <p>Below 0, has 0 opacity</p>
                <p className={checkActive(proportion, 0, 0.1)}>
                  Between 0 and 0.1, fades in and scales down from 4 to 1.
                </p>
                <p className={checkActive(proportion, 0.1, 1)}>
                  Between 0.1 and 1, has full opacity and no scaling.
                </p>
                <p className={checkActive(proportion, 1, 1.1)}>
                  Between 1 and 1.1, fades out and scales up from 1 to 4.
                </p>
                <p>Above 1.1, has 0 opacity.</p>
              </div>
            </div>
          )}
        </StickyView>
        <StickyView height={3240}>
          {(proportion) => (
            <div className={styles["full-sticky-content sticky-content-2"]}>
              <h5 className={styles["full-directions"]}>
                Keep scrolling, this section is interesting!
              </h5>
              <div
                className={styles["full-sticky-foreground"]}
                style={secondSectionForegroundInterpolator(proportion)}
              >
                <h1>{proportion}</h1>
                <p>
                  This section has code that takes the number above and does the
                  following:
                </p>
                <h6>The background:</h6>
                <p>
                  Below -0.3, background has 0.05 scaleX and 200px translateY.
                </p>
                <p>
                  Between -0.3 and 0, background scaleX increases to 1 and
                  translateY decreases to 0.
                </p>
                <p>Between 1 and 1.3, background scaleX decreases to 0.</p>

                <h6>The text:</h6>
                <p>
                  Slides in when proportion is between 0 and 1, doing so even if
                  you stop scrolling.
                </p>
                <p>
                  An animation happens because of the CSS transition property.
                </p>
                <p>
                  This decouples the animation part of the transition while
                  continuing to make display dependent on scroll position! (CSS
                  is pretty cool!)
                </p>
              </div>
              <div
                className={styles["full-sticky-background"]}
                style={{
                  height: scrollingElement?.clientHeight,
                  ...secondSectionBackgroundInterpolator(proportion),
                }}
              />
            </div>
          )}
        </StickyView>
        <StickyView height={480}>
          {(proportion) => (
            <div className={styles["full-sticky-content"]}>
              <h1>{proportion}</h1>
              <p>Theres nothing fancy in this one.</p>
            </div>
          )}
        </StickyView>
      </div>
    </ScrollContext.Provider>
  );
}
