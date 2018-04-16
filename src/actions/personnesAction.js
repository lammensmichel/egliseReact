const URL = 'https://boiling-stream-65489.herokuapp.com/';

export function getListPersonnes() {
  return {
    type: 'HTTP_GET',
    payload: {
      url: `${URL}personne`,
      action: 'GET_PERSONNES',
    },
  };
}

export function selectPersonne(personne) {
  return {
    type: 'SELECT_PERSONNE',
    payload: personne,
  };
}
