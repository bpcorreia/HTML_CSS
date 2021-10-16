function Save() {
    let ficheiro = document.getElementById("file").value
    let texto = document.getElementById("text").value

    let blob = new Blob([texto],
        {
        type: "text/plain;charset-utf-8"
        
        })
    
    //metodo do fileSaver
    saveAs(blob, ficheiro + ".txt") 
}