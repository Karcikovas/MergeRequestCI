import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Search from '../Projects/Partials/Search/Search'
import PerPageSelect from '../Projects/Partials/PerPageSelect/PerPageSelect'
import './Header.scss'
import Button from '../../../../components/Button/Button'
import { useLocation } from 'react-router-dom'
import { routes } from '../../../../core/config/routes';
import { getProjects } from '../../../../core/Project/ProjectsActions'

const Header = ({ getProjectsList, page }) => {
    const location = useLocation();

    const onChange = (event) => {
        const perPage = parseInt(event.target.value);
        getProjectsList(perPage, page)
    }

    return (
        <div className="header">

            <div className='header-toolset'>
                <Search />

                <PerPageSelect onChange={onChange}/>
                {
                    location.pathname === routes.homepage
                        ? <Button to={routes.projects.index}>Projects</Button>
                        : <Button to={routes.homepage}>Merge Requests</Button>
                }
            </div>
        </div>
    )
}

Header.propTypes = {
    getProjectsList: PropTypes.func.isRequired,
    page: PropTypes.number,
}

const mapStateToProps = (state) => ({
    page: state.settings.page,
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsList: (perPage, page) => dispatch(getProjects(perPage, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
