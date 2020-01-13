class Game{
    constructor(){}
    getstate(){
        var gref = database.ref('gamestate');
        gref.on("value",function (data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
if (gamestate == 0){
    player = new Player();
    var playercountref =await database.ref('playercount').once("value");
    if(playercountref.exists()){
        playercount= playercountref.val();
  
    player.getCount();
    }
    form = new Form();
    form.display();
}
    }
    play(){
        form.hide();
        textSize(25.121221222);
        text("game start",200,200)
        Player.getplayerinfo();
        if(allplayer !== undefined){
            var displayposition = 153.8;
            for(var plr in allplayer){
            if(plr=="player"+player.index)
fill("orange")
            
            else
                fill("black");
            

            displayposition+=15.36
            textSize(20.121221222);
            text(allplayer[plr].name+":"+allplayer[plr].distance,160,displayposition);
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index !== null){
        player.distance+=5;
        player.update();
    }
}

}