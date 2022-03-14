import React, { useState } from "react";
import "./styles/Landing.scss";

import Confetti from "react-confetti";

function Landing(props) {
    // const { width, height } = useWindowSize()/
    const [sets, SetImage] = useState([]);

    return (
        <>
            <div className="tests">
                <p className="ptage" style={{ color: "$kalai-texts" }}>
                    kalai
                </p>
                {/* <button onClick={datas}>clik read</button> */}
                <img src={sets} />

                <Confetti
                    style={{
                        width: "99vw",
                        height: "98vh",
                        overflow: "hidden",
                    }}
                />
            </div>
        </>
    );
}

export default Landing;
