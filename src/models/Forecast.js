import PropTypes from 'prop-types';

const Temperature = PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
});
const Wind = PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
});

export const Forecast = PropTypes.shape({
    date: PropTypes.number,
    temperature: Temperature,
    wind: Wind,
    humidity: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
});
