import React from 'react'
import PropTypes from 'prop-types'
import './Messages.scss'

const Message = ({ title, variant, children }) => {
    return (
        <div className={`messages is-${variant}`}>
            {title ? <h2>{title}</h2> : null}
            {children}
        </div>
    )
}

Message.propTypes = {
    title: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node,
}

Message.defaultProps = {
    title: '',
    variant: '',
}

export default Message
