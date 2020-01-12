import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';


const Button = ({value, onClick, title, children, to}) => (
    <Link
        className="button"
        type={value}
        title={title}
        onClick={onClick}
        to={to}
    >
        {children}
    </Link>
);

Button.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    to: PropTypes.string
};

Button.defaultProps = {
    value: '',
    onClick: () => null,
    title: '',
    text: '',
    to: ''
}

export default Button;
