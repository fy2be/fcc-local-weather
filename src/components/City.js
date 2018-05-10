import React from 'react';

class City extends React.Component {
    render() {
        return <div className='city'>{this.props.name}</div>
    }
}

export default City;