import React from 'react';
import './app-header.scss';
import NavBar from '../nav-bar';


export default function AppHeader() {
    return (
            <header className="app-header">
                <NavBar nav_items={[
                    {
                        link: "",
                        icon: "music",
                        title_text: "Chord Recognizer",
                    },
                    {
                        link: "about",
                        icon: "user",
                        title_text: "About",
                    },
                ]} />
            </header>
        );
}
