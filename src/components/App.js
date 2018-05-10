import React from 'react';
import Frame from './Frame';

class App extends React.Component {
    state = {
        isCelsius: false,
    };

    handleChangeScale = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({isCelsius: !isCelsius});
    }

    render() {
        return <Frame 
                    isCelsius={this.state.isCelsius}
                    handleChangeScale={this.handleChangeScale}
                />;
    }
}

export default App;