import React from 'react'
import PropTypes from 'prop-types'
import './PerPageSelect.scss'
import Select from '../../../../components/Select/Select'

const PerPageSelect = ({ onChange, perPage }) => {
    const options = [
        { label: '10 Project', value: 10 },
        { label: '20 Project', value: 20 },
        { label: '50 Project', value: 50 },
        { label: '100 Project', value: 100 },
    ]

    return (
        <div className="per-page-container">
            <Select options={options} onChange={onChange} value={perPage} />
        </div>
    )
}

PerPageSelect.propTypes = {
    perPage: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

PerPageSelect.defaultProps = {
    perPage: 0,
}

export default PerPageSelect
