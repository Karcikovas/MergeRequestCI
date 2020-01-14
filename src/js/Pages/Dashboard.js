import React
    // , { useEffect }
    from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../core/Project/ProjectActions'
import PropTypes from 'prop-types'
import Message from '../components/Message/Message'

const Main = ({error, projectsIDs}) => {
    console.log(projectsIDs);
    // useEffect(() => {
    //     if(projectsIDs !== []) {
    //         projectsIDs.map((id) => dispatchProject(id))
    //     }
    // }, []);

    return (
        <div className="container">
            {error && <Message text={error} variant='error'/>}
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
    projectsIDs: PropTypes.array,
}

Main.defaultProps = {
    loading: false,
    pullRequests: [],
    repos: [],
    title: '',
    failedRepos: [],
    error: '',
    // projectsIDs: []
}

const mapStateToProps = (state) => ({
   projectsIDs: state
});

const mapDispatchToProps = (dispatch) => ({
    dispatchProject: (id) => dispatch(getProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
