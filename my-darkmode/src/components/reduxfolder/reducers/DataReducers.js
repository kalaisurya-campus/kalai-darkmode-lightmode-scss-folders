import { POP, PUSH } from "../actions/Action";

const reducerDatasUpdates = (state = [], action) => {
    switch (action.type) {
        case PUSH:
            let tests = [...state];
            tests.push(action.value);
            return [...tests];
        case POP:
            let testsed = [...state];
            testsed.pop();
            return [...testsed];
        default:
            return state;
    }
};

export default reducerDatasUpdates;
