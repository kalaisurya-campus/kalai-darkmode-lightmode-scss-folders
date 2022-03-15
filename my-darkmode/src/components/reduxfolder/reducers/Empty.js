import { EMP } from "../actions/Action";

const EmptyDataStore = (state = [], action) => {
    switch (action.type) {
        case EMP:
            return [...action.value];
        default:
            return state;
    }
};

export default EmptyDataStore;
