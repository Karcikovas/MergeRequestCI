import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './Button.scss'

const Button = ({ value, onClick, title, children, to }) => {
    const { pathname } = useLocation()

    if (to) {
        return (
            <Link
                className={`button  ${pathname === to ? 'is-active' : ''}`}
                type={value}
                title={title}
                onClick={onClick}
                to={to}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className='button'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    to: PropTypes.string,
}

Button.defaultProps = {
    value: '',
    title: '',
    text: '',
    to: '',
}

export default Button
