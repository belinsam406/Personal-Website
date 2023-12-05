const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

const backgroundTheme = {
    name: "SnowLight",
    fpsLimit: 240,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                area: 400
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
// lightTheme.background.color = "#89cfeb";
tsParticles.load("tsparticles", backgroundTheme);

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');

    }
    else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

let tp = document.getElementById("tsparticles");
var canvas = tp ? tp.querySelector('.tsparticles-canvas-el') : null;
var canvasHeight = 0;

window.addEventListener("scroll", (e) => {
    if(canvas){
        canvasHeight = canvas.height+10;
    }
    // need to figure out how to add 110px
    const scrollAmount = window.scrollY;
    if(scrollAmount <= (canvasHeight+110)){
        console.log("scroll Amount: "+scrollAmount+"\ncanvas Height: "+canvasHeight+"\ninnerHeight: "+window.innerWidth)
        tp.style.transform = `translateY(${scrollAmount}px)`;
    }else{ 
        console.log("stopped");
    }

});