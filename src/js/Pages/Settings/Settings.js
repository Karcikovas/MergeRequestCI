import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import './Settings.scss';
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions';
import { getProjectsPerPage } from '../../../core/SettingsForm/PerPage/PerPageActions';
import { getProjects } from '../../../core/Project/ProjectsActions';
import Checkbox from '../../components/Checkbox/Checkbox';
import { getMergeRequest } from '../../../core/MergeRequest/MergeRequestActions';
import { deleteMergeRequest } from '../../../core/MergeRequest/MergeRequestActions';
import { setMarkedProjectID } from '../../../core/MarkedProjects/MarkedProjectsActions';
import { setPageNumber } from '../../../core/SettingsForm/PageNumber/PageNumberActions';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';

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
    // markedProjects,
}) => {
    useEffect(() => {
        dispatchGetProjects(perPage, page)
    }, [])

    const formik = useFormik({
        initialValues: {
            projectID: '',
            upvotesToPass: upvotesToPass,
            downvotesToFail: downvotesToFail,
        },

        onSubmit: values => {
            dispatchFormSave(values)
        },
    })

    const options = [
        { label: '10 Project', value: 10 },
        { label: '20 Project', value: 20 },
        { label: '50 Project', value: 50 },
        { label: '100 Project', value: 100 },
    ]

    const onChange = (event) => {
        dispatchGetProjectsPerPage(event.target.value)
        dispatchGetProjects(event.target.value, page)
    }

    const SetActiveCheckbox = (id) => {
        dispatchSetMarkedProject(id)
        dispatchGetMergeRequest(id)
    }

    const NextPage = () => {
        let pageNumber = (page +=1)
        dispatchNextPage(pageNumber)
        dispatchGetProjects(perPage, pageNumber)
    }

    const PrevPage = () => {
        let pageNumber = (page > 1 ? page -=1 : 1)
        dispatchNextPage(pageNumber)
        dispatchGetProjects(perPage, pageNumber)
    }


    return (
        <div className="edit-dashboard-page">
            <div className="has-flex">
                <Select options={options} onChange={onChange} value={perPage} />
                <h2>ALL Visiable Projects to you:</h2>
            </div>

            {projects.map(project => (
                <Checkbox
                    key={project.id}
                    id={project.id}
                    set={() => SetActiveCheckbox(project.id)}
                    unSet={() => dispatchDeleteMergeRequest(project.id)}
                    text={project.namespace.path + '/' + project.name}
                />
            ))}

            <div className="pagination-control-container">
                <Button onClick={() => NextPage()}>Previous Page</Button>
                <div>{page}</div>
                <Button onClick={() => PrevPage()}>Next Page</Button>
            </div>

            <form className="settings-form" onSubmit={formik.handleSubmit}>
                <h2>Add Project Id:</h2>

                <div className="settings-form-input-row">
                    <>Project ID:</>

                    <input
                        id="projectID"
                        name="projectID"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.projectID}
                    />
                </div>

                <h2>Merge Request Rules:</h2>

                <div className="settings-form-input-row">
                    <>How many Likes to pass:</>

                    <input
                        id="upvotesToPass"
                        name="upvotesToPass"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.upvotesToPass}
                    />
                </div>

                <div className="settings-form-input-row">
                    <>How many Dislikes to fail:</>

                    <input
                        id="downvotesToFail"
                        name="downvotesToFail"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.downvotesToFail}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
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
    perPage: 10,
    page: 1,
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    upvotesToPass: state.settings.upvotesToPass,
    downvotesToFail: state.settings.downvotesToFail,
    perPage: state.settings.per_page,
    page: state.settings.page.pageNumber,
})

const mapDispatchToProps = dispatch => ({
    dispatchFormSave: data => dispatch(saveSettings(data)),
    dispatchGetProjects: (perPage, page) => dispatch(getProjects(perPage, page)),
    dispatchGetMergeRequest: (id) => dispatch(getMergeRequest(id)),
    dispatchDeleteMergeRequest: (id) => dispatch(deleteMergeRequest(id)),
    dispatchGetProjectsPerPage: (number) => dispatch(getProjectsPerPage(number)),
    dispatchSetMarkedProject: (id) => dispatch(setMarkedProjectID(id)),
    dispatchNextPage: (pageNumber) => dispatch(setPageNumber(pageNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
