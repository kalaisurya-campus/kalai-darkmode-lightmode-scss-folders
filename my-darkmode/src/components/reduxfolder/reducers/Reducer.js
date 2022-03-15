import { DECREMENTS, INCREMENTS } from "../actions/Action";

const initialState = {
    count: 0,
};

export const reducerdatamain = (state = initialState, action) => {
    switch (action.type) {
        case "increments/datas":
            console.log("welocme");
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENTS:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};
