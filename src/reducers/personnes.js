export default function reducer(state = {
  persones: [],
  selectedPersone: {},
}, action) {
  switch (action.type) {
    case 'GET_PERSONNES':
      state = { ...state, persones: action.payload };
      break;
    case 'GET_PERSONNE':
      state = { ...state, selectedPersone: action.payload };
      break;
    default:
      break;
  }
  return state;
}
