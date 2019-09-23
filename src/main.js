const getPersonagens = RICKANDMORTY.results;
  //criar variaveis
const speciesMenu = document.getElementById("filtro-species");
const statusMenu = document.getElementById("filtro-status");
const ordenarAZ = document.getElementById("buttonAZ");
// const ordenarZA = document.getElementById("buttonZA");

statusMenu.addEventListener("change",
() => select(app.getStatus(getPersonagens, statusMenu.value)));

speciesMenu.addEventListener("change",
() => select(app.getSpecies(getPersonagens, speciesMenu.value)));

ordenarAZ.addEventListener("click", 
() => select(app.orderAZ(getPersonagens)));

//ordenarZA.addEventListener("click", orderZA);

// document.getElementById("decodebutton").addEventListener("click", DecodeMessage);



window.onload = () => {
    loadStatusMenu(getPersonagens);
    loadSpeciesMenu(getPersonagens);
    select(getPersonagens);
};

function loadStatusMenu(arrayPersonagens){
    //ajustar função para preencher os tres combos
    const personagensStatus = [];
    arrayPersonagens.map(personagem => {
        if (!personagensStatus.includes(personagem.status)){
            personagensStatus.push(personagem.status);
        }else {
            return false
        }
            return personagensStatus;
    })

statusMenu.innerHTML = ""
statusMenu.innerHTML = `<option value= "none" class="firstselect"> Selecione </option>`;
statusMenu.innerHTML += personagensStatus.map(status => `<option value= "${status}">
${status}</option>`).join("");

};

function loadSpeciesMenu(arrayPersonagem){
const personagemSpecies = [];
arrayPersonagem.map(personagem =>{
    if (!personagemSpecies.includes(personagem.species)){
        personagemSpecies.push(personagem.species);
    } else{
        return false
    }
    return personagemSpecies
})

speciesMenu.innerHTML =""
speciesMenu.innerHTML= `<option value="none" class="secondeSelect"> Selecione </option>`;
speciesMenu.innerHTML += personagemSpecies.map(species => `<option value ="${species}">
${species}</option>`).join("");

}


function select (array){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.innerHTML += `${array.map(personagem => {
        return `
        <div class="card">
            <h4>"${personagem.name}"</h4>
            <img src="${personagem.image}" class="personagem"/>
            <p>Status: ${personagem.status}</p>
            <p>Species: ${personagem.species}</p>
            <p>Type: ${personagem.type}</p>
            <p>Gender: ${personagem.gender}</p>
        </div>
        `
    }).join("")}`
};    

// function objectToArray(obj){
//     const qualquercoisa = [];
//     for (key)

// }



// function select (array){
//     const resultado = document.getElementById("resultado");
//     resultado.innerHTML = "";
//     resultado.innerHTML += `${array.map(personagem => {
//         return `
//         <div class="card">
//             <h4>"${personagem.name}"</h4>
//             <img src="${personagem.image}"/>
//             <p>Status: ${personagem.status}</p>
//         </div>
//         `
//     }).join("")}`
// }    
