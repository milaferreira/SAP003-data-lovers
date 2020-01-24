function getStatus(getPersonagens, status) {
  let resultFilter = getPersonagens.filter (el => el.status.includes(status));
  return resultFilter;
};

function percentStatus(status, resultFilter) {
  const perc = (resultFilter.length *100)/status.length;
  return Math.round(perc);
}

function getSpecies(getPersonagens, species) {
  let resultSpecies = getPersonagens.filter(el => el.species.includes(species));
  return resultSpecies;
};

function percentSpecies(species, resultSpecies) {
  let percent = (resultSpecies.length *100)/species.length;
  return Math.round(percent);
}

function orderAZ(arrayCharacters) {
  const charactersOrders = arrayCharacters.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return charactersOrders;
}

function orderZA(arrayCharacters) {
  const characterInstead = arrayCharacters.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return characterInstead;
}

window.data = {
  getStatus: getStatus,
  percentStatus: percentStatus,
  percentSpecies: percentSpecies,
  getSpecies: getSpecies,
  orderAZ: orderAZ,
  orderZA: orderZA
};