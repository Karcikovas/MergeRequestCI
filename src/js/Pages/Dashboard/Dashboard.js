import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../../core/Project/ProjectActions';
import PropTypes from 'prop-types';
import Message from '../../components/Message/Message';
import Card from '../../components/Card/Card';
import './Dashboard.scss';

const Main = ({ error, dispatchProject, projects}) => {
    useEffect(() => {
        // if (settings === []) {
        //     settings.map(id => dispatchProject(id.projectID))
        // }

        dispatchProject()
    }, []);

    if (projects) {
        return (
            <ul className='dashboard-merge-request-list'>
                {
                    projects.map((project) => <Card key={project.id} project={project}/>)
                }
            </ul>
        )
    } return (
        <div className="container">
            {error && <Message text={error} variant="error"/>}
        </div>
    )
}

Main.propTypes = {
    loading: PropTypes.bool,
    pullRequests: PropTypes.array,
    repos: PropTypes.array,
    title: PropTypes.string,
    failedRepos: PropTypes.array,
    error: PropTypes.string,
    dispatchProject: PropTypes.func.isRequired,
    settings: PropTypes.array,
    // projects: PropTypes.array,
}

Main.defaultProps = {
    loading: false,
    pullRequests: [],
    repos: [],
    title: '',
    failedRepos: [],
    error: '',
    settings: [],
    // projects: [],
}

const mapStateToProps = (state) => ({
    settings: state.settings,
    projects: state.project,
})

const mapDispatchToProps = (dispatch) => ({
    dispatchProject: id => dispatch(getProject(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
