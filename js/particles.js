class ParticleWithTargetAndColor {
    constructor(color, x, y, imgW, imgH){
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.imgW = imgW;
        this.imgH = imgH;

        this.startX = x;
        this.startY = y;

        this.centeredX = this.startX + w/2 - this.imgW;
        this.centeredY = this.startY + h/2 - this.imgH;

       

        this.endX = x;
        this.endY = y;

        this.r = 1;

        this.color = color;

        this.speed = 2;

        this.mouseR = 100;

        this.multiplayer = 1;

        this.fX = 0;
        this.fY = 0;
    }
    calculate(){
        let mX = mousePos.x - this.x;
        let mY = mousePos.y - this.y;

        let eX =  this.endX - this.x;
        let eY = this.endY - this.y;


        let distance = Math.sqrt(mX*mX + mY*mY)

        if(distance <= this.mouseR){
            let mF = this.mouseR/distance

            this.fX += -mX * mF * this.multiplayer;
            this.fY += -mY * mF * this.multiplayer;
        }

        this.fX += eX;
        this.fY += eY;

        this.fX -= this.fX * 0.2;
        this.fY -= this.fY * 0.2;

        this.x += this.fX * this.speed  * deltaTime;
        this.y += this.fY * this.speed  * deltaTime;
    }
    draw(){
        infoCtx.fillStyle = this.color;
        infoCtx.beginPath();
        infoCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        infoCtx.closePath();
        infoCtx.fill();

    }
    resize(x, y){
        this.endX += x;
        this.endY += y;
    }
    offsetFromCenter(x, y){
        this.centeredX = this.startX + w/2 - this.imgW;
        this.centeredY = this.startY + h/2 - this.imgH;
        
        this.endX = this.centeredX + x;
        this.endY = this.centeredY + y;
    }
    offsetFromRight(x, y){
        this.centeredX = this.startX + w/2 - this.imgW;
        this.centeredY = this.startY + h/2 - this.imgH;

        this.endX = this.centeredX + w/2 + x;
        this.endY = this.centeredY + y;
    }
}

class particleWithTarget{
    constructor(x, y){
        this.endX = x;
        this.endY = y;

        this.centeredX = x;
        this.centeredY = y;
        
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        
        this.r = 2;        

        this.speed = 1;
    }

    draw(){
        startCtx.fillStyle = 'white';
        startCtx.beginPath();
        startCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        startCtx.closePath();
        startCtx.fill();
    }

    calculate(){
        this.x += (this.endX - this.x) * this.speed * deltaTime;
        this.y += (this.endY - this.y) * this.speed * deltaTime;
    }
    resize(x, y){
        this.endX += x/2;
        this.endY += y/2;
        this.x += x/2;
        this.y += y/2;
    }
    offsetParticleFromCenter(x, y){
        this.endX = this.centeredX * 2 + x;
        this.endY = this.centeredY + y;
    }
}