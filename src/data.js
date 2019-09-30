function getStatus(getPersonagens, status) {
  let resultadoFiltro = getPersonagens.filter (el => el.status.includes(status));
  return resultadoFiltro;
};

function percentStatus(status, resultadoFiltro) {
  const porcentagem = (resultadoFiltro.length *100)/status.length;
  return Math.round(porcentagem);
}

function getSpecies(getPersonagens, species) {
  let resultadoSpecies = getPersonagens.filter(el => el.species.includes(species));
  return resultadoSpecies;
};

function percentSpecies(species, resultadoSpecies) {
  let percent = (resultadoSpecies.length *100)/species.length;
  return Math.round(percent);
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
  });
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
  percentSpecies: percentSpecies,
  getSpecies: getSpecies,
  orderAZ: orderAZ,
  orderZA: orderZA
};