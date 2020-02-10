import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import './SearchProject.scss'

const SearchProject = ({
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
            <div className="settings-form-input-row">
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
    )
}

SearchProject.propTypes = {
    dispatchFormSave: PropTypes.func.isRequired,
    dispatchGetMergeRequest: PropTypes.func.isRequired,
    upvotesToPass: PropTypes.number,
    downvotesToFail: PropTypes.number,
}
SearchProject.defaultProps = {
    upvotesToPass: null,
    downvotesToFail: null,
}

export default SearchProject
