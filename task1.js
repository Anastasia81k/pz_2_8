const fs = require("fs");

let writeableStream = fs.createWriteStream("stream.txt");
writeableStream.write(getDate());
writeableStream.write("Продовження запису " + "\n");
writeableStream.end("Завершення запису");
let readableStream = fs.createReadStream("stream.txt", "utf8");

readableStream.on("data", function(chunk){
    console.log(chunk);
});
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
