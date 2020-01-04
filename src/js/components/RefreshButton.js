import React from 'react';
import PropTypes from 'prop-types';

const RefreshButton = ({onRefresh}) => {
    return (
        <button
            id="refresh-button"
            type="button"
            className="btn btn-default"
            onClick={onRefresh}
            title="Refresh"
        >
            <i className="fa fa-lg fa-refresh"></i>
        </button>
    )
}

RefreshButton.propTypes = {
    onRefresh: PropTypes.func.isRequired
}

export default RefreshButton;
