const setText = textObj => {
    return {
      type: "SET",
      payload: textObj
    };
  };
  
  const clearText = () => {
    return {
      type: "CLEAR_TEXT"
    };
  };
  
  export default {
    setText,
    clearText
  };