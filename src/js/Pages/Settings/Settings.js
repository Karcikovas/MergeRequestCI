import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProjectsPerPage } from '../../../core/SettingsForm/PerPage/PerPageActions'
import { getProjects } from '../../../core/Project/Projects/ProjectsActions'
import { deleteMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { setPageNumber } from '../../../core/SettingsForm/PageNumber/PageNumberActions'
import ProjectsList from './Partials/ProjectsList/ProjectsList'
import PerPageSelect from './Partials/PerPageSelect/PerPageSelect'
import Loader from '../../components/Loader/Loader'
import SelectStatus from './Partials/ProjectsList/Partials/SelectStatus/SelectStatus'

const Settings = ({
    dispatchGetProjects,
    projects,
    dispatchDeleteMergeRequest,
    dispatchGetProjectsPerPage,
    perPage,
    page,
    dispatchNextPage,
    status,
}) => {
    useEffect(() => {
        dispatchGetProjects(perPage, page)
    }, [])

    const onChange = event => {
        dispatchGetProjectsPerPage(event.target.value)
        dispatchGetProjects(event.target.value, page)
    }

    return (
        <div className="settings">
            <div className="settings-filter-container">
                <SelectStatus/>

                <PerPageSelect onChange={onChange} perPage={perPage} />
            </div>

            {status === 'loading' && <Loader />}

            {status !== 'loading' && (
                <ProjectsList
                    onChange={onChange}
                    perPage={perPage}
                    projects={projects}
                    dispatchDeleteMergeRequest={dispatchDeleteMergeRequest}
                    page={page}
                    dispatchNextPage={dispatchNextPage}
                    dispatchGetProjects={dispatchGetProjects}
                />
            )}
        </div>
    )
}

Settings.propTypes = {
    dispatchFormSave: PropTypes.func.isRequired,
    dispatchGetProjects: PropTypes.func.isRequired,
    dispatchDeleteMergeRequest: PropTypes.func.isRequired,
    dispatchGetProjectsPerPage: PropTypes.func.isRequired,
    dispatchNextPage: PropTypes.func.isRequired,
    projects: PropTypes.array,
    upvotesToPass: PropTypes.number,
    downvotesToFail: PropTypes.number,
    perPage: PropTypes.number,
    page: PropTypes.number,
    status: PropTypes.string,
}

Settings.defaultProps = {
    projects: [],
    upvotesToPass: null,
    downvotesToFail: null,
    perPage: 0,
    page: 1,
    status: '',
}

const mapStateToProps = state => ({
    projects: state.projects.available_projects,
    status: state.projects.status,
    upvotesToPass: state.settings.upvotesToPass,
    downvotesToFail: state.settings.downvotesToFail,
    perPage: state.settings.per_page,
    page: state.settings.page.pageNumber,
})

const mapDispatchToProps = dispatch => ({
    dispatchFormSave: data => dispatch(saveSettings(data)),
    dispatchGetProjects: (perPage, page) =>
        dispatch(getProjects(perPage, page)),
    dispatchDeleteMergeRequest: id => dispatch(deleteMergeRequest(id)),
    dispatchGetProjectsPerPage: number => dispatch(getProjectsPerPage(number)),
    dispatchNextPage: pageNumber => dispatch(setPageNumber(pageNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
