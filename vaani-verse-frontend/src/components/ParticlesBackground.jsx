import Particles from "@tsparticles/react";

function ParticlesBackground() {

  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: { value: 40 },
          size: { value: 2 },
          move: { speed: 0.3 },
          opacity: { value: 0.3 },
        }
      }}
    />
  );

}

export default ParticlesBackground;