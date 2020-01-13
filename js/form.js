class Form{
constructor(){
    this.input=createInput("name")
    this.button = createButton("play");
    this.greeting = createElement('h3')
}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
    var title = createElement('h2')
    title.html("CarRace")
    title.position(250,20)
    
    this.input.position(450.34,364.74)
    this.button.position(450.34,384.74);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
 player.name = this.input.value();
 playercount += 1
 player.index=playercount
player.update();
player.updateCount(playercount)
this.greeting.html("hello "+ player.name)
this.greeting.position(430.34,304.74)

    })
}

}
