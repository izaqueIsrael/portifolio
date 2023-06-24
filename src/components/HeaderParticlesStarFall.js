import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeaderParticlesStarFall = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <div className="header__particles">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
                speed: 1,
              },
              push: {
                quantity: 3,
              },
            },
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "star", // Alterado para "star"
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5, // Número de lados da estrela
              },
              image: {
                src: "https://path/to/star.png", // URL da imagem da estrela (opcional)
                width: 100, // Largura da imagem (opcional)
                height: 100, // Altura da imagem (opcional)
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.1,
              direction: "bottom", // Alterado para "bottom" para criar o efeito de estrelas cadentes
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default HeaderParticlesStarFall;
