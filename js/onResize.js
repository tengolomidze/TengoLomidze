window.addEventListener('resize', () => {
    let x = window.innerWidth - w;
    let y = window.innerHeight - h;

    w = window.innerWidth;
    h = window.innerHeight;

    resize(startCanvas, startCanvasParticlesArray, x, y);
    resizeCanvas(infoCanvas)
    updateInfoCanvasPosBySize();
})

function offsetParticleFromCeter(array, offsetX,offsetY){
    for (let i = 0; i < array.length; i++) {
        infoCanvasParticlesArray[i].offsetFromCenter(offsetX, offsetY);
    }
}
function offsetParticleFromRight(array, offsetX,offsetY){
    for (let i = 0; i < array.length; i++) {
        infoCanvasParticlesArray[i].offsetFromRight(offsetX, offsetY);
    }
}


function resize(canvas, array, x, y){
    canvas.width = w;
    canvas.height = h;
    for (let i = 0; i < array.length; i++) {
        array[i].resize(x, y);
    }
}

function resizeCanvas(canvas){
    canvas.width = w;
    canvas.height = h;
}