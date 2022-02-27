import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./Theme/theme.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
