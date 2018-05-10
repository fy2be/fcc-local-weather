import React from 'react';
import { celsiusToFahrenheit, formatDate } from '../helpers';

class NextDay extends React.Component {
    render() {
        if (!this.props.weather) {
            return <h3>Loading data</h3>;
        }

        let { temp_min, temp_max } = this.props.weather.main;
        let scaleClass = 'wi-celsius';

        if (!this.props.isCelsius) {
            temp_min = celsiusToFahrenheit(temp_min);
            temp_max = celsiusToFahrenheit(temp_max);
            scaleClass = 'wi-fahrenheit';
        }

        return (
            <div className='next-day'>
                <div className='weather-icon'>
                    <i className='wi wi-day-light-wind'></i>
                </div>

                <div className='date'>
                    {formatDate(this.props.weather.dt_txt)}
                </div>

                <div className='day-night'>
                    <div className='max'>{temp_max.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                    <div className='slash'>/</div>
                    <div className='min'>{temp_min.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                </div>
            </div>
        );
    }
}

export default NextDay;