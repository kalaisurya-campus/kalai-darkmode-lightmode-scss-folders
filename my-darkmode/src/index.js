import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import store from "./components/reduxfolder/stores/store";
import DataProviders from "./components/usecontexts/DataProviders";

ReactDOM.render(
    <Provider store={store}>
        <DataProviders>
            <App />
        </DataProviders>
    </Provider>,
    document.getElementById("root")
);
