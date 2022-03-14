
const INITIAL_STATE = {
    Fav: [],
  };
  
  export default function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "PUSH":
        return {
          ...state,
          Fav : [...state.Fav,action.payload],
        };

        case "DELETE":
            return {
              ...state,
              Fav : [...action.payload],
            };

      default:
        return state;
    }
  }
  