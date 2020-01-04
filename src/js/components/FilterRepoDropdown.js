import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FilterRepoDropdown = ({ onRefresh, allRepos }) => {
    // constructor(props) {
    //   super(props);
    //   this.state = { value: "All" };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }

    const [value, setValue] = useState({ value: 'All' })

    const handleChange = event => {
        setValue({ value: event.target.value })
    }

    const handleSubmit = event => {
        if (value === 'All') {
            onRefresh(undefined)
        } else {
            onRefresh(value)
        }
        event.preventDefault()
    }

    return (
        <div className="filter-repo-container">
            <label>
                <strong>Search By Repository:</strong>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select value={value} onChange={handleChange()}>
                    <option key={0} value="All">
                        All
                    </option>
                    {allRepos.map(repo => (
                        <option key={repo} value={repo}>
                            {repo}
                        </option>
                    ))}
                </select>
            </label>
            <button
                id="search-button"
                className="btn btn-default btn-filter"
                type="button"
                onClick={handleSubmit()}
            >
                Search
            </button>
        </div>
    )
}

FilterRepoDropdown.propTypes = {
    failedRepos: PropTypes.array,
    onRefresh: PropTypes.func.isRequired,
    allRepos: PropTypes.array,
}

FilterRepoDropdown.defaultProps = {
    failedRepos: [],
    allRepos: [],
}

export default FilterRepoDropdown
