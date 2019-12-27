import React, { Component } from 'react';

import { STYLES_NAMES } from './ControlPanel.constants';

import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        const { changeText, copyToClipboard } = this.props;

        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="bolt-btn" type="button" onClick={() => changeText(STYLES_NAMES.BOLD)}><b>B</b></button>
                    <button className="italic-btn" type="button" onClick={() => changeText(STYLES_NAMES.ITALIC)}><i>I</i></button>
                    <button className="underscore-btn" type="button" onClick={() => changeText(STYLES_NAMES.UNDERSCORED)}><u>U</u></button>
                    <button className="copy-btn" type="button" onClick={copyToClipboard}>Copy</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
