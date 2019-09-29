const getPersonagens = RICKANDMORTY.results;
const recarregar = document.getElementById("refresh");
const statusMenu = document.getElementById("filtro-status");
const speciesMenu = document.getElementById("filtro-species");
const ordenarAZ = document.getElementById("buttonAZ");
const ordenarZA = document.getElementById("buttonZA");
const calc = document.getElementById("boxCalculo");

recarregar.addEventListener("click", refreshPage);

statusMenu.addEventListener("change", () => {
  const retorno = window.data.getStatus(getPersonagens, statusMenu.value);
  show(retorno);
  calc.innerHTML= percentStatus(getPersonagens, retorno) + "%";
});

speciesMenu.addEventListener("change", () => {
  const retorno = window.data.getSpecies(getPersonagens, speciesMenu.value);
  show(retorno);
  calc.innerHTML = percentSpecies(getPersonagens, retorno) + "%";
});

ordenarAZ.addEventListener("click", 
  () => show(window.data.orderAZ(getPersonagens)));

ordenarZA.addEventListener("click", 
  () => show(window.data.orderZA(getPersonagens)));

window.onload = () => {
  loadStatusMenu(getPersonagens);
  loadStatusSpecies(getPersonagens);
  show(getPersonagens);
};

function refreshPage() {
  loadStatusMenu(getPersonagens);
  loadStatusSpecies(getPersonagens);
  show(getPersonagens);

}

function loadStatusMenu(arrayPersonagens) {
  const personagensStatus = [];
  arrayPersonagens.map(personagem => {
    if (!personagensStatus.includes(personagem.status)) {
      personagensStatus.push(personagem.status);
    } else {
      return false;
    }
    return personagensStatus;
  });

  statusMenu.innerHTML = "";
  statusMenu.innerHTML = "<option value= \"none\"> Choose Status   </option>";
  statusMenu.innerHTML += personagensStatus.map(status =>
    `<option value= "${status}"> ${status}</option>`).join("");

}

function loadStatusSpecies(arrayPersonagens) {
  const personagensSpecies = [];
  arrayPersonagens.map(personagem => {
    if (!personagensSpecies.includes(personagem.species)) {
      personagensSpecies.push(personagem.species);
    } else {
      return false;
    }
    return personagensSpecies;
  });

  speciesMenu.innerHTML = "";
  speciesMenu.innerHTML = "<option value= \"none\"> Choose Specie </option>";
  speciesMenu.innerHTML += personagensSpecies.map(species =>
    `<option value= "${species}"> ${species}</option>`).join("");

}

function show (array) {
  const resultado = document.getElementById("resultado");
  calc.innerHTML = "When you choose the filter, the percentual of the characters will appear!";
  resultado.innerHTML = "";
  resultado.innerHTML += `${array.map(personagem => {
    return `
        <div class="card1">
            <img src="${personagem.image}"/>
            <h4>${personagem.name}</h4>
            <p>Status: ${personagem.status}</p>
            <p>Species: ${personagem.species}</p>
           
        </div>
        `;
  }).join("")}`;
}    