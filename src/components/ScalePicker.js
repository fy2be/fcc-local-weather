import React from 'react';

class ScalePicker extends React.Component {
    render() {
        return (
            <div className='scale-picker' onClick={this.props.handleChangeScale}>
                <i className='wi wi-degrees'></i> {this.props.isCelsius ? 'C' : 'F'}
            </div>
        );
    }
}

export default ScalePicker;