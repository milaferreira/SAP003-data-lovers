const getPersonagens = RICKANDMORTY.results;
const statusMenu = document.getElementById("filtro-status");
const speciesMenu = document.getElementById("filtro-species");
const ordenarAZ = document.getElementById("buttonAZ");
const ordenarZA = document.getElementById("buttonZA");
const calc = document.getElementById("boxCalculo");

statusMenu.addEventListener("change", () => {
  const lala = window.data.getStatus(getPersonagens, statusMenu.value)
  select(lala);
  calc.innerHTML= percentStatus(getPersonagens, lala);
});

speciesMenu.addEventListener("change", () => {
  const retorno = window.data.getSpecies(getPersonagens, speciesMenu.value)
  select(retorno);
  calc.innerHTML = percentSpecies(getPersonagens, retorno);
});

ordenarAZ.addEventListener("click", 
  () => select(window.data.orderAZ(getPersonagens)));

ordenarZA.addEventListener("click", 
  () => select(window.data.orderZA(getPersonagens)));


window.onload = () => {
  loadStatusMenu(getPersonagens);
  select(getPersonagens);
  loadStatusSpecies(getPersonagens);
};

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
  statusMenu.innerHTML = "<option value= \"none\"> Status </option>";
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
  speciesMenu.innerHTML = "<option value= \"none\"> Especie </option>";
  speciesMenu.innerHTML += personagensSpecies.map(species =>
    `<option value= "${species}"> ${species}</option>`).join("");

}

function select (array) {
  const resultado = document.getElementById("resultado");
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