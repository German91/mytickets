import ReactDOM from 'react-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './utils/registerServiceWorker';
import Routes from './routes';
import Auth from './utils/Auth';

axios.defaults.baseURL = process.env.REACT_APP_ROOT_URL;
axios.defaults.headers.common['Authorization'] = Auth.getToken();
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
