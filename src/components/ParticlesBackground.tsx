import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const tsParticlesInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadParticles = async () => {
      try {
        // Import tsparticles
        const tsParticles = (await import('tsparticles')).tsParticles;
        
        if (tsParticlesInstanceRef.current) {
          // Destroy previous instance before creating a new one
          tsParticlesInstanceRef.current.destroy();
        }
        
        // Set colors based on theme
        const particleColor = theme === 'dark' ? '#f2b632' : '#333333';
        const lineColor = theme === 'dark' ? '#f2b632' : '#555555';
        
        // Initialize particles
        tsParticlesInstanceRef.current = await tsParticles.load('particles-js', {
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.7,
                },
              },
              bubble: {
                distance: 200,
                size: 20,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: particleColor,
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 2,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: lineColor,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          detectRetina: true,
        });
      } catch (error) {
        console.error('Failed to load particles:', error);
      }
    };

    loadParticles();

    // Clean up function
    return () => {
      if (tsParticlesInstanceRef.current) {
        tsParticlesInstanceRef.current.destroy();
      }
    };
  }, [theme]);

  return (
    <div 
      id="particles-js" 
      ref={particlesContainerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;