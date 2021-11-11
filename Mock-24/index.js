document.body.addEventListener('click', changeColor);

function changeColor(e) {
    const id =e.target.id;
    e.target.style.backgroundColor = id;
}
