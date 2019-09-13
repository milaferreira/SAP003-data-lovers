// optionsFirstFilter.addEventListener("click", firstFilter);
// statusOptions.addEventListener("click", secondFilter);
// speciesOptions.addEventListener("click", thirdFilter);

// function firstFilter(){
//     event.preventDefault();
//     const optionFirst = document.getElementById("optionsFirstFilter").value;
//     if (optionFirst == "status"){
        
//     }
//     // const statusResult = document.getElementById("status").value;
//     // const specieResult = document.getElementById("species").value;
//     // const genderResult = document.getElementById("gender").value;
//     // const conectionData = window.data.optionFirst()
// }

// document.getElementsByClassName("after_submit").style.visibility = "visible;
// const getPersonagens = RICKANDMORTY.results;

// personagens = () => {
//     getPersonagens.map(get => get.id);
// }
// console.log(personagens())

// const getPersonagens = RICKANDMORTY.filter(personagemID =>(personagemID.id <50));
// console.log("getPersonagens")

// const getPersonagens = RICKANDMORTY.results;

// for (let getPersonagem of getPersonagens){

// const resultado = document.getElementById("resultado")

// resultado.innerHTML+=`${getPersonagem.name} <img src="${getPersonagem.image}"/></br>`
// }

const getPersonagens = RICKANDMORTY.results;
const resultado = document.getElementById("resultado")

getPersonagens.map(getPersonagem => resultado.innerHTML += `<div class="card-container">
<p>Nome: ${getPersonagem.name}</p> 
<p>Status: ${getPersonagem.status}</p>
<p>Genêro: ${getPersonagem.gender}</p>
<img src="${getPersonagem.image}"/></br>`)



// 
// 

// getPersonagens.map(nome => resultado.innerHTML+= `${nome}`)



//map, filter, reduce, sort, include

// for (let getPersonagem of getPersonagens){
//     console.log(getPersonagem)
// }


// // getPersonagens.filter(id => id <=50)

// console.log(getPersonagens);

// for..of para arrays
// for..in para objetos