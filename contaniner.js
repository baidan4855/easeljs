stage = new createjs.Stage("gameView");
gameView = new createjs.Container();

stage.addChild(gameView);

var man = createMan(0,0,{
    "images": ["player.png"],
    "frames": {"regX": 0, "height": 48, "count": 16, "regY": 0, "width": 32},
    "animations": {
        "rundown": [0, 3, "rundown"],
        "runleft": [4, 7,"runleft"],
        "runright": [8,11,"runright"],
        "runup": [12,15,"runup"],
        "stopdown": [0, 0],
        "stopleft": [4, 4],
        "stopright": [8,8],
        "stopup": [12,12]
    }
});


window.addEventListener("keydown",function(event){
    event=event || window.event;
    switch (event.keyCode){
        case 37:
            man.run("left");
            break;
        case 39:
            man.run("right");
            break;
        case 38:
            man.run("up");
            break;
        case 40:
            man.run("down");
            break;
    }
})
window.addEventListener("keyup",function(event){
    event=event || window.event;
    if(event.keyCode>=37 && event.keyCode<=40)
        man.stop(event.keyCode);
})
function tick(event){
    man.update();
    stage.update(event);
}
createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.setFPS(30);//舞台帧率控制
createjs.Ticker.addEventListener("tick", tick);