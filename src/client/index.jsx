import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../app.tsx';

window.addEventListener('load', () => {
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
})