//written with help from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        console.log("dark theme");
        document.documentElement.setAttribute('data-theme', 'dark');
        tsParticles.load("tsparticles", darkTheme);
        localStorage.setItem('theme', 'dark'); //add this

    }
    else {
        console.log("light theme");
        document.documentElement.setAttribute('data-theme', 'light');
        tsParticles.load("tsparticles", lightTheme);
        localStorage.setItem('theme', 'light'); //add this

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);