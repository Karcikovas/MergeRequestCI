import React from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

const Select = ({ options, onChange, value }) => (
    <>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select onChange={onChange} value={value}>
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
    onChange: PropTypes.func,
}

Select.defaultProps = {
    options: [],
    onChange: () => null,
}

export default Select
