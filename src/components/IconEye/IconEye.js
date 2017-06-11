import React from 'react';
import PropTypes from 'prop-types';

function IconEye({size}) {
    let width, height;

    if (size === "sm") {
        width = "16";
        height = "16";
    } else if (size === "md") {
        width = "32";
        height = "32";
    } else if (size === "lg") {
        width = "48";
        height = "48";
    } else if (size === "xl") {
        width = "64";
        height = "64";
    }

    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5zm3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348 7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462 4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5z"/>
        </svg>
    )
}

IconEye.propTypes = {
    /** Can specify "sm", "md", "lg", "xl". If not specificied, will default to "sm" (base 16px). */
    size: PropTypes.string
};

IconEye.defaultProps = {
    size: "sm"
};

export default IconEye;