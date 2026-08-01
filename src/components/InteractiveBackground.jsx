import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <ParticlesProvider init={loadSlim}>
        <Particles
          id="tsparticles"
          options={{
            fullScreen: {
              enable: true,
              zIndex: -50
            },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  enable: true,
                  delay: 0.5
                },
              },
              modes: {
                grab: {
                  distance: 180,
                  links: {
                    opacity: 0.35,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#00ff88",
              },
              links: {
                color: "#00ff88",
                distance: 150,
                enable: true,
                opacity: 0.12,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 1.0,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 90,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>
    </div>
  );
};

export default InteractiveBackground;
