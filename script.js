let shape1 = document.getElementById('hill1'); 
let shape2 = document.getElementById('hill2');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    shape1.style.bottom = value * 0.161 + 'px';
    shape2.style.bottom = value * 0.08 + 'px';
});