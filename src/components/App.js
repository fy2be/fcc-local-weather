import React from 'react';
import axios from 'axios';
import Frame from './Frame';
import config from '../credentials';

class App extends React.Component {
    state = {
        isCelsius: true,
        weather: []
    };

    handleChangeScale = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({ isCelsius: !isCelsius });
    }

    componentDidMount() {
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

                this.setState({ city, weather });
            })
            .catch(error => {
                // hm? :)
                console.log(error);
            })

    }

    render() {
        return <Frame
            isCelsius={this.state.isCelsius}
            handleChangeScale={this.handleChangeScale}
            city={this.state.city}
            weather={this.state.weather}
        />;
    }
}

export default App;