const chalk = require('chalk');
const say = require('say');
const fs = require('fs');
let beep = require('beepbeep')
let array = fs.readFileSync("./text.txt",'utf-8').toString().split("\n");
const getRandomColor = (str) => {
    const colors = ["red", "blue", "green", 'white', 'magenta', 'yellow', 'greenBright', 'whiteBright', 'cyanBright', 'magentaBright', 'blueBright'];
    console.log(chalk[colors[Math.floor(Math.random() * colors.length)]](str));
};
array.forEach(getRandomColor);
//console.log("\x07");
beep();
setTimeout(sayName, 1000);
function sayName() {
    say.speak(array)
}
/*say.speak(array)/*,  'Agnes',1.0, (err)=>{
    if(err) throw err;
    console.log("\x07");
});*/

/*
let player = require('play-sound')(opts ={})
player.play('./true.mp3', function(err){
    if (err) throw err
    console.log("audio finished");
})*/

//let audio = require('audio');
/*let audio = new Audio('6_sto-k-odnomu-ne-pra_ilnyy-ot_et (1).mp3');
audio.play();*/
/*
player.play('pole-chudes-priz.mp3', function (err) {
    if(err) throw err;
    console.log("audio finished");
})
*/

//const audio = new Audic("pole-chudes-priz.mp3");
//audio.play();
