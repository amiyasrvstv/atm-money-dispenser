import React from 'react';
import './header.css';

export const Header = (props) => {
    return (
        <header>
            <h1 className="heading">{props.heading}</h1>
        </header>
    )
}

