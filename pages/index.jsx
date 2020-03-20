import React from 'react';
import {connect} from 'react-redux';
import { getProjects } from '../core/Project/ProjectsActions';

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {

        this.props.getProjectsList();

        return (
            <div>
                {/*<button onClick={this.props.incrementCounter}>Increment</button>*/}
                {/*<button onClick={this.props.decrementCounter}>Decrement</button>*/}
                {/*<h1>{this.props.counter}</h1>*/}
            </div>
        );
    }
}

const mapStateToProps = () => ({
    // counter: state.counter.value
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsList: () => dispatch(getProjects(10, 1)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

