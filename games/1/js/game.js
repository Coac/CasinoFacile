var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('button', 'assets/button.png');
    game.load.image('background','assets/bg.jpg');

}

var button;
var background;
var text;
var textWin;
var n1;
var n2;
var n3;
var min_ = 1;
var max_ = 9;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.sprite(0, 0,'background');
    background.width = 800;
    background.height = 600;


    button = game.add.sprite(game.world.centerX - 95, 400, 'button');
    button.width /= 2;
    button.height /= 2;
    button.anchor.set(0.5);

    button.inputEnabled = true;
    button.events.onInputOver.add(over, this);
    button.events.onInputOut.add(out, this);
    button.events.onInputUp.add(up, this);  

    var style = { font: "65px Arial", fill: "#00ffff", align: "center" };
    text = game.add.text(game.world.centerX, game.world.centerY, "", style);
    text.anchor.set(0.5);
    textWin = game.add.text(game.world.centerX, game.world.centerY + 200, "", style);

}

function up() {
    textWin.setText("");
    n1 = getRandomInt(min_, max_);
    n2 = getRandomInt(min_, max_);
    n3 = getRandomInt(min_, max_);
    game.time.events.add(100, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(200, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(300, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(400, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(500, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(600, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(700, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(800, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(900, function(){ text.setText( getRandomInt(min_, max_) + " " + getRandomInt(min_, max_) + " " + getRandomInt(min_, max_)); } );
    game.time.events.add(1000, 
        function(){ 
            text.setText( n1 + " " + n2 + " " + n3); 
            if(n1 == n2 && n1 == n3) 
                textWin.setText("GAGNE");
            else
                textWin.setText("PERDU");

        });
    
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;

}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}