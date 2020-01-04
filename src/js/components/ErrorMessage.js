import React from 'react'
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <div className="error-message-details">
                <div className="warning-symbol">
                    <i className="fa fa-2x fa-warning"></i>
                </div>
                <div>{message}</div>
            </div>
        </div>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    details: PropTypes.string
}

ErrorMessage.defaultProps = {
    message: '',
    details: ''
}

export default ErrorMessage;
