import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.jsx';

ReactDOM.render(<App limit={10} />, document.getElementById('root'));