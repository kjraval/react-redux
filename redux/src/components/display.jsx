import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    console.log(this.props)
    let text = this.props.text.value;
    return (
      <div className="ComponentThree">
         <p>Text: {text} </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const text = state.text;
  return {
    text
  };
}

export default connect(mapStateToProps)(Display);