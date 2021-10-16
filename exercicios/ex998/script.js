
function Submit() {
    //debugger
    let nome = document.getElementById('txtNome').value
    let apelido = document.getElementById('txtApelido').value
    debugger
    var res = document.getElementById('res')

    //window.alert ("Nome : " + nome + " " + apelido)
    
    res.innerHTML = "Nome: " + nome + " " + apelido

    
}
function Write(){
    debugger

// FUNCIONA em IE
// escreve em file

/*
   var fso = new ActiveXObject("Scripting.FileSystemObject")
   var filename = "C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt"

   fso.CreateTextFile(filename)

   var file = fso.GetFile(filename)
   var sWrite = file.OpenAsTextStream(2)

   sWrite.WriteLine("Bruno")
   sWrite.Write("Pedro")
   sWrite.Write("Correia")
   sWrite.Close()
    
 */
   
/// read from file
/*
var txtFile = "C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt"
var file = new File(["txtFile"],txtFile);


file.open("r"); // open file with read access
var str = "";
while (!file.eof) {
	// read each line of text
	str += file.readln() + "\n";
}
file.close();
alert(str);


   let txtFile = "C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt"
   let file = new File(["txtFile"],txtFile)
   let str = "O meu primeiro texto inserido num ficheiro com Javascript!!"

    
   //file.open("w")
   file.writeln("First line of text");
   file.writeln("Second line of text " + str);
   file.write(str);
   file.close();
    
    */
  
/*
   let filetoRead = 'C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\texto.txt'
   let filetoWrite = 'C:\\Data\\Programacao\\HTML_CSS\\exercicios\\ex998\\writeMe.txt' 
   let filetoWriteNew = 'writeMeNew'
   */

   let nome = document.getElementById('txtNome').value
   let apelido = document.getElementById('txtApelido').value
   let ficheiro = document.getElementById('txtFile').value

    let blob = new Blob([nome," " ,apelido],
    {   
        type: "text/plain;charset-utf-8"
    })

    //metodo do fileSaver.js
    saveAs(blob, ficheiro + ".txt" )
}