import React from 'react';
import { celsiusToFahrenheit, formatDate, iconToClass } from '../helpers';

class NextDay extends React.Component {
    render() {
        if (!this.props.weather) {
            return <h3>Loading data</h3>;
        }

        let { temp_min, temp_max } = this.props.weather.main;
        let scaleClass = 'wi-celsius';
        const icon = this.props.weather.weather[0].icon;

        if (!this.props.isCelsius) {
            temp_min = celsiusToFahrenheit(temp_min);
            temp_max = celsiusToFahrenheit(temp_max);
            scaleClass = 'wi-fahrenheit';
        }

        return (
            <div className='next-day' onClick={() => this.props.handleChangeActiveDay(this.props.weather)}>
                <div className='weather-icon'>
                    <i className={`wi ${iconToClass(icon)}`}></i>
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