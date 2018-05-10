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
                        22 <i className='wi wi-celsius'></i>
                    </div>
                    <div className='min-max'>
                        <div><i className='wi wi-direction-down'></i> 10 <i className='wi wi-celsius'></i></div>
                        <div><i className='wi wi-direction-up'></i> 30 <i className='wi wi-celsius'></i></div>
                    </div>
                </div>

                <div className='barometer-humidity'>
                    <div><i className='wi wi-barometer'></i> 1017.24 hPa</div>
                    <div><i className='wi wi-humidity'></i> 100 %</div>
                </div>

                <div className='rain-wind'>
                    <div><i className='wi wi-raindrop'></i> 0 %</div>
                    <div><i className='wi wi-strong-wind'></i> 100 km/h</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Today;