import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProject } from '../../core/Project/ProjectActions'
import PropTypes from 'prop-types'
import Message from '../components/Message/Message'

const Main = ({error, dispatchProject}) => {

    useEffect(() => {
        dispatchProject(1);
    }, []);

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
}

Main.defaultProps = {
    loading: false,
    pullRequests: [],
    repos: [],
    title: '',
    failedRepos: [],
    error: '',
}

const mapStateToProps = (state) => ({
   error: state.error
});

const mapDispatchToProps = (dispatch) => ({
    dispatchProject: (id) => dispatch(getProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
