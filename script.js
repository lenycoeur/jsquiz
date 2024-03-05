
const reponse = [ "d", "b", "c"];
const form  = document.querySelector('.form-quizz');
const result= document.querySelector('.result');
const noteResult= document.querySelector('.note');
const infoResult = document.querySelector('.info')
let  resultTableau = [];
let veriftableau = [];
const emojis = ["✅", "❌"];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  for (let i = 1; i < 4; i++) {
    resultTableau.push(
      document.querySelector(`input[name = "q${i}"]:checked`)?.value
    );
  }
  verif(resultTableau);
  resultTableau = []; //Reset le tableau
});

function verif(resultats) {

      for (let i = 0; i < 3 ; i++) {
        if(resultats[i] === reponse[i]) {
          veriftableau.push(true);
        }else {
          veriftableau.push(false);
        }
      }

      console.log(veriftableau)
      funcResultat(veriftableau);
    veriftableau = [];
}

function funcResultat(resul) {
    const nbError = resul.filter(el => el === false ).length;
    console.log(nbError)

    switch (nbError) {
        case 0:
                result.style.backgroundColor = "green"
                noteResult.innerText = `✅ bien joué✅`;
                infoResult.inneText = `3 / 3`
            break;
    
        default:
            break;
    }
}


