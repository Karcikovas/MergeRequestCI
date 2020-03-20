import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchProject, getProjects} from '../../../../core/Project/ProjectsActions'
import './Search.scss'

const Search = ({ searchForProject, returnDefaultList, amount, page }) => {
    const handleChange = (event) => {
        const value = event.target.value;

        if (value.length > 3) searchForProject(value);

        if (value.length <= 3)returnDefaultList(amount, page);
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
    returnDefaultList: PropTypes.func.isRequired,
    amount: PropTypes.number,
    page: PropTypes.number,
}

const mapStateToProps = state => ({
    amount: state.settings.per_page,
    page: state.settings.page,
})

const mapDispatchToProps = dispatch => ({
    searchForProject: (name) => dispatch(searchProject(name)),
    returnDefaultList: (amount, page) => dispatch(getProjects(amount, page))
})

export default connect(mapStateToProps ,mapDispatchToProps)(Search);
