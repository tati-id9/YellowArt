const button = document.querySelector('.hamburger__button');

let press = document.querySelector('.hamburger__nav').style.display = 'none';
press = true;

button.onclick = () => {
    if (press == true) {
        document.querySelector('.hamburger__nav').style.display = 'block';
    } else {
        document.querySelector('.hamburger__nav').style.display = 'none';
    }
    press = !press;
}
