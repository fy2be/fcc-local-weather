import React from 'react';

class Today extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='left-icon'>
                    <i className='wi wi-day-sunny'></i>
                </div>

                <div className='temperature'>
                    <div className='now'>
                        {this.props.weather.now} <i className='wi wi-celsius'></i>
                    </div>
                    <div className='min-max'>
                        <div><i className='wi wi-direction-down'></i> {this.props.weather.min} <i className='wi wi-celsius'></i></div>
                        <div><i className='wi wi-direction-up'></i> {this.props.weather.max} <i className='wi wi-celsius'></i></div>
                    </div>
                </div>

                <div className='barometer-humidity'>
                    <div><i className='wi wi-barometer'></i> {this.props.weather.pressure} hPa</div>
                    <div><i className='wi wi-humidity'></i> {this.props.weather.humidity} %</div>
                </div>

                <div className='rain-wind'>
                    <div><i className='wi wi-raindrop'></i> {this.props.weather.raindrop} %</div>
                    <div><i className='wi wi-strong-wind'></i> {this.props.weather.wind} km/h</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Today;