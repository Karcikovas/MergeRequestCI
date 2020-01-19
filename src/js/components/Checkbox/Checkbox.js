import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({text, onChange}) => (
    <div className="checkbox">
        <input type="checkbox" onChange={onChange}/> {text}
    </div>
)

Checkbox.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    text: '',
}

export default Checkbox;
