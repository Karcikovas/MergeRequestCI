import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ProjectsList.scss'
import PaginationControll from '../PaginationControl/PaginationControl'
import SelectButton from './Partials/SelectButton';

const ProjectsList = ({
    perPage,
    projects,
    SetActiveCheckbox,
    page,
    dispatchNextPage,
    dispatchGetProjects,
    selectedProjects,
}) => {
    const handleFilter = (project) => {
        return !!selectedProjects.find(selected => selected.id === project.id);
    }
    
    return (
        <div className="projects-list">
            {projects.map(project => (
                <div key={project.id} className="projects-list-item">
                    <li className="projects-list-item__info">
                        <h2>{project.name}</h2>

                        <p>{project.description}</p>
                    </li>

                    <SelectButton
                        onClick={SetActiveCheckbox}
                        active={handleFilter(project)}
                        project={project}
                    />
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

export default connect(mapStateToProps, null)(ProjectsList)
