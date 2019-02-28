import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import Head from "./component/Head";
import Body from "./component/Body";
import Footer from "./component/Footer";
import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <main className='card'><Head/><Body/><Footer/></main></Provider>, document.getElementById('root'));


