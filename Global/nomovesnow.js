const options = {
    name: "Snow",
    fpsLimit: 60,
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#FFFFFF",
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 2,
        },
        move: {
            angle: {
                offset: 0,
                value: 100,
            },
            enable: true,
            speed: 2,
            direction: "bottom",
            straight: false,
            wobble: true,
        },
        wobble: {
            enable: true,
            distance: 5,
            speed: 1,
        },
        zIndex: {
            value: {
                min: 0,
                max: 100,
            },
            opacityRate: 10,
            sizeRate: 10,
            velocityRate: 10,
        },
    },
    background: {
        color: {
            value: "transparent",
          },
    },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);