import React from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

const Select = ({ options, onChange }) => (
    <>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </>
)

Select.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func.isRequired,
}

Select.defaultProps = {
    options: [],
}

export default Select
