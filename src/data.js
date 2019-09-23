function getStatus(personagens, status) {
  return personagens.filter(item => item.status.includes(status));
}

function getSpecies(personagens, species) {
  return personagens.filter(item => item.species.includes(species));
}

function orderAZ(getPersonagens) {
  getPersonagens.sort(function(a, b) {return a-b;});
  console.log(orderAZ());

}

const app = {
  getStatus,
  getSpecies,
  orderAZ
};