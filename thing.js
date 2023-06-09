const options = {
    "background": {
        "color": {
          "value": "#000000"
        },
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
        "opacity": 1
      },
    particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["rgb(80,80,80)"]
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 4,
          random: true,
        },
        move: {
          enable: true,
          speed: .8,
          direction: "bottom",
          random: true,
          straight: false,
          outMode: "out",
          bounce: true,
        },
      },
      "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse",
            },
          },
          "modes":{
              "connect": {
                  "distance": 1,
                  "links": {
                    "opacity": 0.1
                  },
                  "radius": 0
                },
          }
      },
        
    };

      // tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
      tsParticles.load("tsparticles", options);