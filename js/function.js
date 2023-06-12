// ------- WRITE FILE -------

 function writeFile(id_form,func) {

  var element = document.createElement('a');

  let text1 = document.getElementById(id_form);
  let count = text1.elements.length;
  let textToSave = func;
  for(let i = 0;i<count-1;i++){
      textToSave += ";" + text1[i].value;
  }

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToSave));
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

function callWriteDirector() {//ecrit le realisateur dans le fichier request.txt
  writeFile("form-findByDirector", "findByDirector");

}
function callWriteTime() {//ecrit temp du film dans le fichier request.txt

  writeFile("form-findByTimer", "findByTimer");
}

function callWriteType() { //ecrit le genre de film dans le fichier request.txt
 writeFile("form-findByType", "findByType");
  

}

function callWriteTitle() {//ecrit le titre dans le fichier request.txt
  writeFile("form-findByTitle", "findByTitle");

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
  if (nameValue == "") {
    nameValue = "";
    request1 = "";
  }
  if (titleValue == "") {
    titleValue = "";
    request2 = "";
  }
  if (typeValue == "") {
    typeValue = "";
    request3 = "";
  }
  if (timeValuemin == "" || timeValuemax == "") {
    timeValue = "";
    request4 = "";
  }


  writeFileAll(nameValue,request1 , titleValue, request2, typeValue, request3, timeValue, request4);
}

function callWriteAdd() {
  let values = separateFormInputs('form-findByAll');

// ------- READ FILE -------
function readFileByName(fileName){

  let xhr = new XMLHttpRequest();
  do {
      xhr.open("GET", fileName, false);
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
//avec la fonction getURLParameter on recupere les parametres de l'url s'éparer par des &
//on recupere les parametres de l'url et on les affiches dans le paragraphe pp

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
    text+="Le realisateur : " + directorValue;
  }
  if (titleValue !== null&& titleValue !== "") {
    text +=  "Le titre du film : " + titleValue;
  }
  if (typeValue !==  null && typeValue !== "") {
    text += "Le genre du film : " + typeValue;
  }

  if (timeValue !== null && timeValue2 !== null && timeValue !== "" && timeValue2 !== "") {
    text += "La durée : " + timeValue + " min - " + timeValue2 + " min";
  }
    
  document.getElementById("pp").innerHTML = text;

}
writeRecherche();

function tempExecution(text) {
  let tmpData = text.split("\n")[0].split(";")[0];
  document.getElementById("tmpData").innerHTML = "Temps d'exécution : " + tmpData + " ms";
}
tempExecution(text);








function creerTableauFilms(text) {
  let boubou = 'realisateur'
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
      film.genre = elements[2];
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
  let boubou = 'realisateur'

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
    html += "<tr><th>Realisateur</th><th>Titre</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].realisateur + "</td>";
      html += "<td>" + tableau[i].titre + "</td>";
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

function playMusic(genre) {
    if (genre == "Western") {
      let audio = new Audio('');
      audio.play();
    }

}





