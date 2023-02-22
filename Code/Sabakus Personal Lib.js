//questo programma in javascript è stato fatto per facilitare la creazione dei miei futuri programmi
//i nomi delle variabili dovrebbero essere tutti inglesi, non i commenti però. Non sono ancora abbastanza fluente per farli in inglese.
//dire che è scritta da cani sarebbe un insulto verso di loro.
function getDati(userInputsClass){ //prende una classe in cui sono contenuti degli input e restituisce i suoi valori associati al nome del loro id 
    inputsArr = document.getElementsByClassName(userInputsClass)
    inputsClass = {}
    for(i=0;i<inputsArr.length;i++){
        if (inputsArr[i].type == "radio" && !inputsArr[i]             ){ //skippa se il radio button non è attivo
            continue 
        }
        Object.defineProperty(inputsClass,inputsArr[i].id, {value:inputsArr[i].value})

    }
    UserInputObj = inputsClass
    return UserInputObj
}

function getGridFromSides(widthLength,heightLength,idgrid){ //prende la larghezza, l'altezza e l'id di una griglia e ritorna un oggetto contenente il rispettivo numero di righe e celle (e altre informazioni)
    grid = document.getElementById(idgrid)
    rowArr = []
    ElCells = []

    for(i=0;i<heightLength;i++){
        rowArr.push(grid.insertRow())

        for(j=0;j<widthLength;j++){
            ElCells.push(rowArr[i].insertCell())

        }
    }
    ObjrowCells = {row:{elements:rowArr, quantity:heightLength},cells:{elements:ElCells,rowLength:widthLength,quantity:ElCells.length}}

    return ObjrowCells
}

function clsTabella(idOBJ){ //funziona solo con gli elementi che hanno la proprietà innerHTML
    grid = document.getElementById(idOBJ)
    document.getElementById(idOBJ).innerHTML=""
}

function doThisFuncToAll(ObjArray,thisfunction,parameterArray){ //prende un array di oggetti, gli aggiunge la funzione specificata, e poi esegue la funzione secondo i paramentri indicati
    for (const el of ObjArray) { //non ho la minima idea di cosa faccia sta roba, avevo un altra versione ma Barban mi ha impedito fisicamente di usarla
        thisfunction.apply(el, parameterArray)
    }
    return ObjArray
}

function assignmentToAll(OBJArr,ObjSetAttributeVar,Value){ //boh non funziona come vorrei, ma dovrebbe aggiungere un elemento di nome specificato con un valore assegnato specificato all'oggetto specificato e farlo a tutti gli elementi dell'array
    for(i=0;i<OBJArr.length;i++){
        OBJArr[i][ObjSetAttributeVar] = Value
    }
    return OBJArr
}

function innerHTMLToAll(OBJArr,Value){
    for(i=0;i<OBJArr.length;i++){
        OBJArr[i].innerHTML = Value
    }
    return OBJArr
}
function makeGridArray(xLenght,ylenght){ //crea un array bidimensionale 
    ArrayGrid = Array(xLenght)
    for(i=0;i<xLenght;i++){
        ArrayGrid[i] = Array(ylenght)
    }
    
    return ArrayGrid
}

/*function QFor(forContent,ForEnd){ //sta per Quick For. prende due argomenti: il contenuto del for, e il valore di cui i deve rimanere maggiore
    for(i=0;i<ForEnd;i++) forContent
 }*/ //Al momento la funzione non funziona come vorrei (se addirittura funziona) dovrei impratichirmi un po di più

function AssociateGrids(virtualGrid,virtualGridWidth,virtualGridHeight,PhysicalElements){ //associa tutti gli elementi forniti in un array monodimensionale ad un array bidimensionale 
    cellcount = 0
    for(i=0;i<virtualGridWidth;i++){
        for(j=0;j<virtualGridHeight;j++){
            virtualGrid[i][j] = PhysicalElements[cellcount]
            cellcount++
        }
    }
    return virtualGrid
}

function getRandInt(End,Start){ //prende come argomenti la fine e l'inizio di un range e genera un numero casuale all'interno del range (se l'inizio del range è omesso si darà per scontato che sia zero)
    if (Start == undefined){ //nel range il numero End è compreso (es: se End = 25; RandomNum potrebbe essere 25 )
        Start = 0
    }
    Delta = End - Start
    RandomNum = Math.round((Math.random()*Delta))+Start
    return RandomNum
}

function unMap(ElementNum,GridWidth,gridHeight){ //prende un numero decimale e prova a ottenerne delle coordinate bidimensionali avendo l'altezza e larghezza della "griglia" bidimensionale
    X = 0
    Y = 0
    Y = Math.floor(ElementNum/GridWidth)
    X = ElementNum%GridWidth
    return [Y,X]
}

