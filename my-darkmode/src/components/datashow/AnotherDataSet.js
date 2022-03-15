import React from "react";
import { connect } from "react-redux";
function AnotherDataSet(props) {
    return (
        <div>
            {props.kalainazriya.map((ui, index) => {
                return (
                    <div key={index}>
                        <h1>{ui.title}</h1>
                    </div>
                );
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        kalainazriya: state.EmptyKalai,
    };
};
export default connect(mapStateToProps, null)(AnotherDataSet);
