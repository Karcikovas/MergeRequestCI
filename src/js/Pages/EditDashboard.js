import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useFormik } from 'formik';
import './EditDashboard.scss';
import { saveSettings } from '../../core/SettingsForm/SettingsFormActions';

const EditDashboard = (props) => {
    const formik = useFormik({
        initialValues: {
            projectID: '',
        },
        onSubmit: values => {
            const { dispatchFormSave } = props;
            dispatchFormSave(values);
        },
    });

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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

EditDashboard.propTypes = {
    dispatchFormSave: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => ({
    dispatchFormSave: (data) => dispatch(saveSettings(data))
});

export default connect(null, mapDispatchToProps) (EditDashboard);
