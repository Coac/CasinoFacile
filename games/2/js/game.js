var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('button', 'assets/button.jpg');
    game.load.image('banane', 'assets/bg.jpg');
    game.load.image('ticket', 'assets/ticket.png');


}

var sprite;
var mask;
var x=0;
var y=0;
var ticket;
var text;

function create() {

    sprite = game.add.sprite(0, 0, 'banane');
    sprite.scale.set(2);
    ticket = game.add.sprite(0, -1, 'ticket');
    ticket.width  = 802;
    ticket.height = 602;

    var style = { font: "65px Arial", fill: "#000000", align: "center" };

    text = game.add.text(game.world.centerX, game.world.centerY +200, "", style);

    text.anchor.set(0.5);


    mask = game.add.graphics(0, 0);

    mask.beginFill(0xffffff);

    mask.drawCircle(100, 100, 100);
    
  

    button = game.add.sprite(game.world.centerX + 300 , 50, 'button');
    button.inputEnabled = true;
    button.events.onInputUp.add(up, this);
    button.anchor.set(0.5);
    button.width  /=10;
    button.height /= 10;


    //game.time.events.add(1000, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(100, 100, 200);});
    //game.time.events.add(200, function(){ mask.clear(); mask.drawCircle(100, 100, 300);});
    //game.time.events.add(300, function(){ mask.clear(); mask.drawCircle(100, 100, 400);});
    //game.time.events.add(400, function(){ mask.clear(); mask.drawCircle(100, 100, 500);});
    


    sprite.mask = mask;

    restart();


}

function restart() {
    if(Math.random() > 0.5)
        text.setText("Perdu");
    else
        text.setText("Gagné");

    mask.clear();
    game.time.events.stop();
    game.time.events.start();
    console.log("aa");

}

function up() {
    restart();

}

function update() {
    if(game.input.mousePointer.isDown) {
        x = game.input.x;
        y = game.input.y;
        game.time.events.add(50, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 50);});
        game.time.events.add(100, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 100);});
        game.time.events.add(150, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 150);});
        game.time.events.add(200, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 200);});
        game.time.events.add(250, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 250);});
        game.time.events.add(300, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 300);});
        game.time.events.add(350, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 350);});
        game.time.events.add(400, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 400);});
        game.time.events.add(450, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 450);});
        game.time.events.add(500, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 500);});
        game.time.events.add(550, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 550);});
        game.time.events.add(600, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 600);});
        game.time.events.add(650, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 650);});
        game.time.events.add(700, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 700);});
        game.time.events.add(750, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 750);});
        game.time.events.add(800, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 800);});
        game.time.events.add(850, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 850);});
        game.time.events.add(900, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 900);});
        game.time.events.add(950, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 950);});
        game.time.events.add(1000, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 1000);});
        game.time.events.add(1050, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 1050);});
        game.time.events.add(1100, function(){mask.clear(); mask.beginFill(0xffffff); mask.drawCircle(x, y, 1100);});

    }
}

