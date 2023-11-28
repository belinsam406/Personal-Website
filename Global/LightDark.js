//this is where i will put the code for light and dark mode switching

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("dark theme");
        // tsParticles.load("tsparticles", darkTheme);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        console.log("light theme");
        // tsParticles.load("tsparticles", lightTheme);
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

