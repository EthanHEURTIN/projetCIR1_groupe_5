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
// -------------------------
function getURLParameter(name) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
}


function callWriteDirector() {//ecrit le realisateur dans le fichier request.txt
  form_button = document.getElementById("director");
  form_button.onclick = callWriteDirector;
  writeFile("form-findByDirector", "findByDirector");


}
function callWriteTime() {//ecrit temp du film dans le fichier request.txt
  form_button = document.getElementById("time");
  form_button.onclick = callWriteTime;
  writeFile("form-findByTimer", "findByTimer");

}
function callWriteType() { //ecrit le genre de film dans le fichier request.txt
  form_button = document.getElementById("type");
  form_button.onclick = callWriteType;

  writeFile("form-findByType", "findByType");
  

}
function callWriteTitle() {//ecrit le titre dans le fichier request.txt
  form_button = document.getElementById("title");
  form_button.onclick = callWriteTitle;
  writeFile("form-findByTitle", "findByTitle");


}
function callWriteAll() {//ecrit tout les parametre dans le fichier request.txt
  form_button = document.getElementById("all");
  form_button.onclick = callWriteAll;
  writeFile("form-findByAll", "findByAll");

}
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

let text = readFile();

function writeDirector() {
  const nameValue = getURLParameter("name");
  document.getElementById("pp").innerHTML = "Qu'a fait : " + nameValue;
}
function writeTime() {
  const timeValue = getURLParameter("search");
  document.getElementById("pp").innerHTML = " : " + timeValue;
}
function writeType() {
  const typeValue = getURLParameter("type");
  document.getElementById("pp").innerHTML = "Les Films du genre : " + typeValue;
}
function writeTitle() {
  const titleValue = getURLParameter("title");
  document.getElementById("pp").innerHTML = "Le Film : " + titleValue;
}
function write() {
  if (getURLParameter("name") != null) {
    writeDirector();
  }
  if (getURLParameter("time") != null) {
    writeTime();
  }
  if (getURLParameter("type") != null) {
    writeType();
  }
  if (getURLParameter("title") != null) {
    writeTitle();
  }
}
write();

function tempExecution(text) {
  let tmpData = text.split("\n")[0].split(";")[0];
  document.getElementById("tmpData").innerHTML = "Temps d'exécution : " + tmpData + " ms";
}
tempExecution(text);









  

function callButton() {
//verifie quel fonction est appelé callWriteDirector, callWriteTime, callWriteType, callWriteTitle
}
callButton();

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





//creer une fonction avec un tableau et l'affiche dans le html a l'id resultat
function afficherTableau(tableau) {
  let html = "<table>";
  let boubou = 'realisateur'

  if (boubou == "realisateur") {
    html += "<tr><th>Titre</th><th>Durée</th><th>Genre</th></tr>";

    for (let i = 0; i < tableau.length; i++) {
      html += "<tr>";
      html += "<td>" + tableau[i].titre + "</td>";
      html += "<td>" + tableau[i].duree + "</td>";
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






