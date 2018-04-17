/* eslint-disable */
// const URL = 'https://boiling-stream-65489.herokuapp.com/';
const URL = 'http://localhost:3000/';

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

export function updatePersonne(personne) {
  return {
    type: 'HTTP_POST',
    payload: {
      url: `${URL}personne`,
      action: 'POST_PERSONNES',
      object: personne,
    },
  };
}

export function createPersonne(personne) {
  return {
    type: 'HTTP_PUT',
    payload: {
      url: `${URL}personne`,
      action: 'PUT_PERSONNES',
      object: personne,
    },
  };
}
