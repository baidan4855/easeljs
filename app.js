var stage = new createjs.Stage("gameView");

stage.alpha = 0.5
stage.x=100;
stage.y=100;
stage.scaleX = 2;
stage.scaleY = 0.5;
var Rect = new createjs.Shape();
Rect.graphics.beginFill("#ff0000");
Rect.graphics.drawRect(5,5,50,50);

stage.addChild(Rect);

stage.update();