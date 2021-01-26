import PropTypes from 'prop-types';
import { Forecast } from './Forecast';
import { Location } from './Location';

export const APIResponse = PropTypes.shape({
    location: Location,
    forecasts: PropTypes.arrayOf(Forecast),
});
