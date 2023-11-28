//written with help from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        console.log("dark theme");
        document.documentElement.setAttribute('data-theme', 'dark');
        tsParticles.load("tsparticles", darkTheme);
    }
    else {
        console.log("light theme");
        document.documentElement.setAttribute('data-theme', 'light');
        tsParticles.load("tsparticles", lightTheme);
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

//storing the decision for future visits
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}

