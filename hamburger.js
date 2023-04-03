let ham = document.getElementById('menu-toggle');
let container = document.getElementsByClassName('cointner-1')[0];
let navtext = document.getElementById('navtext');

ham.addEventListener('click', () => {
    if (navtext.style.display == 'block') {
        navtext.style.display = 'none';
        container.style.height = '4vh';
    }
    else {
        container.style.height = '45vh';
        navtext.style.display = 'block';
    }
})