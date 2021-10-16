var fs = require('fs');

let filetoRead = 'C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt'
let filetoWrite = 'C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\writeMe.txt' 
let filetoWriteNew = 'C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\writeMeNew.txt'

//Syncronous Method
/*
var readMe = fs.readFileSync('C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt','utf-8');
    console.log(readMe);
fs.writeFileSync('C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\writeMe.txt', readMe);
*/
//Assyncronous Method
//read file

/*
fs.readFile(filetoRead, 'utf-8', function(err, data){
    console.log(data);
})

console.log('test');
*/

//write file
fs.readFile(filetoRead, 'utf-8', function(err, data){
    fs.writeFile(filetoWriteNew, 'novos dados', function(err, result) {
        if(err) console.log('error', err)
    })
})
