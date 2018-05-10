import React from 'react';

class NextDay extends React.Component {
    render() {
        return (
            <div className='next-day'>
                <div className='weather-icon'>
                    <i class='wi wi-day-light-wind'></i>
                </div>

                <div className='day-night'>
                    <div className='max'>34 <i class='wi wi-celsius'></i></div>
                    <div className='slash'>/</div>
                    <div className='min'>12 <i class='wi wi-celsius'></i></div>
                </div>
            </div>
        );
    }
}

export default NextDay;