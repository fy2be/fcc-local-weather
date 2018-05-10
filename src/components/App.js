import React from 'react';
import Frame from './Frame';
import {fahrenheitToCelsius} from '../helpers';

class App extends React.Component {
    state = {
        isCelsius: false,
    };
    
    handleChangeScale = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({isCelsius: !isCelsius});
    }
    
    convert(fdeg) {
        if (this.state.isCelsius) {
            return fahrenheitToCelsius(fdeg).toFixed(1);
        }
        return fdeg;
    }

    render() {
        const nowMock = {
            now: this.convert(91.4),
            min: this.convert(42.0),
            max: this.convert(101.1),
            pressure: 1017.24,
            humidity: 100,
            raindrop: 0,
            wind: 100
        };

        return <Frame 
                    isCelsius={this.state.isCelsius}
                    handleChangeScale={this.handleChangeScale}
                    today={nowMock}
                />;
    }
}

export default App;