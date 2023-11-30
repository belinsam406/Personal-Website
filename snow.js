const lightTheme = {
    name: "SnowLight",
    fpsLimit: 240,
    particles: {
        number: {
            value: 100,
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
            value: "#89cfeb",
          },
    },
};

const darkTheme={
    name: "SnowDark",
    fpsLimit: 240,
    particles: {
        number: {
            value: 100,
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
            value: "#145a76",
          },
    },
};



// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", lightTheme);


let tp = document.getElementById("tsparticles");
window.addEventListener("scroll", (e) => {
    const scrollAmount = window.scrollY;
    //write something in here that would detect if the page can scroll or not
    //possibly check if the body has a class of scrollable
    tp.style.transform = `translateY(${scrollAmount}px)`;

});