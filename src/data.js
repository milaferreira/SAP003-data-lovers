function getStatus(getPersonagens, status) {
  let calculoStatus = getPersonagens.filter (el => el.status.includes(status));
  
  return calculoStatus;
   
};

function percentStatus(status, calculoStatus){
  const porcentagem = (calculoStatus.length *100)/status.length;
  return Math.round(porcentagem *100) /100;
  }


function getSpecies(getPersonagens, species) {
  let calcSpecies = getPersonagens.filter(el => el.species.includes(species));
  return calcSpecies;
};

function percentSpecies(species, calcSpecies){
  let percent = (calcSpecies.length *100)/species.length;
  return Math.round(percent *100)/100;
}

function orderAZ(arrayPersonagens) {
  const personagensOrdenados = arrayPersonagens.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
      return 0;
  return personagensOrdenados;
}

function orderZA(arrayPersonagens) {
  const personagensDesordenados = arrayPersonagens.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return personagensDesordenados;
}

window.data = {
  getStatus: getStatus,
  percentStatus: percentStatus,
  getSpecies: getSpecies,
  percentSpecies: percentSpecies,
  orderAZ: orderAZ,
  orderZA: orderZA
};



