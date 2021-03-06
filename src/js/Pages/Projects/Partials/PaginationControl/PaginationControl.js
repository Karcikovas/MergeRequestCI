import React from 'react'
import PropTypes from 'prop-types'
import './PaginationControl.scss'
import Button from '../../../../components/Button/Button'

const PaginationControll = ({
    page,
    dispatchNextPage,
    dispatchGetProjects,
    perPage,
    projects,
}) => {
    const handleNextButton = page === 1;
    const handlePrevButton = projects.length !== perPage;

    const NextPage = () => {
        let pageNumber = (page += 1)
        dispatchNextPage(pageNumber)
        dispatchGetProjects(perPage, pageNumber)
    }

    const PrevPage = () => {
        let pageNumber = page > 1 ? (page -= 1) : 1
        dispatchNextPage(pageNumber)
        dispatchGetProjects(perPage, pageNumber)
    }

    return (
        <div className="pagination-control-container">
            <Button disabled={handleNextButton} onClick={() => PrevPage()}>Previous Page</Button>
                <div className="pagination-indicator">{page}</div>
            <Button disabled={handlePrevButton} onClick={() => NextPage()}>Next Page</Button>
        </div>
    )
}

PaginationControll.propTypes = {
    page: PropTypes.number,
    perPage: PropTypes.number,
    dispatchNextPage: PropTypes.func.isRequired,
    dispatchGetProjects: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape()),
}

PaginationControll.defaultProps = {
    page: 1,
    perPage: 0,
    projects: [],
}

export default PaginationControll
