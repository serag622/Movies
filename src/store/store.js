import { createStore,applyMiddleware } from "redux";
import compineRedusers from "./compineRedusers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(compineRedusers , composeWithDevTools(applyMiddleware(thunk)));

export default store;
