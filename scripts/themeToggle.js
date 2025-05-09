document.getElementById("themeChange").onclick = function() {toggleDarkMode()};

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}