export default function reducer(state = {
  persones: [],
  selectedPersone: {},
}, action) {
  let newState;
  switch (action.type) {
    case 'GET_PERSONNES':
      newState = { ...state, persones: action.payload };
      break;
    case 'GET_PERSONNE':
      newState = { ...state, selectedPersone: action.payload };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
