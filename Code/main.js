userInputClass = "userInput"
SelectObj = document.getElementById("Comune")
ResultObj = document.getElementById("Risultato")
populateSelect(SelectObj,comuni,catasti) //comuni e catasti sono dichiarati nel file Code/comuniArr.js


function Main(){
  datiUtente = getDati(userInputClass)
  cancontinue = VerifyUserData(datiUtente)
  if(!cancontinue){
    console.error("c'è stato un errore nel controllo dei dati, verificare che siano giusti.")
    alert("c'è stato un errore nel controllo dei dati, verificare che siano giusti.")
    return
  }
  elaboratedData = ElaboratedData(datiUtente)
    Implant(elaboratedData)
}

function Implant(elaboratedData){
  ResultObj.innerHTML = elaboratedData
}
function VerifyUserData(UserData){
  cancontinue = true
  print(Object.getOwnPropertyNames(UserData))
  Object.getOwnPropertyNames(UserData).forEach(key => {
    print(key)
    print(UserData[key])
    if(UserData[key] == undefined || UserData[key] == ""){
      cancontinue = false
    }
  })
  return cancontinue
}

function ElaboratedData(datiUtenteObj){

  Nome = elaborateNomeOCognome(datiUtenteObj.Nome.toUpperCase())
  Cognome = elaborateNomeOCognome(datiUtenteObj.Cognome.toUpperCase())
  AnnoMese = elaborateAnnoMese(datiUtenteObj.Nascita) 
  Sesso = elaborateSesso(datiUtenteObj.Sesso,datiUtenteObj.Nascita)
  Comune = ElaborateComune(datiUtenteObj.Comune)
  StringaAssemblata = Cognome+Nome+AnnoMese+Sesso+Comune
  StringaAssemblata += checkDigit(StringaAssemblata)
  return StringaAssemblata
}


function elaborateNomeOCognome(Stringa){
  ReturnString = ""
  MaxChars = 3
  Regex = /[^aeiou][A-Z]/i
  EmergencyRegex = /[^aeiou]/i
  ReturnString += ExtractFromString(Stringa,Regex,MaxChars)
  if(ReturnString.length<MaxChars){
    ReturnString += ExtractFromString(Stringa,EmergencyRegex,MaxChars-ReturnString.length)
    while(ReturnString.length<MaxChars){
      ReturnString += "X"
    }
  }
  return ReturnString
}

function elaborateAnnoMese(Data){ //data nel senso giorno, mese e anno

  Data = new Date(Data)
  Anno = Data.getFullYear().toString()
  UltimeCifre = pythonSelectElements(Anno,Anno.length-2)
  MeseLetters = "ABCDEHLMPRST"
  SelectedLetter = MeseLetters[Data.getMonth()]
  return UltimeCifre + SelectedLetter
}  

function elaborateSesso(Sesso,Data){
  Data = new Date(Data).getDay()

  if (Sesso[0] == /F/i){
    Data = parseInt(Data)+40
  }
  Data = Data.toString()
  if (Data.length == 1){
    Data = "0" + Data
  }
  return Data
}

function ElaborateComune(Comune){ //forse in questa funzione ci metterò qualcosa di importante, per il momento ritorna il codice catastale
  CodiceRitorno = Comune
  return Comune
}
//bitwise & 1
function checkDigit(elaboratedData){
  Cpari = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  CDispari = [1,0,5,7,9,13,15,17,19,21,1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23] 
  counter = 0
  for (let i = 0; i < elaboratedData.length; i++) {
    const AIElaboratedData = elaboratedData[i];
    if (i & 1){
      counter += CDispari[Cpari.search(AIElaboratedData)]
    }else{
      counter += Cpari.search(AIElaboratedData)
    }
  }
  checkArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  checkDigitVar = checkArray[counter % 26]
  return checkDigitVar
}
