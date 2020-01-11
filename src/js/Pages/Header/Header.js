import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { refresh, loadPullRequests } from '../../actions'
import AutoRefreshControl from './Partials/AutoRefreshControl'
import SortControl from './Partials/SortControl'
import './Header.scss';
import Button from '../../components/Button/Button';
import DefaultLogo from '../../../images/ksi.png';
import { useRouteMatch } from 'react-router-dom';

//TODO: FIX Default prop to take default logo from props;
const Header = ({refresh, Logo}) => {
    let { path, url } = useRouteMatch();
    return (
    <div className="header">
        <div className='has-margin'>
            <img className="header-logo" alt='/' src={DefaultLogo}/>
            <div>
                {console.log({path})}
                {console.log({url})}
            </div>


            <div className="toolbar">
                <Button
                    type="button"
                    title="Settings"
                    to='/settings'
                >
                    <i className="fa fa-lg fa-refresh">Settings</i>
                </Button>

                <Button title="Refresh"><i className="fa fa-lg fa-refresh"/>Refresh</Button>

                <AutoRefreshControl onRefresh={refresh}/>

                <SortControl/>
            </div>
        </div>
    </div>
    )
}

Header.propTypes = {
    refresh: PropTypes.func.isRequired,
    Logo: PropTypes.string,
    // failedRepos: React.PropTypes.array.isRequired,
    // repos: React.PropTypes.array.isRequired
}

Header.defaultProps = {
    logo: DefaultLogo,
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        refresh: () => {
            dispatch(refresh())
            dispatch(loadPullRequests())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
