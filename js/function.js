

// ------- ÉCRIRE UN FICHIER -------

function writeFile(id_form,func) {

  var element = document.createElement('a');

  let text1 = document.getElementById(id_form);
  let count = text1.elements.length;
  let textToSave = func;
  for(let i = 0;i<count-1;i++){
      textToSave += ";" + text1[i].value;
  }

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));//encodage du fichier
  element.setAttribute('download', 'request.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

 // text1.submit();
}
function writeRequetOff(func){
  var element = document.createElement('a');
  let textToSave = func;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));//encodage du fichier
  element.setAttribute('download', 'request.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function writeRequetBestWorst(func,func2){
  var element = document.createElement('a');
  let textToSave = func+";"+func2;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));//encodage du fichier
  element.setAttribute('download', 'request.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function writeFileAll(formId1, func1, formId2, func2, formId3, func3,formId4, func4) {
  var element = document.createElement('a');

  let text1 = formId1;
  let text2 = formId2;
  let text3 = formId3;
  let text4 = formId4;

  let textToSave = "";

  if (text1 !== "") {
    if(text2 ==""){
      textToSave += func1 + ";" + text1;
    }
    else {
      textToSave += func1 + ";" + text1 + "\n";
    }
  }
  if (text2 !== "") {
    if(text3 == ""){
      textToSave += func2 + ";" + text2;
    }
    else {
      textToSave += func2 + ";" + text2 + "\n";
    }
  }
  if (text3 !== "") {
    if(text4 == ""){
      textToSave += func3 + ";" + text3;
    }
    else {
      textToSave += func3 + ";" + text3 + "\n";
    }
  }
  if (text4 !== "") {
    textToSave += func4 + ";" + text4;
  }

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));
  element.setAttribute('download', 'request.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function writeFileAdd(formId1, formId2, formId3, formId4, func) {
  var element = document.createElement('a');
  let text1 = formId1;
  let text2 = formId2;
  let text3 = formId3;
  let text4 = formId4;
  let textToSave = func + ";" + text1 + ";" + text2 + ";" + text3 + ";" + text4;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));
  element.setAttribute('download', 'request.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


// -------------------------




function separateFormInputs(formId) {//recupere les valeurs des inputs
  let form = document.getElementById(formId);
  let inputs = form.getElementsByTagName('input');

  let values = [];
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    values.push(input.value);
  }
  return values;
}

function callWriteDirector() {//appel la fonction writeFile avec les parametres
  let callDirector = document.getElementById("form-findByDirector").value;
  if (callDirector != "") {
    writeFile("form-findByDirector", "findByDirector");
    window.open("result.html?name=");
  }
}

function callWriteTime() {//appel la fonction writeFile avec les parametres
  let callTime1 = document.getElementsByName("time1")[0].value;
  let callTime2 = document.getElementsByName("time2")[0].value;

  if (callTime1 != "" && callTime2 != "") {
    writeFile("form-findByTime", "findByTime");
    window.open("result.html?time1=" + callTime1 + "&time2=" + callTime2);
  } 
}

function callWriteType() {//appel la fonction writeFile avec les parametres
  let callType = document.getElementById("form-findByType").value;
  if(callType!=""){
    writeFile("form-findByType", "findByType");
    window.open("result.html?type=");
  } 
}

function callWriteTitle() {//appel la fonction writeFile avec les parametres
  let callTitle = document.getElementById("form-findByTitle").value;
  if(callTitle!=""){
    writeFile("form-findByTitle", "findByTitle");
    window.open("result.html?title=" );
  }
}


