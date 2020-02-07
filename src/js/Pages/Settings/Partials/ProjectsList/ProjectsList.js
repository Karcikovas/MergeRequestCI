import React from 'react'
import PropTypes from 'prop-types'
import './ProjectsList.scss'
import PerPageSelect from '../PerPageSelect/PerPageSelect'
import Checkbox from '../../../../components/Checkbox/Checkbox'
import PaginationControll from '../PaginationControl/PaginationControl'

const ProjectsList = ({
    onChange,
    perPage,
    projects,
    SetActiveCheckbox,
    dispatchDeleteMergeRequest,
    page,
    dispatchNextPage,
    dispatchGetProjects,
}) => {
    return (
        <div className="projects-list">
            <PerPageSelect onChange={onChange} perPage={perPage} />

            {projects.map(project => (
                <Checkbox
                    key={project.id}
                    id={project.id}
                    set={() => SetActiveCheckbox(project.id)}
                    unSet={() => dispatchDeleteMergeRequest(project.id)}
                    text={project.namespace.path + '/' + project.name}
                />
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
    onChange: PropTypes.func.isRequired,
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
