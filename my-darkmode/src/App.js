import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import FormValidation from "./components/formvalidation/FormValidation";

import Landing from "./components/landingpage/Landing";
import Navbars from "./components/Navbar/Navbars";

function App() {
    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);

    return (
        <div className={dark ? "darks" : "lights"}>
            <Navbars dark={dark} setdark={SetDark} />
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/forms" component={FormValidation}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
