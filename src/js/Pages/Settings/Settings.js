import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProject } from '../../../core/Project/ProjectActions'

const Settings = props => {
    const formik = useFormik({
        initialValues: {
            projectID: '',
            upvotes: '',
            successColor: ''
        },
        onSubmit: values => {
            const { dispatchFormSave, dispatchGetProjects } = props
            dispatchFormSave(values)
            dispatchGetProjects(values.projectID);
        },
    })

    return (
        <div className="edit-dashboard-page">
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
                        id="upvotes"
                        name="upvotes"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.upvotes}
                    />
                </div>

                <h2>Success color:</h2>

                <div className="settings-form-input-row">
                    <>How many Likes to pass:</>

                    <input
                        id="successColor"
                        name="successColor"
                        type="successColor"
                        onChange={formik.handleChange}
                        value={formik.values.successColor}
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
}

const mapDispatchToProps = dispatch => ({
    dispatchFormSave: data => dispatch(saveSettings(data)),
    dispatchGetProjects: id => dispatch(getProject(id)),
})

export default connect(null, mapDispatchToProps)(Settings)
