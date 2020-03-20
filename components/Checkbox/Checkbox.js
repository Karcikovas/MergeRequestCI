import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Checkbox.scss'

const Checkbox = ({ text, set, unSet }) => {
    const [checked, setCheckList] = useState(false)

    const handleChange = () => {
        setCheckList(!checked)
        !checked === true ? set() : unSet()
    }

    return (
        <div className="checkbox">
            <input type="checkbox" checked={checked} onChange={handleChange} />{' '}
            {text}
        </div>
    )
}

Checkbox.propTypes = {
    text: PropTypes.string,
    set: PropTypes.func.isRequired,
    unSet: PropTypes.func.isRequired,
    activeProjects: PropTypes.array,
}

Checkbox.defaultProps = {
    text: '',
    activeProjects: [],
}

const mapStateToProps = state => ({
    activeProjects: state.settings.active_projects,
})

export default connect(mapStateToProps, null)(Checkbox)
