import React from "react";
import Wave from "react-wavify";
import ReadMoreButton from "../readmorebutton/ReadMoreButton";
import "./styles/Waves.scss";
function WaveAnimation(props) {
    return (
        <>
            <div className="rotaes">
                <Wave
                    className="rotates"
                    fill="cyan"
                    paused={false}
                    options={{
                        height: 30,
                        amplitude: 65,
                        speed: 0.5,
                        points: 10,
                    }}
                />
            </div>
            <ReadMoreButton />
        </>
    );
}

export default WaveAnimation;
