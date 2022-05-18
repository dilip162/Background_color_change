const btn = document.querySelector('.btn');

let random = function () {
    return (Math.floor(Math.random() * 256));
}



let changeBackground = function () {
    const rancol = `rgb(${random()},${random()},${random()}`;
    document.body.style.backgroundColor = rancol;
}

btn.addEventListener('click', changeBackground);
