import React from 'react';
import PropTypes from 'prop-types';
import './Messages.scss';

const Message = ({title, variant, text}) => {
    return (
    <div className={`messages is-${variant}`}>
        {title ? <h2>{title}</h2> : null}
        {text}
    </div>
    )
}

Message.propTypes = {
    title: PropTypes.string,
    variant: PropTypes.string,
    text: PropTypes.string,
};

Message.defaultProps = {
    title: '',
    variant: '',
    text: ''
}

export default Message;
