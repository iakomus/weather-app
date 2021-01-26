// core
import React from 'react';

// components
import FormatedDate from '../FormatedDate';
import Temperature from '../Temperature';

// models
import { Forecast } from '../../models/Forecast';

// styles
import './styles.css';

const DailyForecastDetailContainer = ({ details }) => {
    const {
        date,
        temperature: { min, max },
        humidity,
        wind: { speed },
    } = details;
    return (
        <div className="details">
            <h3>
                <FormatedDate date={date} />
            </h3>
            <div>
                <strong>Max Temperature: </strong>
                <Temperature value={max} />
            </div>
            <div>
                <strong>Min Temperature: </strong>
                <Temperature value={min} />
            </div>
            <div>
                <strong>Humidity: </strong>
                {`${humidity}%`}
            </div>
            <div>
                <strong>Wind: </strong>
                {`${speed}mph`}
            </div>
        </div>
    );
};

DailyForecastDetailContainer.propTypes = {
    details: Forecast,
};
DailyForecastDetailContainer.defaultProps = {
    details: undefined,
};

export default DailyForecastDetailContainer;
