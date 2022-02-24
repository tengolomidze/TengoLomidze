window.addEventListener('mousemove', (e) => {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
})

function MoveWithhmouse(object, multiplayer){
    window.addEventListener('mousemove', (e) => {
        if(w > 750){
            object.style.transform = "translate(" + e.pageX * multiplayer+ "px," + e.pageY * multiplayer + "px)"; 
        }
    })
}


MoveWithhmouse(smallInfoText, 0.05);