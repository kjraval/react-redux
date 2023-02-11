const text = (state = "", action) => {
    switch (action.type) {
      case "SET":
        console.log(state,action)
        return {
          ...state,
          value: action.payload
        };
      case "CLEAR_TEXT":
        return {
          ...state,
          value: ""
        };
      default:
        return state;
    }
  };
  
  export default text;