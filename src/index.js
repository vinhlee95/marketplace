import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "element-theme-default"

import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

// Bring in default Element React theme

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
