import React from "react";
import { FloatingButton, Item } from "react-floating-button";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
function Floatings(props) {
    return (
        <div>
            {/* <FloatingButton>
  <Item
    imgsrc="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    onClick={() => {
      console.log("callback function here");
    }}
  />
  <Item
    imgrc="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    onClick={() => {
      console.log("callback function here");
    }}
  />
</FloatingButton>; */}
            <ProgressBar
                percent={75}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{
                                filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{
                                filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                        />
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{
                                filter: `grayscale(${accomplished ? 0 : 80}%)`,
                            }}
                            width="30"
                            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                        />
                    )}
                </Step>
            </ProgressBar>
            <div class="container">
                <ul class="progress-nav progress-function">
                    <li class="active">
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Background</a>
                    </li>
                    <li>
                        <a href="#">Tech Scan</a>
                    </li>
                    <li>
                        <a href="#">Opportunities</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Floatings;
