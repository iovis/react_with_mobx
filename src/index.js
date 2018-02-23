import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.css';

import Store from './models/store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();
store.addCard('This is a test');

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
