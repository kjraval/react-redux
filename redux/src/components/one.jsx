import React from "react";
import { connect } from "react-redux";
import allActions from "../Actions";
class One extends React.Component {
    constructor() {
        super();
    }


    update(e) {

        this.props.dispatch(allActions.textActions.setText(e.target.value));

    }

    render() {
        return (
            <>
                <input type="text" onChange={(e) => { this.update(e) }} />
            </>
        )
    }
}

function mapStateToProps(state) {
    const text = state.text;
    return {
        text
    };
}



export default connect(mapStateToProps)(One);