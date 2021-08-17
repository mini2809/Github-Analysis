import React from "react";
import  ReactDOM  from "react-dom";
import App from "./src/App.js";
import {Provider} from"react-redux";
import store from "./src/redux/store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
,document.getElementById("root"));