function getStatus(personagens, status) {
  return personagens.filter(item => item.status.includes(status));
}


// criar uma variavel para o resultado do getStatus, 
//e essa variavel.lenght/numero total de personagens = resultado porcentagem
function getSpecies(personagens, species) {
  return personagens.filter(item => item.species.includes(species));
}

function orderAZ(arrayPersonagens) {
  const ordenarPersonagens = arrayPersonagens.sort(function(a, b){
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
      return 0;
  });
  return ordenarPersonagens
}

function orderZA(arrayPersonagens) {
  const reversePersonagens = arrayPersonagens.sort(function(a, b){
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
      return 0;
  });
  return reversePersonagens
}
window.data = {
  getStatus: getStatus,
  getSpecies: getSpecies,
  orderAZ: orderAZ,
  orderZA: orderZA
};