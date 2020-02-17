import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import Button from '../../components/Button/Button'
import DefaultLogo from '../../../assets/images/ksi.png'
import { useLocation } from 'react-router-dom'
import { routes } from '../../../core/config/routes'

const Header = () => {
    const location = useLocation()

    return (
        <div className="header">
            <div className="has-margin">
                <img className="header-logo" alt="/" src={DefaultLogo} />
                {location.pathname !== routes.homepage ? (
                    <div className="header-page-name">{location.pathname}</div>
                ) : null}

                <div className="toolbar">
                    <Button title="Refresh" to={routes.homepage}>
                        Merge Request
                    </Button>

                    <Button
                        type="button"
                        title="Settings"
                        to={routes.projects.index}
                    >
                        Projects
                    </Button>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    refresh: PropTypes.func,
    Logo: PropTypes.string,
    error: PropTypes.string,
}

Header.defaultProps = {
    logo: DefaultLogo,
}

export default Header
