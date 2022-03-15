import React from "react";
import { connect } from "react-redux";
import { POP, PUSH } from "../reduxfolder/actions/Action";
function SampleData({ datas, load }) {
    return (
        <div>
            {!load ? (
                <div>Loading.....</div>
            ) : (
                <div>
                    {datas.map((items, index) => {
                        return (
                            <div key={index}>
                                <p>{items.title}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SampleData;
