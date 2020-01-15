import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
// import { connect } from 'react-redux'
import AutoRefreshControl from './Partials/AutoRefreshControl'
import SortControl from './Partials/SortControl'
import './Header.scss';
import Button from '../../components/Button/Button';
import DefaultLogo from '../../../images/ksi.png';
// import { refresh } from '../../../core/actions/index';
import { useLocation } from "react-router-dom";

//TODO: FIX Default prop to take default logo from props;
const Header = () => {
    const location = useLocation()

    useEffect(() => {
        // dispatchRefesh();
    }, []);

    return (
    <div className="header">
        <div className='has-margin'>
            <img className="header-logo" alt='/' src={DefaultLogo}/>
            {location.pathname !== '/'
                ? <div className="header-page-name">{location.pathname}</div>
                : null
            }

            <div className="toolbar">
                <Button
                    type="button"
                    title="Settings"
                    to='/settings'
                >
                   Settings
                </Button>

                <Button title="Refresh" >Refresh</Button>

                <AutoRefreshControl />

                <SortControl/>
            </div>
        </div>
    </div>
    )
}

Header.propTypes = {
    refresh: PropTypes.func,
    Logo: PropTypes.string,
    error: PropTypes.string,
    // dispatchRefesh: PropTypes.func,
}

Header.defaultProps = {
    logo: DefaultLogo,
}

// const mapDispatchToProps = (dispatch) => ({
    // dispatchRefesh: () => dispatch(refresh()),
// })

export default
// connect(null, mapDispatchToProps)(
    Header
// )
