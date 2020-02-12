import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProjectsPerPage } from '../../../core/SettingsForm/PerPage/PerPageActions'
import { getProjects } from '../../../core/Project/Projects/ProjectsActions'
import { getMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { deleteMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { addActiveProject } from '../../../core/ActiveProjects/ActiveProjectsActions'
import { setPageNumber } from '../../../core/SettingsForm/PageNumber/PageNumberActions'
import ProjectsList from './Partials/ProjectsList/ProjectsList'
import PerPageSelect from './Partials/PerPageSelect/PerPageSelect'
import Loader from '../../components/Loader/Loader'

const Settings = ({
    dispatchGetProjects,
    dispatchGetMergeRequest,
    projects,
    dispatchDeleteMergeRequest,
    dispatchGetProjectsPerPage,
    perPage,
    page,
    dispatchAddProject,
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

    const SetActiveCheckbox = project => {
        dispatchAddProject(project)
        dispatchGetMergeRequest(project.id)
    }

    return (
        <div className="settings">
            <div className="settings-filter-container">
                <PerPageSelect onChange={onChange} perPage={perPage} />
            </div>

            {status === 'loading' && <Loader />}

            {status !== 'loading' && (
                <ProjectsList
                    onChange={onChange}
                    perPage={perPage}
                    projects={projects}
                    SetActiveCheckbox={SetActiveCheckbox}
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
    dispatchGetMergeRequest: PropTypes.func.isRequired,
    dispatchDeleteMergeRequest: PropTypes.func.isRequired,
    dispatchGetProjectsPerPage: PropTypes.func.isRequired,
    dispatchAddProject: PropTypes.func.isRequired,
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
    dispatchGetMergeRequest: id => dispatch(getMergeRequest(id)),
    dispatchDeleteMergeRequest: id => dispatch(deleteMergeRequest(id)),
    dispatchGetProjectsPerPage: number => dispatch(getProjectsPerPage(number)),
    dispatchAddProject: id => dispatch(addActiveProject(id)),
    dispatchNextPage: pageNumber => dispatch(setPageNumber(pageNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
