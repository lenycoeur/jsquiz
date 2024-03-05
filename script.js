const reponse = ["c", "b", "d"];
const form = document.querySelector(".form-quizz");
const result = document.querySelector(".result");
const noteResult = document.querySelector(".note");
const infoResult = document.querySelector(".info");
let resultTableau = [];
let veriftableau = [];
const emojis = ["✅", "❌", "👎", "💪"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 1; i < 4; i++) {
    resultTableau.push(
      document.querySelector(`input[name = "q${i}"]:checked`)?.value
    );
  }
  verif(resultTableau);
  resultTableau = []; //Reset
});

function verif(resultats) {
  for (let i = 0; i < 3; i++) {
    if (resultats[i] === reponse[i]) {
      veriftableau.push(true);
    } else {
      veriftableau.push(false);
    }
  }

  console.log(veriftableau);
  funcResultat(veriftableau);
  veriftableau = [];
}

function funcResultat(resul) {
  const nbError = resul.filter((el) => el === false).length;
  console.log(nbError);

  switch (nbError) {
    case 0:
      result.style.backgroundColor = "rgb(60, 207, 118)";
      noteResult.innerText = `✅ bien joué ✅`;
      infoResult.innerText = `3 / 3`;
      break;

    case 1:
      result.style.backgroundColor = "rgb(60, 207, 118)";
      noteResult.innerText = `💪 tu y es presque 💪`;
      infoResult.innerText = `2 / 3`;
      break;

    case 2:
      result.style.backgroundColor = "rgb(239, 79, 79)";
      noteResult.innerText = `👎 Arf !!!👎`;
      infoResult.innerText = `1 / 3`;
      break;

    case 3:
      result.style.backgroundColor = "rgb(239, 79, 79)";
      noteResult.innerText = `❌ Réésaye Encore ❌`;
      infoResult.innerText = `0 / 3`;
      break;

    default:
      "Oups";
      break;
  }
}
