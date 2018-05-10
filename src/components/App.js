import React from 'react';
import axios from 'axios';
import Frame from './Frame';
import { fahrenheitToCelsius } from '../helpers';
import config from '../credentials';

class App extends React.Component {
    state = {
        isCelsius: true,
        city: {},
        weather: {}
    };

    handleChangeScale = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({ isCelsius: !isCelsius });
    }

    convert(fdeg) {
        if (this.state.isCelsius) {
            return fahrenheitToCelsius(fdeg).toFixed(1);
        }
        return fdeg;
    }

    componentDidMount() {
        // 51.105, 17.036
        const api = 'http://api.openweathermap.org/data/2.5/forecast';

        axios.get(api, {
            params: {
                lat: 51.105,
                lon: 17.036,
                units: 'metric',
                APPID: config.API_KEY
            }
        })
            .then(response => {
                const city = response.data.city;
                const weather = response.data.list.filter((v, i) => {
                    return !(i % 8);
                });

                this.setState({
                    city: city,
                    weather: weather
                });
            })
            .catch(error => {
                // hm? :)
                console.log(error);
            })

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
            city={this.state.city}
            today={nowMock}
        />;
    }
}

export default App;