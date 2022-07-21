import React from 'react';
import './style.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState((state) => ({
            input: event.target.value,
        }));
    }

    render() {
        return (
            <div>
                <textarea
                    id="editor"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <div id="previewer"></div>
            </div>
        );
    }
}

export default App;
