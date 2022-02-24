let lastUpdate = Date.now();
let deltaTime
function tick() {
    window.requestAnimationFrame(tick);

    let now = Date.now();
    deltaTime = (now - lastUpdate)/1000;

    lastUpdate = Date.now();
}

tick();