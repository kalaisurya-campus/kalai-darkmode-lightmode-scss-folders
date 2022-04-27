import React from "react";
import { useParams } from "react-router-dom";
function EcoModalPop(props) {
    const { id } = useParams();
    return (
        <div>
            welcome
            <p>{id}</p>
        </div>
    );
}

export default EcoModalPop;
