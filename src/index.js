import React from 'react';
import ReactDOM from 'react-dom';
import DocLab from './docs/DocLab';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';

ReactDOM.render(
    <DocLab />, document.getElementById('root'));
registerServiceWorker();
