import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../../../components/Button/Button'
import './SelectButton.scss'

const SelectButton = ({ add, remove, project, active }) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        if (active) return setState(true)
    }, [])

    const handleAddClick = project => {
        add(project)
        setState(!state)
    }

    const handleRemoveClick = project => {
        remove(project)
        setState(!state)
    }

    return (
        <Button
            className={`select-button ${state ? 'is-active' : ''}`}
            onClick={() =>
                state ? handleRemoveClick(project) : handleAddClick(project)
            }
            title={state ? 'Remove' : 'Add'}
        >
            {state ? 'Remove' : 'Add'}
        </Button>
    )
}

SelectButton.propTypes = {
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    project: PropTypes.shape(),
    active: PropTypes.bool,
}

SelectButton.defaultProps = {
    project: {},
    active: false,
}

export default SelectButton
