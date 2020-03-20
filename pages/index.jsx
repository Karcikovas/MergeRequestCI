import React from 'react';
import {connect} from 'react-redux';
import { getProjects } from '../core/Project/ProjectsActions';
import { StaticRouter as Router, Route } from 'react-router-dom';
import { routes } from '../core/config/routes';
import Dashboard from './Dashboard/Dashboard';
// import Header from './Header/Header';

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {

        this.props.getProjectsList();

        return (
            <Router>
                {/*<Header />*/}

                <Route exact path={routes.homepage} component={Dashboard} />
                {/*<Route*/}
                {/*    exact*/}
                {/*    path={routes.projects.index}*/}
                {/*    component={Projects}*/}
                {/*/>*/}
            </Router>
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

