import React from 'react';
import City from './City';
import ScalePicker from './ScalePicker';
import Today from './Today';
import NextDay from './NextDay';

class Frame extends React.Component {
    render() {
        return (
            <div className='frame'>
                <div className='top-part'>
                    <City name='Wroclaw' />
                    <ScalePicker />
                </div>

                <div className='mid-part'>
                    <Today />
                </div>

                <div className='btn-part'>
                    <NextDay />
                    <NextDay />
                    <NextDay />
                    <NextDay />
                    <NextDay />
                </div>
            </div>
        );
    }
}

export default Frame;