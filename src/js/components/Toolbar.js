import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { refresh, loadPullRequests } from '../actions'
import RefreshButton from './RefreshButton'
import SettingsButton from './SettingsButton'
import AutoRefreshControl from './AutoRefreshControl'
// import FilterRepoDropdown from './FilterRepoDropdown'
import SortControl from './SortControl'

const Toolbar = ({refresh}) => {
    // const renderFilterRepoDropdown = () => {
    //     return (
    //         <FilterRepoDropdown
    //             onRefresh={refresh}
    //             failedRepos={failedRepos}
    //             allRepos={repos}
    //         />
    //     )
    // }

    return (
            <div id="toolbar">
                <SettingsButton />
                <RefreshButton onRefresh={refresh} />
                <AutoRefreshControl onRefresh={refresh} />
                <SortControl />
            </div>
    )
}

Toolbar.propTypes = {
    refresh: PropTypes.func.isRequired,
    // failedRepos: React.PropTypes.array.isRequired,
    // repos: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        refresh: () => {
            dispatch(refresh())
            dispatch(loadPullRequests())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
