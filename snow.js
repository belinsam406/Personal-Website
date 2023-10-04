const options = {
    name: "Snow",
    fpsLimit: 30,
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
    emitters: {
        position: {
            y: 0,
            x: 67
        },
        rate: {
            delay: 1,
            quantity: 1
        },
        size: {
            width: 1,
            height: 1
        },
        // particles: {
        //     move: {
        //         speed: 6,
        //         direction: "bottom",
        //         out_mode: "out",
        //         straight: false,
        //         outModes: {
        //             default: "destroy",
        //         }
        //     },
        //     wobble: {
        //         enable: true,
        //         distance: 20,
        //         speed: 1,
        //     },
        //     number: {
        //         value: 10,
        //         density: {
        //             enable: true,
        //         },
        //     },
        //     shape: {
        //         character: [
        //             {
        //                 fill: true,
        //                 font: "sans-serif",
        //                 value: ["🏂", "⛷️"],
        //                 style: "",
        //                 weight: 400
        //             }
        //         ],
        //         type: "char"
        //     },
        //     size: {
        //         value: 30,
        //     },
        // },
    },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);

let tp = document.getElementById("tsparticles");
window.addEventListener("scroll", (e) => {
    const scrollAmount = window.scrollY;
    tp.style.transform = `translateY(${scrollAmount}px)`;
});