import { useRef, useState } from "react";

export default function ButtonEye() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "hsl(223deg 10% 95%)",
      }}
    >
      <CreepyButton>Book Now</CreepyButton>
      <style>{`
     
        :root {
          --hue: 223deg;
          --gray1: hsl(var(--hue) 10% 95%);
          --gray9: hsl(var(--hue) 10% 15%);
          --black: hsl(0 0% 0%);
          --primary3: hsl(var(--hue) 90% 75%);
          --primary5: hsl(var(--hue) 90% 55%);
          --primary6: hsl(var(--hue) 90% 45%);
          --trans-dur: 0.3s;
          color-scheme: light dark;
        }

        /* Base button styling */
        .creepy-btn {
          background-color: var(--black);
          border-radius: 1.25em;
          color: var(--gray1);
          cursor: pointer;
          letter-spacing: 1px;
          min-width: 8em;
          outline: 0.1875em solid transparent;
          transition: outline 0.1s linear;
          -webkit-tap-highlight-color: transparent;
          position: relative;
          font-family: 'Londrina Solid', sans-serif;
        }

        .creepy-btn__cover,
        .creepy-btn__eye {
          position: relative;
        }

        .creepy-btn__pupil {
          background-color: var(--black);
        }

        .creepy-btn__cover,
        .creepy-btn__pupil {
          border-radius: inherit;
          display: block;
        }

        .creepy-btn__cover {
          background-color: var(--primary5);
          box-shadow: 0 0 0 0.125em var(--black) inset;
          padding: 0.5em 1em;
          inset: 0;
          transform-origin: 1.25em 50%;
          transition:
            background-color var(--trans-dur),
            transform var(--trans-dur) cubic-bezier(0.65, 0, 0.35, 1);
        }

        .creepy-btn__eye {
          animation: eye-blink 3s infinite;
          background-color: var(--gray1);
          border-radius: 50%;
          overflow: hidden;
          width: 0.75em;
          height: 0.75em;
        }

        .creepy-btn__eyes,
        .creepy-btn__pupil {
          position: absolute;
        }

        .creepy-btn__eyes {
          display: flex;
          align-items: center;
          gap: 0.375em;
          right: 1em;
          bottom: 0.5em;
          height: 0.75em;
        }

        .creepy-btn__pupil {
          aspect-ratio: 1;
          top: 50%;
          left: 50%;
          width: 0.375em;
          transform: translate(-50%, -50%);
        }

        .creepy-btn:focus-visible {
          outline: 0.1875em solid var(--primary3);
        }

        .creepy-btn:hover .creepy-btn__cover {
          background-color: var(--primary6);
        }

        .creepy-btn:focus-visible .creepy-btn__cover,
        .creepy-btn:hover .creepy-btn__cover {
          transform: rotate(-12deg);
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1.65);
        }

        .creepy-btn:active .creepy-btn__cover {
          transform: rotate(0);
          transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
        }

        @keyframes eye-blink {
          0%, 92%, 100% {
            animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
            height: 0.75em;
          }
          96% {
            animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
            height: 0;
          }
        }

        /* Responsive smaller button on mobile */
        @media (max-width: 768px) {
          .creepy-btn {
            min-width: 6em;
            font-size: clamp(0.75rem, 0.7rem + 1vw, 1rem);
            padding: 0.25em 0.5em;
            border-radius: 1em;
          }

          .creepy-btn__cover {
            padding: 0.25em 0.5em;
          }

          .creepy-btn__eye {
            width: 0.5em;
            height: 0.5em;
          }

          .creepy-btn__pupil {
            width: 0.25em;
          }
        }

        
      `}</style>
    </div>
  );
}

function CreepyButton({ onClick, children }) {
  const eyesRef = useRef(null);
  const [eyeCoords, setEyeCoords] = useState({ x: 0, y: 0 });

  const translateX = `${-50 + eyeCoords.x * 50}%`;
  const translateY = `${-50 + eyeCoords.y * 50}%`;
  const eyeStyle = {
    transform: `translate(${translateX}, ${translateY})`,
  };

  const updateEyes = (e) => {
    const userEvent = "touches" in e ? e.touches[0] : e;

    const eyesRect = eyesRef.current?.getBoundingClientRect();
    const eyes = {
      x: eyesRect.left + eyesRect.width / 2,
      y: eyesRect.top + eyesRect.height / 2,
    };
    const cursor = {
      x: userEvent.clientX,
      y: userEvent.clientY,
    };

    const dx = cursor.x - eyes.x;
    const dy = cursor.y - eyes.y;
    const angle = Math.atan2(-dy, dx) + Math.PI / 2;

    const visionRangeX = 180;
    const visionRangeY = 75;
    const distance = Math.hypot(dx, dy);
    const x = (Math.sin(angle) * distance) / visionRangeX;
    const y = (Math.cos(angle) * distance) / visionRangeY;

    setEyeCoords({ x, y });
  };

  return (
    <button
      className="creepy-btn"
      type="button"
      onClick={onClick}
      onMouseMove={updateEyes}
      onTouchMove={updateEyes}
    >
      <span className="creepy-btn__eyes" ref={eyesRef}>
        <span className="creepy-btn__eye">
          <span className="creepy-btn__pupil" style={eyeStyle}></span>
        </span>
        <span className="creepy-btn__eye">
          <span className="creepy-btn__pupil" style={eyeStyle}></span>
        </span>
      </span>
      <span className="creepy-btn__cover">{children}</span>
    </button>
  );
}