function putRealisateur(){//change les attributs des elements html
  let element=document.querySelector(".here");
  let element2 = document.getElementById("tap");
  let element3 =  document.getElementById("searchType");
  let id3= element3.name;
  element3.setAttribute(id3,'name');
  element.setAttribute('id', 'form-findByDirector');
  element2.setAttribute('tap', 'Director');
  const id = element.id;
  console.log(id);
}
function putTitre(){//change les attributs des elements html
  let element=document.querySelector(".here");
  let element2 = document.getElementById("tap");
  let element3 =  document.getElementById("searchType");
  let id3= element3.name;
  element3.setAttribute(id3,'title');
  element.setAttribute('id', 'form-findByTitle');
  element2.setAttribute('tap', 'Title');
}
function putGenre(){//change les attributs des elements html
  let element=document.querySelector(".here");
  let element2 = document.getElementById("tap");
  let element3 =  document.getElementById("searchType");
  let id3= element3.name;
  element3.setAttribute(id3,'type');
  element.setAttribute('id', 'form-findByType');
  element2.setAttribute('tap', 'Type');
}

function callWrite() {//appel la fonction writeFile avec les parametres
  let element = document.querySelector('.here');
  let id = element.id;
  console.log(id)
  if (id=='form-findByDirector'){
    callWriteDirector()
    
  }
  if (id=='form-findByTitle'){
    callWriteTitle()
  }
  if (id=='form-findByType'){
    callWriteType()
  }
  if (id=="id"){

  }
}

function callWriteAll() {//appel la fonction writeFile avec les parametres
  let values = separateFormInputs('form-findByAll');
  let nameValue = values[0];
  let request1 = "findByDirector";
  console.log(nameValue);
  let titleValue = values[1];
  let request2 = "findByTitle";
  console.log(titleValue);
  let typeValue = values[2];
  let request3 = "findByType";
  console.log(typeValue);
  let timeValuemin = values[3];
  let timeValuemax = values[4];
  let timeValue = timeValuemin + ";" + timeValuemax;
  let request4 = "findByTime";
  console.log(timeValue);
  if (nameValue == ""||isNaN(nameValue) == false) {
    nameValue = "";
    request1 = "";
  }
  if (titleValue == ""||isNaN(titleValue) == false) {
    titleValue = "";
    request2 = "";
  }
  if (typeValue == ""||isNaN(typeValue) == false) {
    typeValue = "";
    request3 = "";
  }
  if (timeValuemin == "" || timeValuemax == "") {
    timeValue = "";
    request4 = "";
  }
  if(nameValue==""&&titleValue==""&&typeValue==""&&timeValue==""){
    alert("Veuillez remplir au moins un champ");
    event.preventDefault();
    return;
  }
  //dirige vers la page de result.html
  window.open("result.html? title=" + titleValue + "&type=" + typeValue + "&time1=" + timeValuemin + "&time2=" + timeValuemax + "&name=" + nameValue);
  writeFileAll(nameValue,request1 , titleValue, request2, typeValue, request3, timeValue, request4);
}

function callWriteAdd() {//appel la fonction writeFile avec les parametres
  event.preventDefault();
  let values = separateFormInputs('form-findByAdd');
  let nameValue = values[0];
  let request1 = "addFilm";
  console.log(nameValue);
  let titleValue = values[1];
  
  console.log(titleValue);
  let typeValue = values[2];
 
  console.log(typeValue);
  let timeValue = values[3];
  
  console.log(timeValue);
  
  if (nameValue !== "" && titleValue !== "" && typeValue !== "" && timeValue !== "") {
    writeFileAdd(nameValue, titleValue, timeValue, typeValue, request1);
    document.getElementById("form-findByAdd").reset();
    document.getElementById("myModal").style.display = "block";
    inRead();

  }

  else {
  
    if (nameValue === ""||isNaN(nameValue) == false) {
      document.getElementById('nameError1').textContent = "Veuillez remplir ce champ.";
      
    }
    if (titleValue === "" ||isNaN(titleValue) == false) {
      document.getElementById('titleError1').textContent = "Veuillez remplir ce champ.";
    }
    if (typeValue === "" ||isNaN(typeValue) == false) {
      document.getElementById('typeError1').textContent = "Veuillez remplir ce champ.";
    }
    if (timeValue === "" ||isNaN(timeValue) == false) {
      document.getElementById('timeError1').textContent = "Veuillez remplir ce champ.";
    }
    
  }

}

