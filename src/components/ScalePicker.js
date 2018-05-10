import React from 'react';

class ScalePicker extends React.Component {
    state = {
        isCelsius: false
    };

    scaleToIcon() {
        return this.state.isCelsius ? 'wi-celsius' : 'wi-fahrenheit';
    }

    handleChange = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({ isCelsius: !isCelsius });
    };

    render() {
        return (
            <div className='scale-picker'>
                <i className={`wi ${this.scaleToIcon()}`} onClick={this.handleChange}></i>
            </div>
        );
    }
}

export default ScalePicker;