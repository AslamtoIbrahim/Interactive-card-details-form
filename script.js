const frontCard = document.getElementById('front-card');
const backCard = document.getElementById('back-card');

setDimensions();

function setDimensions() {
    const width = frontCard.offsetWidth;
    const height = frontCard.offsetHeight;
    backCard.style.width = width + 'px';
    backCard.style.height = height + 'px';
}


window.addEventListener('resize', setDimensions);