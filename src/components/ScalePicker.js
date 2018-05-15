import React from 'react';

const ScalePicker = props => (
    <div className='scale-picker' onClick={props.handleChangeScale}>
        <i className='wi wi-degress'></i> {props.isCelsius ? 'C' : 'F'}
    </div>
);

export default ScalePicker;