// ------- READ FILE -------
function readFileByName(fileName){

  let xhr = new XMLHttpRequest();
  do {
      xhr.open("GET", fileName, false);//recupere le fichier txt
  

      xhr.send(null);

  }while(xhr.status === 404);

  // assumes status 200
  return xhr.responseText;
}

function readFile(){
  readFileByName("ready.txt");

  return readFileByName("results.txt");
}
// -------------------------





function getURLParameter(name) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);

}

function rechercheDirector() {
  let text = readFile();
  let firstDirector1 = text.split("\n");
  let firstDirector2 = firstDirector1[1];
  let firstDirector3 = firstDirector2.split(";");
  let firstDirector4 = firstDirector3[0];
  return firstDirector4;
}

function rechercheTime() {
  let timeValue1 = getURLParameter("time1");
  let timeValue2 = getURLParameter("time2");
  let timeValue = [timeValue1, timeValue2];
  return timeValue;
}

function rechercheType() {
  let text = readFile();
  let firstDirector1 = text.split("\n");
  let firstDirector2 = firstDirector1[1];
  let firstDirector3 = firstDirector2.split(";");
  let firstDirector4 = firstDirector3[3];
  return firstDirector4;
}

function rechercheTitle() {
  let text = readFile();
  let firstDirector1 = text.split("\n");
  let firstDirector2 = firstDirector1[1];
  let firstDirector3 = firstDirector2.split(";");
  let firstDirector4 = firstDirector3[1];
  return firstDirector4;
}

function writeRecherche() {
  let directorValue = rechercheDirector();
  let titleValue = rechercheTitle();
  let typeValue = rechercheType();
  let timeValue = rechercheTime()[0];
  let timeValue2 = rechercheTime()[1];

  let text = "";
  if (findHasParam() === "realisateur") {
    text += "Réalisateur : " + directorValue;
  }
  if (findHasParam() === "titre") {
    text += "Titre du film : " + titleValue;
  }
  if (findHasParam() === "genre") {
    text += "Genre du film : " + typeValue;
  }

  if (timeValue !== null && timeValue2 !== null && timeValue !== "" && timeValue2 !== "") {
    text += "Durée : " + timeValue + " min - " + timeValue2 + " min";
  }

  document.getElementById("pp").innerHTML = text;
}

writeRecherche();

function tempExecution() {
  let text = readFile();
  let tmpData = text.split("\n")[0].split(";")[0];
  document.getElementById("tmpData").innerHTML = "Temps d'exécution : " + tmpData + " ms";
}

tempExecution();

function hasNameParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has("name");
}

function hasTimeParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has("time1");
}

function hasTypeParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has("type");
}

function hasTitleParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has("title");
}

function findHasParam() {
  if (hasNameParam()) {
    return "realisateur";
  }
  if (hasTimeParam()) {
    return "temp";
  }
  if (hasTypeParam()) {
    return "genre";
  }
  if (hasTitleParam()) {
    return "titre";
  }
}

console.log(findHasParam());

function creerTableauFilms() {
  let text = readFile();
  let boubou = findHasParam();
  let tableau = [];
  let lignes = text.split("\n");
  if (boubou == "realisateur") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.realisateur = elements[0];
      film.titre = elements[1];
      film.duree = elements[2];
      film.genre = elements[3];
      tableau.push(film);
    
    }
  }
  if (boubou == "temp") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.realisateur = elements[0];
      film.titre = elements[1];
      film.duree = elements[2];
      film.genre = elements[3];
      tableau.push(film);
    }
  }
  if (boubou == "genre") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.realisateur = elements[0];
      film.titre = elements[1];
      film.duree = elements[2];
      film.genre = elements[3];
      tableau.push(film);
    }
  }
  if (boubou == "titre") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.realisateur = elements[0];
      film.titre = elements[1];
      film.duree = elements[2];
      film.genre = elements[3];
      tableau.push(film);
    }
  }
  return tableau;
}

