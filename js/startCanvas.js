const startCanvas = document.querySelector("#startCanvas");
const startCtx = startCanvas.getContext("2d");

startCanvas.height = window.innerHeight;
startCanvas.width = window.innerWidth;

let data;

let startCanvasParticlesArray = [];

function startCanvasFunction(){
    

    function getTextData(text){
        let size = 20;

        startCtx.fillStyle = "white";
        startCtx.font = size + "px Verdana";
        startCtx.fillText(text, 0, size - size/4);
        data = startCtx.getImageData(0, 0, text.length * 11.5, 15);
        //ctx.strokeStyle = "white";
        //ctx.strokeRect(0,0, text.length * 12, 14)
        startCtx.clearRect(0, 0, w, h);
    }

    function push(i){
        for(let y = 0; y < data.height; y++){
            for(let x = 0; x < data.width; x++){
                if(data.data[(y * 4 * data.width) + (x * 4) + 3] > 0){
                    let width = data.width * i;
                    let height = data.height * i; 

                    let X = x * i + w/2 - width/2;
                    let Y = y * i + h/2 - height/2;
                    startCanvasParticlesArray.push(new particleWithTarget(X,Y));
                }
            }
        }
    }

    function update(){
        startCtx.fillStyle = "rgba(0, 0, 0, 1)"
        startCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        //ctx.clearRect(0, 0, w, h);
        startCtx.strokeStyle = "white";
        startCtx.lineWidth = 0.5;


        for(let i = 0; i < startCanvasParticlesArray.length; i++){
            startCanvasParticlesArray[i].draw();
            startCanvasParticlesArray[i].calculate();
        }
        for(let i = 0; i < startCanvasParticlesArray.length; i++){
            for(let j = i; j < startCanvasParticlesArray.length; j++){
                let x = startCanvasParticlesArray[i].x - startCanvasParticlesArray[j].x;
                let y = startCanvasParticlesArray[i].y - startCanvasParticlesArray[j].y; 

                let distance = Math.sqrt(x * x + y * y)

                if(distance < 25){
                    startCtx.beginPath();
                    startCtx.moveTo(startCanvasParticlesArray[i].x, startCanvasParticlesArray[i].y);
                    startCtx.lineTo(startCanvasParticlesArray[j].x, startCanvasParticlesArray[j].y);
                    startCtx.closePath();
                    startCtx.stroke();
                }
            }
        }
        if(!stop){
            window.requestAnimationFrame(update);
        }
    }

    let stop = false
    getTextData('TL')
    push(16);
    update();

    setTimeout(function (){
        startCanvas.style.left = "-145vw";
        startCanvas.style.top = "-160vh";
        startCanvas.style.transform = "scale(-1)";
    }, 7000);

    setTimeout(function (){
        stop = true;
    }, 7000);
}