import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#04060a]">
      {/* Interactive Network Node Particles */}
      <ParticlesProvider init={loadSlim}>
        <Particles
          id="tsparticles"
          options={{
            fullScreen: {
              enable: true,
              zIndex: -50,
            },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: ["grab", "bubble"],
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                grab: {
                  distance: 220,
                  links: {
                    opacity: 0.6,
                    color: "#38bdf8",
                  },
                },
                bubble: {
                  distance: 200,
                  size: 4,
                  duration: 2,
                  opacity: 0.8,
                },
              },
            },
            particles: {
              color: {
                value: ["#2dd4bf", "#38bdf8", "#818cf8"],
              },
              links: {
                color: "#2dd4bf",
                distance: 160,
                enable: true,
                opacity: 0.28,
                width: 1.2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                value: 125,
              },
              opacity: {
                value: { min: 0.3, max: 0.7 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1.5, max: 3.5 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>

      {/* Cyber Grid & Internet Network Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Radial Network Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/6 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
    </div>
  );
};

export default InteractiveBackground;
