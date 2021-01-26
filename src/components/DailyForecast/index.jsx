// core
import React from 'react';
import PropTypes from 'prop-types';

// components
import FormatedDate from '../FormatedDate';
import Temperature from '../Temperature';

// models
import { Forecast } from '../../models/Forecast';

// styles
import './styles.css';

const DailyForecastContainer = ({ forecast, select, active }) => {
    const { date, temperature, description, icon } = forecast;
    const current = new Date().getHours();
    const theme = current > 18 || current < 6 ? 'dark' : 'light';

    return (
        <div className={`date ${active ? 'active' : ''}`}>
            <h3>
                <FormatedDate date={date} />
            </h3>
            <img src={`/assets/icons/${icon}-${theme}.png`} alt={description} />
            <p>
                <Temperature value={temperature.max} />
            </p>
            <p>{description}</p>
            <button type="button" onClick={() => select(forecast)}>
                More details
            </button>
        </div>
    );
};

DailyForecastContainer.propTypes = {
    forecast: Forecast,
    select: PropTypes.func,
    active: PropTypes.bool,
};
DailyForecastContainer.defaultProps = {
    forecast: undefined,
    select: () => {},
    active: false,
};

export default DailyForecastContainer;
