import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';import ReactDOM from "react-dom/client";
import  App  from "./App";
import { BrowserRouter } from "react-router-dom";
let root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
)