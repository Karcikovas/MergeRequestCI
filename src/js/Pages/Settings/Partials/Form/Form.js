import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import './Form.scss'

const Form = ({
    upvotesToPass,
    downvotesToFail,
    dispatchFormSave,
    dispatchGetMergeRequest,
}) => {
    const formik = useFormik({
        initialValues: {
            projectID: '',
            upvotesToPass: upvotesToPass,
            downvotesToFail: downvotesToFail,
        },

        onSubmit: values => {
            dispatchFormSave(values)
            dispatchGetMergeRequest(values.projectID)
        },
    })

    return (
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
    )
}

Form.propTypes = {
    dispatchFormSave: PropTypes.func.isRequired,
    dispatchGetMergeRequest: PropTypes.func.isRequired,
    upvotesToPass: PropTypes.number,
    downvotesToFail: PropTypes.number,
}
Form.defaultProps = {
    upvotesToPass: null,
    downvotesToFail: null,
}

export default Form
