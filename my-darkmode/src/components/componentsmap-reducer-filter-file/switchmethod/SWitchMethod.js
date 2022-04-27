import React, { useState } from "react";
import "./Switch.scss";
function SWitchMethod(props) {
    const [buttoncolor, SetButtonColor] = useState("red-btn");

    const ChnageColor = () => {
        SetButtonColor("blue-btn");
    };
    return (
        <div>
            welcome oo switch
            <button className={buttoncolor} onClick={ChnageColor}>
                Click Button
            </button>
        </div>
    );
}

export default SWitchMethod;
