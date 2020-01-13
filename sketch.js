var canvas, database , position, gamestate, playercount,form ,player, game,allplayer,distance=0;
gamestate = 0;
function setup(){
    database = firebase.database();
    canvas = createCanvas(500,500);
   game = new Game();
   game.getstate();
   game.start();
}

function draw(){
if(playercount=== 4){
game.update(1);
}
if(gamestate ===  1){
    clear();
    game.play();
}
}