function fromNegativeToEndOfArray(negativeIndex,arrayLenght){ //prende l'indice negativo dell'array e lo converte in modo da ritornare un indice positivo che parte dalla fine dell'array? (essenzialmente Array.at())
    negativeIndex = parseInt(negativeIndex)
    arrayLenght = parseInt(arrayLenght)-1
    if(negativeIndex>=0){
        print(negativeIndex)
        return negativeIndex
    }else if (negativeIndex<0){
        negativeIndex *= (-1)
        print(arrayLenght - negativeIndex)
        return arrayLenght - negativeIndex
    }
}

function print(variable){ //non la usare, crea confusione sull'origine del console.log
    console.log(variable)
}

function pythonSelectElements(text,firstSeparator,lastSeparator){ // in python: a = stringa[5:9]
    element = ""
    for(let i=0;i<lastSeparator-firstSeparator;i++){
        element += text[firstSeparator+i]
    }
    return element
}

function populateSelect(SelectObj,textContentArr,valueArr){
    for(let el=0;el<valueArr.length;el++){
        sel = document.createElement("option")
        sel.textContent = textContentArr[el]
        sel.value = valueArr[el]
        SelectObj.appendChild(sel)
    }
    return SelectObj
}

function OrderArr(array){
    while(true){
        changes = false
        for(i=0;i<array.length-1;i++){
            if(array[i]<array[i+1]){
                tempvar = array[i]
                array[i] = array[i+1]
                array[i+1] = tempvar
                changes = true
            }
        }
        if (!changes){
            break
        }
    }
    return array
}

function createArrFromSeparator(text,separatorArr){
    lastSeparator = 0
    Arrays = Array(separatorArr.length)
    for(i=0;i<Arrays.length;i++){
        Arrays[i] = []
    }
    let nextSeparators = []
    brake == false
    while (brake){
        for (let j = 0; j < separatorArr.length; j++) {
            nextSeparators.push(Array.find(element => element==separatorArr[j]))
        }
        nextSeparator = OrderArr(nextSeparators)
        nextSeparator = nextSeparator[nextSeparator.length-1]
        UndefinedCount = 0
        for(i=0;i<nextSeparators.length;i++){
            if (nextSeparators[i] == undefined){
                UndefinedCount++
            }
            if(UndefinedCount == nextSeparators.length){
                brake = true
            }
            if(nextSeparators[i] == nextSeparator){
                SeparatorNum = i
            }
        }
        element = pythonSelectElements(text,lastSeparator,nextSeparator)
        text = pythonSelectElements(text,nextSeparator,text.length)
        Arrays[SeparatorNum].push(element)
    }
    return Arrays
}

function createArrInput(text,separatorArr,Amount){
    lastSeparator = 0
    Arrays = Array(Amount)
    for(i=0;i<Arrays.length;i++){
        Arrays[i] = []
    }
    let nextSeparators = []
    brake == false
    while (brake){
    for (let j = 0; j < separatorArr.length; j++) {
        nextSeparators.push(text.find(element => element==separatorArr[j]))
    }
    nextSeparator = OrderArr(nextSeparators)
    nextSeparator = nextSeparator[nextSeparator.length-1]
    UndefinedCount = 0
    for(i=0;i<nextSeparators.length;i++){
        if (nextSeparators[i] == undefined){
            UndefinedCount++
        }
        if(UndefinedCount == nextSeparators.length){
            brake = true
        }
        if(nextSeparators[i] == nextSeparator){
            SeparatorNum = i
        }
    }
    element = pythonSelectElements(text,lastSeparator,nextSeparator)
    text = pythonSelectElements(text,nextSeparator,text.length)
    Arrays[SeparatorNum].push(element)
    }
    return Arrays
}

function pollo(){ //possa il re di inghilterra perseguitarmi, io finirò questa funzione (eventualmente)
/*    a = "        ██  ██                                  
    ██▒▒████                                  
    ██▒▒▒▒▒▒██                                
  ██          ██                              
██░░  ██        ██                            
██░░░░            ██                        ██  
██▒▒      ░░      ██                    ██░░██
  ██░░░░░░██        ██                ██  ░░██
    ██████░░          ████████████  ██    ░░██
      ██░░                        ██░░    ░░██
      ██░░                      ██░░    ░░██  
        ██░░                      ████  ░░██  
        ██░░    ██                  ██  ░░██  
          ██░░  ░░██            ████  ░░██    
          ██░░    ░░████    ████░░░░  ░░██    
          ██░░      ░░░░████░░░░      ░░██    
            ██░░        ░░░░        ░░██      
              ████              ░░░░██        
                  ██░░░░░░░░░░░░████          
                    ████████████              
                        ██    ██              
                        ██    ██              
                      ████  ████              
"*/
}