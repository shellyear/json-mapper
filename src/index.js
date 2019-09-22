import React from 'react';
import ReactDOM from 'react-dom';
import Engine from './components/root/Engine';
import json from './data/users';
import './index.css';


ReactDOM.render(<Engine data={json} keyName={null}/>, document.getElementById('root'));

