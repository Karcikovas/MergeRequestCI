import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchProject } from '../../../../../core/Project/ProjectsActions'
import './Search.scss'

const Search = ({ searchForProject }) => {
    const handleChange = (event) => {
        const value = event.target.value;

        if (value.length > 3) searchForProject(value);
    }

    return(
        <input
            className='search'
            type="search"
            onChange={handleChange}
            placeholder="...search for project"
        />
    )
}

Search.propTypes = {
    searchForProject: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    searchForProject: (name) => dispatch(searchProject(name)),
})

export default connect(null ,mapDispatchToProps)(Search);
