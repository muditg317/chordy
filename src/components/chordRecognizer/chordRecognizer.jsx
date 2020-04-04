import React, { Component } from 'react';
import Script from 'react-load-script';
import './chordRecognizer.scss';
import './fft.js';


export default class ChordRecognizer extends Component {

    handleScriptCreate() {
        console.log("FFT created");
    }

    handleScriptError() {
        console.log("FFT failed");
    }

    handleScriptLoad() {
        console.log("FFT loaded");
    }

    render() {
        return (
                <div className="chordRecognizer">
                {
                    // <Script
                    //     url="fft.js"
                    //     onCreate={this.handleScriptCreate.bind(this)}
                    //     onError={this.handleScriptError.bind(this)}
                    //     onLoad={this.handleScriptLoad.bind(this)}
                    // />
                }
                </div>
            );
    }
}
