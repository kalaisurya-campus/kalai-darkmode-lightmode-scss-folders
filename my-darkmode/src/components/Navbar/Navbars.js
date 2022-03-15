import React from "react";

function Navbars({ dark, setdark }) {
    return (
        <div>
            <p onClick={() => setdark(!dark)}>
                {dark ? (
                    <ion-icon
                        name="moon-outline"
                        style={{ fontSize: "6rem", color: "white" }}
                    ></ion-icon>
                ) : (
                    <ion-icon
                        name="sunny-outline"
                        style={{ fontSize: "6rem", color: "yellow" }}
                    ></ion-icon>
                )}
            </p>
            <p>
                {dark ? (
                    <p style={{ color: "white" }}>Dark Mode Page</p>
                ) : (
                    "Light Mode Page"
                )}
            </p>
        </div>
    );
}

export default Navbars;
