import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../../../components/Button/Button'

const SelectButton = ({ onClick, project, active }) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        if(active) return setState(true)
    }, [])

    const handleOnClick = (project) => {
        onClick(project)
        setState(!state)
    }

    return (
        <Button
            onClick={() => handleOnClick(project)}
            title={state ? 'Remove' : 'Add'}
        >
            {state ? 'Remove' : 'Add'}
        </Button>
    )
}

SelectButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    project: PropTypes.shape(),
    active: PropTypes.bool,
}

SelectButton.defaultProps = {
    project: {},
    active: false
}

export default SelectButton;
