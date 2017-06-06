import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './utils/registerServiceWorker';
import Routes from './routes';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
