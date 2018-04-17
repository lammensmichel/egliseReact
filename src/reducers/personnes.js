export default function reducer(state = {
  persones: [],
  selectedPersone: {},
}, action) {
  let newState;
  switch (action.type) {
    case 'GET_PERSONNES':
      newState = { ...state, persones: action.payload };
      break;
    case 'SELECT_PERSONNE':
      newState = { ...state, selectedPersone: action.payload };
      break;
    case 'POST_PERSONNES':
      newState = { ...state, selectedPersone: action.payload };
      break;
    case 'PUT_PERSONNES':
      newState = { ...state, selectedPersone: {} };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
