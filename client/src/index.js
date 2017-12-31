import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
