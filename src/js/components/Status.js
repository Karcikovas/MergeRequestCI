import React from 'react'
import PropTypes from 'prop-types';

const ICONS = {
    success: 'check-circle',
    pending: 'question-circle',
    failure: 'times-circle',
    error: 'times-circle',
}
 const Status = ({status}) => {
    const { state, description } = status
    return (
        <div className="pr-status" title={description}>
            <i className={`fa fa-${ICONS[state]} ${state}`}></i>
        </div>
    )
}

Status.propTypes = {
    status: PropTypes.object,
}

Status.defaultProps = {
    status: {},
}

export default Status;
