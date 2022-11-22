import React from "react";
import ReactDom from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux"; 

import App from './main/app';
import Reducers from './main/reducers'


const store = createStore(Reducers)
ReactDom.render(
<Provider> 
    <App />
</Provider>
, document.getElementById('app'))