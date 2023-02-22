userInputClass = "userInput"
SelectObj = document.getElementById("Comune")

function Main(){
    readTextFile()
    datiUtente = getDati(userInputClass)
    print(populateSelect(SelectObj,ComuniNomi,ComuniCodici))
}

function readTextFile(Filepath) { //rubato da stackOverflow
    Filepath = "MiscFiles\comuni2.txt"
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", Filepath, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        console.log(createArrFromSeparator(allText,[",","\n"]))
      }
    }
}
