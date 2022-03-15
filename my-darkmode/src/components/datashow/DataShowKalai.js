import React, { useEffect, useState } from "react";
import { getReducers } from "../landingpage/api/GET";
import { connect } from "react-redux";
import {
    DECREMENTS,
    EMP,
    INCREMENTS,
    POP,
    PUSH,
} from "../reduxfolder/actions/Action";
import AnotherDataSet from "./AnotherDataSet";
function DataShowKalai(props) {
    const [loadings, SetLoadings] = useState(false);
    useEffect(() => {
        getEmptyDatas();
    }, []);
    const getEmptyDatas = () => {
        getReducers()
            .then((res) => {
                console.log("fsdf", res.data);

                props.setKalai(res.data);
                SetLoadings(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div>
                {!loadings ? (
                    <div>Loading.........</div>
                ) : (
                    <div>
                        {props.dataset.map((ite, index) => {
                            return (
                                <div>
                                    <p>{ite.title}</p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div>
                <AnotherDataSet />
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        dataset: state.EmptyKalai,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setKalai: (dataset) => {
            dispatch({ type: EMP, value: dataset });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataShowKalai);
