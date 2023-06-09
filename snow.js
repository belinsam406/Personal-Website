const options = {
    name: "Snow",
    particles: {
        number: {
            value: 400,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 2,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            straight: false,
            wobble: true,
        },
        wobble: {
            enable: true,
            distance: 10,
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
        color: "#000000",
    },
    
};
// move: {
        //     enable: true,
        //     speed: .8,
        //     direction: "bottom",
        //     random: true,
        //     straight: false,
        //     outMode: "out",
        //     bounce: true,
        //   },

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);