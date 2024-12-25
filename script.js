const frontCard = document.getElementById('front-card');
const backCard = document.getElementById('back-card');
const leftSide = document.getElementById('left-side');

setImageBackground();
setDimensions();

function setDimensions() {
    const width = frontCard.offsetWidth;
    const height = frontCard.offsetHeight;
    backCard.style.width = width + 'px';
    backCard.style.height = height + 'px';
}

function setImageBackground(){
    const background = window.innerWidth > 760 
    ? "url('images/bg-main-desktop.png')" 
    : "url('images/bg-main-mobile.png')";
    leftSide.style.backgroundImage = background;
}


window.addEventListener('resize', () =>{
    setImageBackground();
    setDimensions();  
    
});

