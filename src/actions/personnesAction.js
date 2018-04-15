const URL = 'https://boiling-stream-65489.herokuapp.com/';

export function getListPersonnes() {
  return {
    type: 'HTTP',
    payload: {
      url: `${URL}personne`,
      action: 'GET_PERSONNES',
    },
  };
}

export function getPersonne() {
  return {
    type: 'GET_PERSONNE',
    payload: { name: 'michel', prenom: 'mimi' },
  };
}
