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
                    <ScalePicker
                        isCelsius={this.props.isCelsius}
                        handleChangeScale={this.props.handleChangeScale}
                    />
                </div>

                <div className='mid-part'>
                    <Today
                        isCelsius={this.props.isCelsius}
                        weather={this.props.today}
                    />
                </div>

                <div className='btn-part'>
                    <NextDay isCelsius={this.props.isCelsius} weather={this.props.today} />
                    <NextDay isCelsius={this.props.isCelsius} weather={this.props.today} />
                    <NextDay isCelsius={this.props.isCelsius} weather={this.props.today} />
                    <NextDay isCelsius={this.props.isCelsius} weather={this.props.today} />
                    <NextDay isCelsius={this.props.isCelsius} weather={this.props.today} />
                </div>
            </div>
        );
    }
}

export default Frame;