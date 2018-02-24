import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './index.css';

import Store from './models/store';
import sampleCards from './dummy_cards';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new Store();

// TODO: remove sample cards //
store.cards = sampleCards;
window.store = store;

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
