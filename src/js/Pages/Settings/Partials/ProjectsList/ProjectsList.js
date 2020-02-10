import React from 'react'
import PropTypes from 'prop-types'
import './ProjectsList.scss'
import Button from '../../../../components/Button/Button'
import PaginationControll from '../PaginationControl/PaginationControl'

const ProjectsList = ({
    perPage,
    projects,
    SetActiveCheckbox,
    page,
    dispatchNextPage,
    dispatchGetProjects,
}) => {
    return (
        <div className="projects-list">
            {projects.map(project => (
                <div key={project.id} className="projects-list-item">
                    <li className="projects-list-item__info">
                        <h2>{project.name}</h2>

                        <p>{project.description}</p>
                    </li>

                    <Button
                        onClick={() =>SetActiveCheckbox(project.id)}
                        title="Add">
                        ADD
                    </Button>
                </div>
            ))}

            {projects.length >= 0 && (
                <PaginationControll
                    page={page}
                    perPage={perPage}
                    projects={projects}
                    dispatchNextPage={dispatchNextPage}
                    dispatchGetProjects={dispatchGetProjects}
                />
            )}
        </div>
    )
}

ProjectsList.propTypes = {
    perPage: PropTypes.number,
    projects: PropTypes.array,
    SetActiveCheckbox: PropTypes.func.isRequired,
    dispatchDeleteMergeRequest: PropTypes.func.isRequired,
    dispatchNextPage: PropTypes.func.isRequired,
    dispatchGetProjects: PropTypes.func.isRequired,
}

ProjectsList.defaultProps = {
    perPage: 0,
    projects: [],
}

export default ProjectsList
