const frontCard = document.getElementById('front-card');
const backCard = document.getElementById('back-card');

function setDimensions() {
    const width = frontCard.offsetWidth;
    const height = frontCard.offsetHeight;
    backCard.style.width = width + 'px';
    backCard.style.height = height + 'px';
}

setDimensions();

window.addEventListener('resize', setDimensions);