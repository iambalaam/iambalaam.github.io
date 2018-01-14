import * as React from 'react';
import * as reactDOM from 'react-dom';
import {Nav} from './ui/Nav';


const app = () => {
    return (
        <Nav />
    );
}

reactDOM.render(
    app(),
    document.getElementById('app')
)
