const form = document.querySelector('.form-quiz');
let tableauResultats = [];
const reponse = ['b', 'b'];
const emojis = ['✅','❌'];
const titreResultat = document.querySelector('.resultatd h2');
const textResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutequestion = document.querySelectorAll('.question');
let veriftableau = []

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 1; i <= 2; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }

    //console.log(tableauResultats);
    verifFunc(tableauResultats)
    tableauResultats = [];
}) 

function verifFunc(tabResultats) {

    for (let i = 0; i <= 1; i++) {
        if (tabResultats[i] === reponse[i]) {
            veriftableau.push(true)
        } else {
            veriftableau.push(false)
        }
    }

    console.log(veriftableau);
    veriftableau = []
}


