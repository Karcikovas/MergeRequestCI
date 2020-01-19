import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProjects } from '../../../core/Project/ProjectsActions'
import Checkbox from '../../components/Checkbox/Checkbox'
import { getMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'
import { deleteMergeRequest } from '../../../core/MergeRequest/MergeRequestActions'

const Settings = ({
    dispatchFormSave,
    dispatchGetProjects,
    dispatchGetMergeRequest,
    projects,
    dispatchDeleteMergeRequest,
}) => {
    useEffect(() => {
        dispatchGetProjects()
    }, [])

    const formik = useFormik({
        initialValues: {
            projectID: '',
            upvotesToPass: '',
            downvotesToFail: '',
        },

        onSubmit: values => {
            dispatchFormSave(values)
        },
    })

    return (
        <div className="edit-dashboard-page">
            {projects.map(project => (
                <Checkbox
                    key={project.id}
                    set={() => dispatchGetMergeRequest(project.id)}
                    unSet={() => dispatchDeleteMergeRequest(project.id)}
                    text={project.name}
                />
            ))}

            <form className="settings-form" onSubmit={formik.handleSubmit}>
                <h2>Edit Your Settings here:</h2>

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
    projects: PropTypes.array,
}

Settings.defaultProps = {
    projects: [],
}

const mapStateToProps = state => ({
    projects: state.projects,
})

const mapDispatchToProps = dispatch => ({
    dispatchFormSave: data => dispatch(saveSettings(data)),
    dispatchGetProjects: () => dispatch(getProjects()),
    dispatchGetMergeRequest: id => dispatch(getMergeRequest(id)),
    dispatchDeleteMergeRequest: id => dispatch(deleteMergeRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
