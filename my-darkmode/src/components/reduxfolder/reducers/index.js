import { combineReducers } from "redux";
import reducerDatasUpdates from "./DataReducers";
import EmptyDataStore from "./Empty";

import { reducerdatamain } from "./Reducer";

const rootReducers = combineReducers({
    count: reducerdatamain,
    setDatas: reducerDatasUpdates,
    EmptyKalai: EmptyDataStore,
});

export default rootReducers;
