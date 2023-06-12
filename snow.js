const options = {
    name: "Snow",
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#000000",
        },
        shape: {
            type: "images",
            options:{
                images:[
                    {
                        src:"https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png",
                        // src:"https://www.pngmart.com/files/11/Christmas-Black-Snowflake-PNG-Picture.png",
                        width: 20,
                        height: 20
                        
                    }
                ]
            }
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

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("tsparticles", options);