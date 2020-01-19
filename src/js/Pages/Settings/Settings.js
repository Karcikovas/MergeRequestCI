import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import './Settings.scss';
import { saveSettings } from '../../../core/SettingsForm/SettingsFormActions';
import { getProjects, getProject } from '../../../core/Project/ProjectsActions';
import Checkbox from '../../components/Checkbox/Checkbox';

const Settings = ({dispatchFormSave, dispatchGetProjects, projects, dispatchGetProject}) => {
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

            {
                projects.map((project) => <Checkbox key={project.id}  onChange={ () => dispatchGetProject(project.id)} text={project.name} />)
            }


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
    dispatchGetProject: PropTypes.func.isRequired,
    projects: PropTypes.array,
}

Settings.defaultProps = {
    projects: []
}

const mapStateToProps = (state) => ({
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    dispatchFormSave: (data) => dispatch(saveSettings(data)),
    dispatchGetProjects: () => dispatch(getProjects()),
    dispatchGetProject: (id) => dispatch(getProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
