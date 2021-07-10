import Particles from "react-particles-js";

export default function Partical() {
  return (
    <Particles
      className="canves"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              speed: 4,
              size_min: 1.2,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 2,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
      style={{ background: "", position: "absolute", zIndex: "1" }}
    />
  );
}
