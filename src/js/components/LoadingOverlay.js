import React from 'react'
import LoadingIndicator from './LoadingIndicator'

const LoadingOverlay = () => (
        <div className="overlay">
            <LoadingIndicator size={100} />
        </div>
);

export default LoadingOverlay;
