var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('button', 'assets/button.png');
    game.load.image('background','assets/bg.jpg');

    game.load.image('1','assets/1.png');
    game.load.image('2','assets/2.jpg');
    game.load.image('3','assets/3.png');
    game.load.image('4','assets/4.jpg');
    game.load.image('5','assets/5.jpg');


}

var button;
var background;
var text;
var textWin;
var n1;
var n2;
var n3;
var min_ = 1;
var max_ = 5;
var slot1;
var slot2;
var slot3;

function create() {

    game.stage.backgroundColor = '#182d3b';

    background = game.add.sprite(0, 0,'background');
    background.width = 800;
    background.height = 600;


    button = game.add.sprite(game.world.centerX, 500, 'button');
    button.width /= 2;
    button.height /= 2;
    button.anchor.set(0.5);

    button.inputEnabled = true;
    button.events.onInputOver.add(over, this);
    button.events.onInputOut.add(out, this);
    button.events.onInputUp.add(up, this); 


    slot1 = game.add.sprite(game.world.centerX -200, game.world.centerY - 50, '1');
    slot2 = game.add.sprite(game.world.centerX, game.world.centerY - 50, '2');
    slot3 = game.add.sprite(game.world.centerX + 200, game.world.centerY - 50, '3');

    slot1.anchor.set(0.5);
    slot2.anchor.set(0.5);
    slot3.anchor.set(0.5);

    slot1.width = 150;
    slot1.height = 150;
    slot2.width = 150;
    slot2.height = 150;
    slot3.width = 150;
    slot3.height = 150;




    var style = { font: "65px Arial", fill: "#000000", align: "center" };
    text = game.add.text(game.world.centerX, game.world.centerY, "", style);
    text.anchor.set(0.5);
    textWin = game.add.text(game.world.centerX, game.world.centerY - 200, "", style);
    textWin.anchor.set(0.5);

}

function up() {
    textWin.setText("");
    n1 = getRandomInt(min_, max_);
    n2 = getRandomInt(min_, max_);
    n3 = getRandomInt(min_, max_);
    game.time.events.add(100, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    
    game.time.events.add(200, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(300, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(400, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(500, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(600, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(700, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(800, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(900, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
    game.time.events.add(1000, function(){ slot1.loadTexture(getRandomInt(min_, max_) + ""); slot2.loadTexture(getRandomInt(min_, max_) + ""); slot3.loadTexture(getRandomInt(min_, max_) + "");} );
   
    game.time.events.add(1100, 
        function(){ 
            slot1.loadTexture(n1 + "");
            slot2.loadTexture(n2 + "");
            slot3.loadTexture(n3 + "");
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