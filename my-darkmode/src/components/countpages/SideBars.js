import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
function SideBars(props) {
    return (
        <div className="sides">
            <div className="images">
                <p>
                    <NavLink to="/">
                        <ion-icon name="home-outline"></ion-icon>
                    </NavLink>
                </p>
                <p>
                    <ion-icon name="bicycle-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="bag-add-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="trash-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="calendar-number-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="settings-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="eye-outline"></ion-icon>
                </p>
                <p>
                    <ion-icon name="add-outline"></ion-icon>
                </p>
            </div>
        </div>
    );
}

export default SideBars;
