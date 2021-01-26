// core
import React, { useEffect, useState } from 'react';

// components
import DailyForecastContainer from '../DailyForecast';
import DailyForecastDetailContainer from '../DailyForecastDetail';

// models
import { APIResponse } from '../../models/APIResponse';

// styles
import './styles.css';

const WeeklyForecastContainer = ({ data }) => {
    const [selected, setSelected] = useState(undefined);
    const { location, forecasts } = data;

    useEffect(() => {
        setSelected(forecasts[0]);
    }, []);

    const select = forecast => setSelected(forecast);

    return (
        <div
            className="weekly-forecast-container"
            style={
                selected && {
                    backgroundImage: `url(/assets/${selected.icon}.jpg)`,
                }
            }
        >
            <div className="weekly-forecast">
                <h1>{`${location.city}, ${location.country}`}</h1>

                {forecasts && (
                    <div className="daily-forecast">
                        {forecasts
                            .filter(forecast => forecast.date)
                            .filter((_, i) => i < 5)
                            .map(forecast => (
                                <DailyForecastContainer
                                    key={forecast.date}
                                    forecast={forecast}
                                    select={select}
                                    active={selected === forecast}
                                />
                            ))}
                    </div>
                )}

                {selected && (
                    <DailyForecastDetailContainer details={selected} />
                )}
            </div>
        </div>
    );
};

WeeklyForecastContainer.propTypes = {
    data: APIResponse,
};
WeeklyForecastContainer.defaultProps = {
    data: undefined,
};

export default WeeklyForecastContainer;
