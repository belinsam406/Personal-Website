//written with help from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        tsParticles.load("tsparticles", darkTheme);
    }
}


function switchTheme(e) {
    if (e.target.checked) {
        // console.log("dark theme");
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        tsParticles.load("tsparticles", darkTheme);

    }
    else {
        // console.log("light theme");
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        tsParticles.load("tsparticles", lightTheme);

    }
}

toggleSwitch.addEventListener('change', switchTheme, false);