import React, {Component} from 'react';
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";

import './App.css';

class App extends Component {
    state = {
        selectedValue: '',
        additionalClasses: []
    };

    selectText = (value) => {
        this.setState({selectedValue: value})
    };

    changeText = (value) => {
        const { selectedValue, additionalClasses } = this.state;

        if (!selectedValue) return;

        const isClassApplied = additionalClasses.includes(value);

        if (isClassApplied) {
            const newClasses = additionalClasses.filter(style => style !== value);

            this.setState({additionalClasses: newClasses});
        } else {
            additionalClasses.push(value);
            this.setState({additionalClasses: additionalClasses});
        }
    };

    copyToClipboard = () => {
        const { selectedValue } = this.state;

        if (!selectedValue) return;

        navigator.clipboard.writeText(selectedValue);
    };

    render() {
        const { additionalClasses } = this.state;

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <div>Now {additionalClasses.length ? additionalClasses.join(', ') : 'no styles'} are applied!</div>
                    <ControlPanel changeText={this.changeText} copyToClipboard={this.copyToClipboard}/>
                    <FileZone selectText={this.selectText} newStyles={additionalClasses.join(' ')}/>
                </main>
            </div>
        );
    }
}

export default App;
