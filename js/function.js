// ------- WRITE FILE -------

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
function writeFileAll(formId1, func1, formId2, func2, formId3, func3,formId4, func4) {
  var element = document.createElement('a');

  let text1 = formId1;
  let text2 = formId2;
  let text3 = formId3;
  let text4 = formId4;

  let textToSave = "";

  if (text1 !== "") {
    textToSave += func1 + ";" + text1 + "\n";
  }
  if (text2 !== "") {
    textToSave += func2 + ";" + text2 + "\n";
  }
  if (text3 !== "") {
    textToSave += func3 + ";" + text3 + "\n";
  }
  if (text4 !== "") {
    textToSave += func4 + ";" + text4 + "\n";
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
function writeFileDelete(formId1, formId2, func) {
  var element = document.createElement('a');
  let text1 = formId1;
  let text2 = formId2;
  let textToSave = func + ";" + text1 + ";" + text2;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));
  element.setAttribute('download', 'request.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// -------------------------




function separateFormInputs(formId) {
  let form = document.getElementById(formId);
  let inputs = form.getElementsByTagName('input');

  let values = [];
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    values.push(input.value);
  }

  return values;
}

function callWriteDirector() {
  let callDirector = document.getElementById("form-findByDirector").value;
  if (callDirector != "") {
    writeFile("form-findByDirector", "findByDirector");
  }
}

function callWriteTime() {
  let callTime1 = document.getElementsByName("time1")[0].value;
  let callTime2 = document.getElementsByName("time2")[0].value;

  if (callTime1 != "" && callTime2 != "") {
    writeFile("form-findByTime", "findByTime");
  } 
}

function callWriteType() {
  let callType = document.getElementById("form-findByType").value;
  if(callType!=""){
    writeFile("form-findByType", "findByType");
  } 
}

function callWriteTitle() {
  let callTitle = document.getElementById("form-findByTitle").value;
  if(callTitle!=""){
    writeFile("form-findByTitle", "findByTitle");
  }
}


function putRealisateur(){
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
function putTitre(){
  let element=document.querySelector(".here");
  let element2 = document.getElementById("tap");
  let element3 =  document.getElementById("searchType");
  let id3= element3.name;
  element3.setAttribute(id3,'title');
  element.setAttribute('id', 'form-findByTitle');
  element2.setAttribute('tap', 'Title');
}
function putGenre(){
  let element=document.querySelector(".here");
  let element2 = document.getElementById("tap");
  let element3 =  document.getElementById("searchType");
  let id3= element3.name;
  element3.setAttribute(id3,'type');
  element.setAttribute('id', 'form-findByType');
  element2.setAttribute('tap', 'Type');
}

function callWrite() {
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

function callWriteAll() {
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
  let request4 = "findByTimer";
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
    return;
  }
  window.location="result.html";

  writeFileAll(nameValue,request1 , titleValue, request2, typeValue, request3, timeValue, request4);
}

function callWriteAdd() {
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
    document.getElementById('nameError1').textContent = "";
    document.getElementById('titleError1').textContent = "";
    document.getElementById('typeError1').textContent = "";
    document.getElementById('timeError1').textContent = "";
    document.getElementById("form-findByAdd").reset();
    document.getElementById("myModal").style.display = "block";

  }
  let r = readFile();
  if(r = "alreadyExist"){
    alert("opération impossible film déjà existant");
  }
  }
  if(r = "addWithSuccess"){
    alert("opération realisée avec successe !!!!");
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


function callWriteDelete() {
  event.preventDefault();
  let values = separateFormInputs('form-findByDelete');
  let nameValue = values[0];
  let request1 = "deleteFilm";
  console.log(nameValue);
  let titleValue = values[1];
  console.log(titleValue);
  if (nameValue !== "" && titleValue !== "") {
    writeFileDelete(nameValue, titleValue, request1);
    document.getElementById('nameError2').textContent = "";
    document.getElementById('titleError2').textContent = "";
    document.getElementById("form-findByDelete").reset();
    document.getElementById("myModal").style.display = "block";

  }
 else {
    if (nameValue === ""||isNaN(nameValue) == false) {
      document.getElementById('nameError2').textContent = "Veuillez remplir ce champ.";
      
    }
    if (titleValue === ""||isNaN(titleValue) == false) {
      document.getElementById('titleError2').textContent = "Veuillez remplir ce champ.";
    }
  }
  let text=readFile();
  if(text=="addWithSuccess"){
    alert("opération impossible film inexistant");
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






let text = readFile();//recupere le fichier results.txt en un simple fichier txt



function getURLParameter(name) {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);

}

function rechercheDirector() {
  let nameValue = getURLParameter("name");
  return nameValue;
}

function rechercheTime() {
  let timeValue1 = getURLParameter("time1");
  let timeValue2 = getURLParameter("time2");
  let timeValue = [timeValue1, timeValue2];
  return timeValue;
}


function rechercheType() {
  let typeValue = getURLParameter("type");
  return typeValue;
}

function rechercheTitle() {
  let titleValue = getURLParameter("title");
  return titleValue;
}


function writeRecherche() {
  let directorValue = rechercheDirector();
  let timeValue = rechercheTime()[0];
  let timeValue2 = rechercheTime()[1];
  let typeValue = rechercheType();
  let titleValue = rechercheTitle();

  let text="";
  if (directorValue !== null&& directorValue !== "") {
    text+=" realisateur " + directorValue;
  }
  if (titleValue !== null&& titleValue !== "") {
    text +=  " titre du film " + titleValue;
  }
  if (typeValue !==  null && typeValue !== "") {
    text += " genre du film " + typeValue;
  }

  if (timeValue !== null && timeValue2 !== null && timeValue !== "" && timeValue2 !== "") {
    text += " durée : " + timeValue + " min - " + timeValue2 + " min";
  }
    
  document.getElementById("pp").innerHTML = text;

}
writeRecherche();

function tempExecution(text) {
  let tmpData = text.split("\n")[0].split(";")[0];
  document.getElementById("tmpData").innerHTML = "Temps d'exécution : " + tmpData + " ms";
}
tempExecution(text);


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

function findhasParam() {
  if (hasNameParam() == true) {
    return "realisateur";
  }
  if (hasTimeParam() == true) {
    return "temp";
  }
  if (hasTypeParam() == true) {
    return "genre";
  }
  if (hasTitleParam() == true) {
    return "titre";
  }
}

console.log(findhasParam());

function creerTableauFilms(text) {
  let boubou = findhasParam();
  let tableau = [];
  let lignes = text.split("\n");
  if (boubou == "realisateur") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.titre = elements[0];
      film.duree = elements[1];
      film.genre = elements[2];
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
      tableau.push(film);
    }
  }
  if (boubou == "titre") {
    for (let i = 1; i < lignes.length; i++) {
      let film = {};
      let elements = lignes[i].split(";");
      film.realisateur = elements[0];
      film.duree = elements[1];
      film.genre = elements[2];
      tableau.push(film);
    }
  }
  return tableau;
}

let tableauFilms = creerTableauFilms(text);
console.log(tableauFilms);






function afficherTableau(tableau) {
  let html = "<table>";
  let boubou = findhasParam();

  if (boubou == "realisateur") {
    html += "<tr><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
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
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Durée</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + "</td>";
      html += "</tr>";
    }
  }

  if (boubou == "titre") {
    html += "<tr><th>Realisateur</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].duree + "</td>";
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
    alert("oue tu connais");
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
  var boutons = document.getElementsByClassName('bouton'); // Récupérer tous les boutons
  for (var i = 0; i < boutons.length; i++) {  // Parcourir tous les boutons
    boutons[i].classList.remove('active');    // Supprimer la classe "active" de tous les boutons
  }
  var boutonClique = document.getElementById(boutonId);
  boutonClique.classList.add('active'); // Ajouter la classe "active" au bouton cliqué
}

function activerSend(){
  var boutonSend = document.getElementsByClassName("boutonSend")[0];
  boutonSend.classList.remove('disabled');
}