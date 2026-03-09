import { useEffect, useRef } from 'react';
import './FoldContainer.css';

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
      const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;
      spacer.style.height = overflowHeight + window.innerHeight + 'px';
    };

    calcValues();
    window.addEventListener('resize', calcValues);

    const foldContents = Array.from(
      document.querySelectorAll('[data-fold-content="true"]')
    );

    const tick = () => {
      const scroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      foldContents.forEach((content) => {
        content.style.transform = `translateY(${scroll}px)`;
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
