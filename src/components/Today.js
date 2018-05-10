import React from 'react';
import { celsiusToFahrenheit } from '../helpers';

class Today extends React.Component {
    render() {
        if (!this.props.weather) {
            return <h2>Loading data...</h2>;
        }

        let { temp, temp_min, temp_max } = this.props.weather.main;
        const { pressure, humidity } = this.props.weather.main;
        const wind = this.props.weather.wind.speed;
        let scaleClass = 'wi-celsius';

        if (!this.props.isCelsius) {
            temp = celsiusToFahrenheit(temp);
            temp_min = celsiusToFahrenheit(temp_min);
            temp_max = celsiusToFahrenheit(temp_max);
            scaleClass = 'wi-fahrenheit';
        }

        return (
            <React.Fragment>
                <div className='left-icon'>
                    <i className='wi wi-day-sunny'></i>
                </div>

                <div className='temperature'>
                    <div className='now'>
                        {temp.toFixed(1)}
                        <i className={`wi ${scaleClass}`}></i>
                    </div>
                    <div className='min-max'>
                        <div><i className='wi wi-direction-down'></i> {temp_min.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                        <div><i className='wi wi-direction-up'></i> {temp_max.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                    </div>
                </div>

                <div className='barometer-humidity'>
                    <div><i className='wi wi-barometer'></i> {pressure} hPa</div>
                    <div><i className='wi wi-humidity'></i> {humidity} %</div>
                </div>

                <div className='rain-wind'>
                    <div><i className='wi wi-raindrop'></i> 0 %</div>
                    <div><i className='wi wi-strong-wind'></i> {wind} m/s</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Today;