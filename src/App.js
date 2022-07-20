import React from 'react';
import './style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div id="editor"></div>
                <div id="previewer"></div>
            </div>
        );
    }
}

export default App;
