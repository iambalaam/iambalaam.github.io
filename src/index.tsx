import * as React from 'react';
import * as reactDOM from 'react-dom';

const app = () => {
    return (
        <div>Webpack is working!</div>
    );
}

reactDOM.render(
    app(),
    document.getElementById('app')
)
