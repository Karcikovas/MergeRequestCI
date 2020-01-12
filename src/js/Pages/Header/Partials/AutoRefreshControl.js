import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './AutoRefreshControl.scss';

const AutoRefreshControl = () => {
    useEffect(() => {

    })

    return (
        <div className="auto-refresh">
            <input
                type="checkbox"
            />
            <p className="auto-refresh">
                <strong>Auto-refresh every</strong>
            </p>
            <select
                className="auto-refresh-time"
            >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>30</option>
                <option>60</option>
            </select>
            <strong>minutes</strong>
        </div>
    )
}

AutoRefreshControl.propTypes = {
    onRefresh: PropTypes.func,
}

export default AutoRefreshControl
