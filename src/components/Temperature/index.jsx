// core
import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ value }) => {
    return (
        <>
            {value}
            &deg;C
        </>
    );
};

Temperature.propTypes = {
    value: PropTypes.number,
};
Temperature.defaultProps = {
    value: undefined,
};

export default Temperature;
