import React from 'react'
import PropTypes from 'prop-types';
// import "../../assets/scss/loadingIndicator.scss";

const LoadingIndicator = ({size}) => {
    const style = {
        width: size,
        height: size,
    }

    return (
        <div className="sk-fading-circle" style={style}>
            {/*<div className="sk-circle1 sk-circle"></div>*/}
            {/*<div className="sk-circle2 sk-circle"></div>*/}
            {/*<div className="sk-circle3 sk-circle"></div>*/}
            {/*<div className="sk-circle4 sk-circle"></div>*/}
            {/*<div className="sk-circle5 sk-circle"></div>*/}
            {/*<div className="sk-circle6 sk-circle"></div>*/}
            {/*<div className="sk-circle7 sk-circle"></div>*/}
            {/*<div className="sk-circle8 sk-circle"></div>*/}
            {/*<div className="sk-circle9 sk-circle"></div>*/}
            {/*<div className="sk-circle10 sk-circle"></div>*/}
            {/*<div className="sk-circle11 sk-circle"></div>*/}
            {/*<div className="sk-circle12 sk-circle"></div>*/}
        </div>
    )
}

LoadingIndicator.propTypes = {
    size: PropTypes.number
}

LoadingIndicator.defaultProps = {
    size: 40
}

export default LoadingIndicator
