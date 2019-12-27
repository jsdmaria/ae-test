import React, { Component } from 'react';

import './FileZone.css';

class FileZone extends Component {
    render() {
        const { selectText, newStyles } = this.props;
        
        return (
            <div id="file-zone">
                <div id="file">
                <textarea className={`main-text ${newStyles.toLowerCase()}`} onDoubleClick={e => selectText(e.target.value)}>
                </textarea>
                </div>
            </div>
        );
    }
}

export default FileZone;
