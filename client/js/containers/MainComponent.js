import React from 'react';
import {connect} from 'react-redux';

class MainComponent extends React.Component {

    render() {
        return (
            <div id="main-window">
                Привет!
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

export default MainComponent = connect(mapStateToProps)(MainComponent);