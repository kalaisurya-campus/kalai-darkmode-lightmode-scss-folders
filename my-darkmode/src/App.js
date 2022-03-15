import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import DataShowKalai from "./components/datashow/DataShowKalai";
import Firebasechat from "./components/firebaseChat/Firebasechat";
import FormValidation from "./components/formvalidation/FormValidation";

import Landing from "./components/landingpage/Landing";
import Addusers from "./components/MainEditDeleteComponent/addusers/Addusers";
import Edit from "./components/MainEditDeleteComponent/edit/Edit";
import MainView from "./components/MainEditDeleteComponent/maintables/MainView";
import Views from "./components/MainEditDeleteComponent/views/Views";
import WaveAnimation from "./components/MainEditDeleteComponent/wavesanimation/WaveAnimation";
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
                    {/* <Route exact path="/" component={Landing} /> */}
                    {/* <Route exact path="/" component={MainView} /> */}
                    <Route path="/forms" component={FormValidation} />
                    <Route path="/datas" component={DataShowKalai} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/view/:id" component={Views} />
                    <Route path="/add" component={Addusers} />
                    <Route path="/wave" component={WaveAnimation} />
                    <Route path="/" component={Firebasechat}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