let tableauFilms = creerTableauFilms();
console.log(tableauFilms);






function afficherTableau(tableau) {
  let html = "<table>";
  let boubou = findHasParam();

  if (boubou == "realisateur") {
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + " min </td>";
      html += "<td>" + tableau[i].genre + "</td>";
      html += "</tr>";
    }
  }

  if (boubou == "temp") {
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + " min </td>";
      html += "<td>" + tableau[i].genre + "</td>";
      html += "</tr>";
    }
  }

  if (boubou == "genre") {
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + " min </td>";
      html += "<td>" + tableau[i].genre + "</td>";
      html += "</tr>";
    }
  }

  if (boubou == "titre") {
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + " min </td>";
      html += "<td>" + tableau[i].genre + "</td>";
      html += "</tr>";
    }
  }

  html += "</table>";
  document.getElementById("resultat").innerHTML = html;

}
afficherTableau(tableauFilms);


function openModal() {
  let pwd=prompt("Veuillez entrer le mot de passe:");
  if(pwd=="leandrolpb"){
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  else{
    alert("Erreur de mot de passe !!");
  }
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
  modal.reset();
}


function callWrite(){
  let element = document.querySelector('.here');
  let id = element.id;
  console.log(id)
  if (id=='form-findByDirector'){
    callWriteDirector()
  }
  if (id=='form-findByTitle'){
    callWriteTitle()
  }
  if (id=='form-findByType'){
    callWriteType()
  }
  if (id=="id"){

  }
}


function activerBoutons(boutonId) {
  var boutons = document.getElementsByClassName('bouton'); 
  for (var i = 0; i < boutons.length; i++) { 
    boutons[i].classList.remove('active');
  }
  var boutonClique = document.getElementById(boutonId);
  boutonClique.classList.add('active'); 
}

function activerSend(){
  var boutonSend = document.getElementsByClassName("boutonSend")[0];
  boutonSend.classList.add('typeOk');
}


function putImputOk() {
  var input = document.getElementById("searchType");
  var boutonSend = document.getElementsByClassName("boutonSend")[0];

  if (input.value.trim() !== "") {
    boutonSend.classList.add('imputOk');
  } else {
    boutonSend.classList.remove('imputOk');
  }
  
}

function inRead(){
  let text=readFile();
  let text2=text.split("\n")[0];
  console.log(text2);
  if(text2=="addWithSuccess"){
    alert("Le film a été ajouté avec succès !");
  }
  /*
  if(text2=="delWithSuccess"){
    alert("film supprimé avec succès");
  }
  */
  if(text2=="alreadyExist"){
    alert("Le film est déjà existant !");
  }
  /*
  if(text2=="doesntExist"){
    alert("film inexistant");
  }
  */
}

function etatMachine() {
  writeRequetOff("stopProgram");
  let text = readFile();
  let text2 = text.split("\n")[0];
  console.log(text2);
  if (text2 == "stopWithSuccess") {
    alert("Le programme s'est arrêté !");
  }
}

function callWriteBest(){
  writeRequetBestWorst("dataDirectors","max");
  document.getElementById("bestreal").innerHTML="<p>Le realisateur qui a fait le plus de film est "+readFile().split(";")[0]+" avec "+readFile().split(";")[1]+" film(s). </p>";
  

}
function callWriteWorst(){
  writeRequetBestWorst("dataDirectors","min");
  document.getElementById("worstreal").innerHTML="<p>Le realisateur qui a fait le moins de film est "+readFile().split(";")[0]+" avec "+readFile().split(";")[1]+" film(s). </p>";
}

