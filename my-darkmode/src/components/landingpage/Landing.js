import React, { useEffect, useState } from "react";
import "./styles/Landing.scss";

import Confetti from "react-confetti";
import { connect } from "react-redux";
import {
    DECREMENTS,
    INCREMENTS,
    POP,
    PUSH,
} from "../reduxfolder/actions/Action";
import { getReducers } from "./api/GET";
import SampleData from "./SampleData";
import { withRouter } from "react-router-dom";
function Landing(props) {
    // const { width, height } = useWindowSize()/
    const [sets, SetFakeData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDataFake();
    }, []);
    const getDataFake = () => {
        getReducers()
            .then((res) => {
                console.log(res.data);
                setLoading(true);
                setTimeout(() => {
                    SetFakeData(res.data);
                    // props.push(res.data);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setInterval(() => {
            clearInterval();
        }, []);
    });
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
                <h1>{props.counts}</h1>

                <button onClick={props.increments}>increment</button>
                <button onClick={props.decrements}>Decrement</button>
                <button onClick={props.push}>Push</button>
                <button onClick={props.pop}>Pop</button>
                {props.kalais ? (
                    <div>
                        {props.kalais.map((ite, index) => {
                            return (
                                <div>
                                    <p>{ite.title}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>no</div>
                )}
                <SampleData datas={sets} load={loading} />
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        counts: state.count.count,
        kalais: state.setDatas,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increments: () => {
            dispatch({ type: INCREMENTS });
        },
        decrements: () => {
            dispatch({ type: DECREMENTS });
        },
        push: () => {
            dispatch({ type: PUSH, value: Math.random() });
        },
        pop: () => {
            dispatch({ type: POP });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Landing));
