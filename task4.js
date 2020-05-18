const readline = require('readline');
const fs = require('fs');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Оберіть дію: \n1. Розпочати гру. Натисніть 'start' \n2. Переглянути резельтати 'show'  "
})


rl.prompt();
rl.on('line', (line)=>{
    switch (line.trim()) {
        case 'start':
            console.log(`Гру розпочато. Оберіть 1 - Орел, 0 - решка`)
            startGame();
            break;
        case 'show':
            console.log(`Переглянути всі результати`)
            showResults();
            break;
        /*default:
            console.log("Ви помилились при вводі значення")*/
    }
}).on('close', () => {
    console.log('Допобачення!');
    process.exit(0);
});
let sideCoin = [["1", "Орел"], ["0", "Решка"]];

function startGame() {
    rl.on('line', (input)=> {
        let inFile ="";
        let rand = Math.floor(Math.random() * sideCoin.length);
        if (input === 'stop') {
            rl.prompt();
        } else {
            if ((input === '1') || (input === '0')) {
                console.log('Ви обрали "' + input + '", Автоматично обрано "' + sideCoin[rand][0] + '"');
                if (input === sideCoin[rand][0]) {
                    console.log('Урааа! Ви вгидали!');
                    inFile = 'Ви обрали "' + input + '", Автоматично обрано "' + sideCoin[rand][0] + '"' + getDate() + ' - ви вгадали '+ '\n';
                } else {
                    console.log('Упс. Вы не вгадали.');
                    inFile = 'Ви обрали "' + input + '", Автоматично обрано "' + sideCoin[rand][0] + '" ' + getDate() +  ' - ви не вгадали ' + '\n';
                }
                fs.appendFile('results.txt', inFile , (err)=>{
                    if(err) throw  err;
                });

            }
            else {
                console.log("Ви помилились при вводі значення");
            }
        }
    })
}

    function showResults() {
        const rlFile = readline.createInterface({
            input: fs.createReadStream('results.txt'),
            crlfDelay: Infinity
        });
        rlFile.on('line', (line) => {
            console.log( line);
        });
    }


function getDate(){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth() +1;
    let year = now.getFullYear();
    let data = `${day}.${month}.${year} ${hour}:${minutes}:${seconds} `;
    return data;
}

