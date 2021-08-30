import { DATA_LOADING } from "./constants";
const initialState = {
  userData: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        userData:{name:"Maria Pascle"}
      };
    default:
      return state;
  }
}
