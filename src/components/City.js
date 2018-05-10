import React from 'react';

class City extends React.Component {
    render() {
        const data = this.props.data;

        let cityString = 'Looking for your city...';
        if (data) {
            const city = this.props.data;
            cityString = `${city.name}, ${city.country}`;
        }

        return <div className='city'>{cityString}</div>
    }
}

export default City;