const jmeno = "Mykhailo";
let bydliste = "Praha";
let student = true;
let vek = 21;

console.log("Moje jméno je "+jmeno);

let x = true;
let y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x); // false

document.body.style.fontFamily = 'Pacifico, cursive'
document.body.style.backgroundColor = "#f0f0f0";

function zmenTema(prepinac){

    const seznamy = document.querySelectorAll("ul");
    const text = document.getElementById("tema-text");

    if(prepinac.checked){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        seznamy.forEach(ul => {
            ul.style.backgroundColor = "#222";
        });

        text.textContent = "Světlé téma";

    } else {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "black";

        seznamy.forEach(ul => {
            ul.style.backgroundColor = "white";
        });

        text.textContent = "Tmavé téma";
    }
}
function zmenFont(){
    if(document.body.style.fontFamily === 'Pacifico, cursive'){
        document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    } else {
        document.body.style.fontFamily = 'Pacifico, cursive';
    }
}
