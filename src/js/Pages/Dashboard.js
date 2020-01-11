import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from '../components/Message/Message'

const Main = ({error}) => {
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

export default connect(mapStateToProps, null)(Main)
