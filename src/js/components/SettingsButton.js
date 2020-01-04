import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const SettingsButton = ({ history }) => (
        <button
            id="settings-button"
            type="button"
            className="btn btn-default"
            title="Settings"
            onClick={() => history.push('/settings')}
        >
            <i className="fa fa-lg fa-gear"></i>
        </button>
);

SettingsButton.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
}

SettingsButton.defaultProps = {
    history: { push: () => console.log(null) }
}

export default withRouter(SettingsButton)
