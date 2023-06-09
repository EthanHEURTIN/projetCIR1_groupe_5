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


function callWrite() {
    writeFile("form-findByDirector",  );
}


form_button = document.getElementById("go");
form_button.onclick = callWrite;


/*function findByDirector() {
    let director = document.getElementById("director").value;
    writeFile(director, "findByDirector");
}

function findByTimer(){
    let time1 = document.getElementById("time1").value;
    let time2 = document.getElementById("time2").value;
    console.log(time1 + " " + time2);
    //writeFile(timer, "findByTimer");
}

function findByType(){
    let type = document.getElementById("type").value;
    console.log(type);
    //writeFile(type, "findByType");
}

function findByTitle(){
    
    let title = document.getElementById("title").value;
    console.log(title);
    //writeFile(title, "findByTitle");

}*/



