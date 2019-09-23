// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window
function getStatus(getPersonagens, status,){
  return getPersonagens.filter (el => el.status.includes(status))
};

function getSpecies(getPersonagens, species,){
  return getPersonagens.filter(el => el.species.includes(species))
};

function orderAZ(arrayPersonagens){
  const personagensOrdenados = arrayPersonagens.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return personagensOrdenados
}

const app = {
 getStatus,
 getSpecies,
 orderAZ
};

