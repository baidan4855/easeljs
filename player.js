(function(w){
    var FRAME_RATE = 30;   //精灵表播放速度
    var direction = {"left":37,"up":38,"right":39,"down":40};
    var Man = function(x , y , sprite){
        this.x = x;
        this.y = y;
        this.state = "stop";
        this.face = "down";
        this.init(sprite);
    }

    Man.prototype = {
        constructors:Man,

        init:function(sprite){
            var manSpriteSheet = new createjs.SpriteSheet(sprite);
            this.sprite = new createjs.Sprite(manSpriteSheet , "stopdown");　　//实例化精灵
            this.sprite.framerate = FRAME_RATE;　　　　　　//精灵表绘制速率
            this.sprite.setTransform(this.x, this.y);　　//设置精灵的位置
            gameView.addChild(this.sprite);　　　　//添加到舞台
        },

        update:function(){
            var sprite = this.sprite;
            var time = createjs.Ticker.getInterval()/1000;　　　　//获取当前帧与上一帧的时间间隔
            if(this.state==="run"){
                switch (direction[this.face]){
                    case 37:
                        this.x-=time*30;
                        break;
                    case 39:
                        this.x+=time*30;
                        break;
                    case 38:
                        this.y-=time*30;
                        break;
                    case 40:
                        this.y+=time*30;
                        break;
                }
                sprite.x=this.x;
                sprite.y=this.y;
            }
        },

        run:function(dir){
            this.state='run';
            this.face=dir;
            if(this.state!='run' || this.face!='dir'){
                this.sprite.gotoAndPlay("run"+dir);
            }
        },
        stop:function(kcode){
            if(kcode==direction[this.face]){
                this.state="stop";
                this.sprite.gotoAndPlay("stop"+this.face);
            }
        }
    }

    w.createMan = function(x , y , img){
        return new Man(x , y , img)
    };
})(window);