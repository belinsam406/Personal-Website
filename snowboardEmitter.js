// const options = {
//     name: "Emitter Angled",
//     particles: {
//         number: {
//             value: 0,
//         },
//         color: {
//             value: "random",
//         },
//         shape: {
//             type: "emoji",
//             options: {
//                 emoji: "🏂", // The snowboard emoji
//             },
//         },
//         opacity: {
//             value: 0.3,
//         },
//         size: {
//             value: {
//                 min: 5,
//                 max: 10,
//             },
//         },
//         move: {
//             angle: {
//                 offset: 0,
//                 value: 30,
//             },
//             enable: true,
//             speed: 15,
//             direction: "bottom",
//             outModes: {
//                 default: "destroy",
//             },
//         },
        
//     },
//     background: {
//         color: "#transparent",
//     },
//     emitters: [
//         {
//             direction: "top",
//             position: {
//                 x: {
//                     min: 25,
//                     max: 75,
//                 },
//                 y: 100,
//             },
//             life: {
//                 duration: 3,
//                 delay: 5,
//                 count: 0,
//             },
//         },
//     ],
// };
// tsParticles.load("tsparticles2", options);
tsParticles.load("tsparticles2", {
    particles: {
        number: {
            value: 0, // Start with no particles initially
            max: 100, // Maximum number of particles to emit
        },
        size: {
            value: 32, // Size of the particles
        },
        shape: {
            type: "emoji",
            options: {
                emoji: "🏂", // The snowboard emoji
            },
        },
        move: {
            enable: true,
            speed: 1, // Speed of the particles
            direction: bottom,
            random: false,
            outmode: "out",
        },
        opacity: {
            value: 1, // Opacity of the particles
        },
        rotate: {
            value: 0, // Disable rotation of the particles
        },
        
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: true,
        },
    },
    detectRetina: true,
});

// Emit particles from a static point
tsParticles.domItem(0).particles.number.value = 1; // Start with one particle
tsParticles.domItem(0).particles.move.direction = "bottom"; // Disable particle movement
tsParticles.domItem(0).particles.move.enable = true; // Disable particle movement
tsParticles.domItem(0).particles.shape.options.emoji = "🏂"; // The snowboard emoji
tsParticles.domItem(0).particles.move.x = 500; // X-coordinate of the static point
tsParticles.domItem(0).particles.move.y = 300; // Y-coordinate of the static point
