import React from 'react';

class ScalePicker extends React.Component {
    scaleToIcon() {
        return this.props.isCelsius ? 'wi-celsius' : 'wi-fahrenheit';
    }

    render() {
        return (
            <div className='scale-picker'>
                <i className={`wi ${this.scaleToIcon()}`} onClick={this.props.handleChangeScale}></i>
            </div>
        );
    }
}

export default ScalePicker;