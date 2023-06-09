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


function callWriteDirector() {//ecrit le realisateur dans le fichier request.txt
    writeFile("form-findByDirector", "findByDirector");
}
function callWriteTimer() {//ecrit temp du film dans le fichier request.txt
    writeFile("form-findByTimer", "findByTimer");
}
function callWriteType() { //ecrit le genre de film dans le fichier request.txt
    writeFile("form-findByType", "findByType");
}
function callWriteTitle() {//ecrit le titre dans le fichier request.txt
    writeFile("form-findByTitle", "findByTitle");
}
//Director
form_button = document.getElementById("director");
form_button.onclick = callWriteDirector;
//Time
form_button = document.getElementById("time");
form_button.onclick = callWriteTimer;
//Type
form_button = document.getElementById("type");
form_button.onclick = callWriteType;
//Title
form_button = document.getElementById("title");
form_button.onclick = callWriteTitle;



