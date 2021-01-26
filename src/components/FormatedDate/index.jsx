// core
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const FormatedDate = ({ date }) => {
    return <Moment format="ddd Do MMM">{date}</Moment>;
};

FormatedDate.propTypes = {
    date: PropTypes.number,
};
FormatedDate.defaultProps = {
    date: undefined,
};

export default FormatedDate;
