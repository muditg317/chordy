import React from 'react';
import './about.scss';

export default function About() {
    return (
            <div className="about">
                <h1>About Chordy</h1>
                <p>I created this tool to listen to live audio and determine what notes and/or chords are being played.
                This tool uses the <a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform">Fast Fourier Transform</a> to anlyze incoming audio.
                I tried to make the UX here as convenient as possible, but I'd love to hear your design input;
                I'm not a front-end person, so I'm doing my best :).</p>
                <h2>Me!</h2>
                <p>This is something I wanted to make to learn about about the Fast Fourier Transform. Also, I'm learning guitar! I wanted a tool that could test if I'm playing correctly.
                Check out some of my other projects at muditgupta.appspot.com</p>
            </div>
        );
}
