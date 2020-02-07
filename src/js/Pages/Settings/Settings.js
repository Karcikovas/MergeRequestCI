import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProjectsPerPage } from '../../../core/SettingsForm/PerPage/PerPageActions'
import { getProjects } from '../../../core/Project/ProjectsActions'
import { getMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { deleteMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { setMarkedProjectID } from '../../../core/MarkedProjects/MarkedProjectsActions'
import { setPageNumber } from '../../../core/SettingsForm/PageNumber/PageNumberActions'
import ProjectsList from './Partials/ProjectsList/ProjectsList'
import Button from '../../components/Button/Button'
import Form from './Partials/Form/Form'
import PerPageSelect from './Partials/PerPageSelect/PerPageSelect'

const Settings = ({
    dispatchFormSave,
    dispatchGetProjects,
    dispatchGetMergeRequest,
    projects,
    dispatchDeleteMergeRequest,
    upvotesToPass,
    downvotesToFail,
    dispatchGetProjectsPerPage,
    perPage,
    page,
    dispatchSetMarkedProject,
    dispatchNextPage,
}) => {

    useEffect(() => {
        dispatchGetProjects(perPage, page)
    }, [])

    const onChange = event => {
        dispatchGetProjectsPerPage(event.target.value)
        dispatchGetProjects(event.target.value, page)
    }

    const SetActiveCheckbox = id => {
        dispatchSetMarkedProject(id)
        dispatchGetMergeRequest(id)
    }

    return (
        <div className="settings">
            <PerPageSelect onChange={onChange} perPage={perPage} />

                <Form
                    dispatchFormSave={dispatchFormSave}
                    upvotesToPass={upvotesToPass}
                    downvotesToFail={downvotesToFail}
                    dispatchGetMergeRequest={dispatchGetMergeRequest}
                />

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

            {/*<div className="has-flex">*/}
            {/*    {viewList ? (*/}
            {/*        <Button onClick={() => setviewList(false)}>*/}
            {/*            Projects List*/}
            {/*        </Button>*/}
            {/*    ) : (*/}
            {/*        <Button onClick={() => setviewList(true)}>*/}
            {/*            Settings Form*/}
            {/*        </Button>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    )
}

Settings.propTypes = {
    dispatchFormSave: PropTypes.func.isRequired,
    dispatchGetProjects: PropTypes.func.isRequired,
    dispatchGetMergeRequest: PropTypes.func.isRequired,
    dispatchDeleteMergeRequest: PropTypes.func.isRequired,
    dispatchGetProjectsPerPage: PropTypes.func.isRequired,
    dispatchSetMarkedProject: PropTypes.func.isRequired,
    dispatchNextPage: PropTypes.func.isRequired,
    projects: PropTypes.array,
    upvotesToPass: PropTypes.number,
    downvotesToFail: PropTypes.number,
    perPage: PropTypes.number,
    page: PropTypes.number,
}

Settings.defaultProps = {
    projects: [],
    upvotesToPass: null,
    downvotesToFail: null,
    perPage: 0,
    page: 1,
}

const mapStateToProps = state => ({
    projects: state.projects,
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
    dispatchSetMarkedProject: id => dispatch(setMarkedProjectID(id)),
    dispatchNextPage: pageNumber => dispatch(setPageNumber(pageNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
