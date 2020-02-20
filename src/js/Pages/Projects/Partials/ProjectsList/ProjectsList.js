import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ProjectsList.scss'
import PaginationControll from '../PaginationControl/PaginationControl'
import SelectButton from './Partials/Button/SelectButton'
import {
    removeActiveProject,
    addActiveProject,
} from '../../../../../core/ActiveProjects/ActiveProjectsActions'

const ProjectsList = ({
    perPage,
    projects,
    addProject,
    removeProject,
    page,
    dispatchNextPage,
    dispatchGetProjects,
    selectedProjects,
}) => {
    const handleFilter = project => {
        return !!selectedProjects.find(selected => selected.id === project.id)
    }

    return (
        <ul className="projects-list">
            {projects.map(project => (
                <li key={project.id}>
                    <div className="projects-list-item-info">
                        <h2>{project.name}</h2>

                        <p>{project.description}</p>
                    </div>

                    <SelectButton
                        add={addProject}
                        remove={removeProject}
                        active={handleFilter(project)}
                        project={project}
                    />
                </li>
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
        </ul>
    )
}

ProjectsList.propTypes = {
    perPage: PropTypes.number,
    projects: PropTypes.array,
    addProject: PropTypes.func.isRequired,
    removeProject: PropTypes.func.isRequired,
    dispatchNextPage: PropTypes.func.isRequired,
    dispatchGetProjects: PropTypes.func.isRequired,
    selectedProjects: PropTypes.array,
}

ProjectsList.defaultProps = {
    perPage: 0,
    projects: [],
    selectedProjects: [],
}

const mapStateToProps = state => ({
    selectedProjects: state.active_projects,
})

const mapDispatchToProps = dispatch => ({
    addProject: project => dispatch(addActiveProject(project)),
    removeProject: project => dispatch(removeActiveProject(project)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
