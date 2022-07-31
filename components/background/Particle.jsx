import React,{useEffect, useState, useWidth} from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const [width, setWidth] = useState(451);
    useEffect(()=>{
        setWidth(window.innerWidth);
    }, [])
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={
            {
                "fullScreen": {
                    "enable": true,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 15,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#aaa"
                    },
                    "shape": {
                        "type": "circle",
                        "options": {
                            "sides": 0
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 4,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": width > 450 ? 400 : 220,
                        "color": "#7b7099",
                        "opacity": 0.4,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": ["grab"]
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    // "color": "#1b1729",
                    "image": "linear-gradient(270deg, rgba(40,42,42,1) 0%, rgba(35,47,62,1) 100%)",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }
          }
        />
      );
}

export default Particle