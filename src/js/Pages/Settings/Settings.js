import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import './Settings.scss'
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions'
import { getProjects } from '../../../core/Project/ProjectActions'

const Settings = ({dispatchFormSave, dispatchGetProjects}) => {
    useEffect(() => {
        dispatchGetProjects()
    }, []);


    const formik = useFormik({
        initialValues: {
            projectID: '',
            upvotesToPass: '',
            downvotesToFail: '',
        },

        onSubmit: (values) => {
            dispatchFormSave(values)
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
}

const mapDispatchToProps = dispatch => ({
    dispatchFormSave: data => dispatch(saveSettings(data)),
    dispatchGetProjects: () => dispatch(getProjects()),
})

export default connect(null, mapDispatchToProps)(Settings)
