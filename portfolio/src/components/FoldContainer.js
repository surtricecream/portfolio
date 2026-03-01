import { useEffect, useRef } from 'react';
import './FoldContainer.css';

// 3D folding scroll — faithfully replicates Sharon Zheng's technique:
//
// Structure: 3 fold panels stacked vertically in normal flow,
// inside a preserve-3d wrapper. Top & bottom are rotated ±90°.
//
// Each panel gets the SAME translateY (= -scrollTop).
// The per-face offset is done in CSS: top face has translateY(100%)
// and bottom has translateY(-100%) on their inner .fold-align,
// so each face naturally shows a different portion of content.
//
// The scrollbar is created by an invisible spacer div whose height
// equals the content overflow + window height.

function FoldContainer({ children }) {
  const centerContentRef = useRef(null);
  const centerFoldRef = useRef(null);
  const spacerRef = useRef(null);

  useEffect(() => {
    const centerContent = centerContentRef.current;
    const centerFold = centerFoldRef.current;
    const spacer = spacerRef.current;

    if (!centerContent || !centerFold || !spacer) return;

    const calcValues = () => {
      const faceHeight = centerFold.clientHeight;
      // How much content overflows the center fold
      const overflowHeight = centerContent.clientHeight - faceHeight;
      // startOffset pushes content down so name appears near the bottom on load
      const startOffset = faceHeight - 150;
      spacer.style.height = overflowHeight + startOffset + window.innerHeight + 'px';
    };

    calcValues();
    window.addEventListener('resize', calcValues);

    // All three fold-content divs get the same translateY
    const foldContents = Array.from(
      document.querySelectorAll('[data-fold-content="true"]')
    );

    const tick = () => {
      const faceHeight = centerFold.clientHeight;
      const startOffset = faceHeight - 150;
      const scroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      // Push content down by startOffset so name shows at the bottom on load
      foldContents.forEach((content) => {
        content.style.transform = `translateY(${scroll + startOffset}px)`;
      });
      requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('resize', calcValues);
    };
  }, []);

  return (
    <>
      <div className="scroll-spacer" ref={spacerRef} />

      <div className="fold-all">
        <div className="fold-wrapper3d">
          {/* Top face */}
          <div className="fold fold--top">
            <div className="fold-align">
              <div data-fold-content="true">{children}</div>
            </div>
          </div>

          {/* Center face (main visible one) */}
          <div className="fold" ref={centerFoldRef}>
            <div className="fold-align">
              <div data-fold-content="true" ref={centerContentRef}>
                {children}
              </div>
            </div>
          </div>

          {/* Bottom face */}
          <div className="fold fold--bottom">
            <div className="fold-align">
              <div data-fold-content="true">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoldContainer;
