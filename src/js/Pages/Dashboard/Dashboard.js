import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Message from '../../components/Message/Message'
import Card from '../../components/Card/Card'
import './Dashboard.scss'
import { getMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'

const Main = ({
    error,
    mergeRequests,
    activeProjects,
    dispatchGetMergeRequest,
}) => {
    useEffect(() => {
        activeProjects.map((project) => dispatchGetMergeRequest(project.id))
    }, [])

    if (mergeRequests) {
        return (
            <ul className="dashboard-merge-request-list">
                {mergeRequests.map(mergeRequest => (
                    <Card key={mergeRequest.id} mergeRequest={mergeRequest} />
                ))}
            </ul>
        )
    }

    return (
        <div className="container">
            {error && <Message text={error} variant="error" />}
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
    dispatchGetMergeRequest: PropTypes.func.isRequired,
    settings: PropTypes.objectOf(PropTypes.string),
    mergeRequests: PropTypes.array,
    activeProjects: PropTypes.array,
}

Main.defaultProps = {
    loading: false,
    pullRequests: [],
    repos: [],
    title: '',
    failedRepos: [],
    error: '',
    settings: {},
    mergeRequests: [],
    activeProjects: [],
}

const mapStateToProps = state => ({
    settings: state.settings,
    mergeRequests: state.mergeRequest,
    activeProjects: state.active_projects,
})

const mapDispatchToProps = dispatch => ({
    dispatchGetMergeRequest: id => dispatch(getMergeRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
