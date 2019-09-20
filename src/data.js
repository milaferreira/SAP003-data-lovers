function getStatus(personagens, status) {
  return personagens.filter(item => item.status.includes(status));
}

function getSpecies(personagens, species) {
  return personagens.filter(item => item.species.includes(species));
}

const app = {
  getStatus,
  getSpecies
};