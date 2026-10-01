import { createStore, applyMiddleware, type Middleware } from "redux";
import { rootReducer } from "./reducers";
import reduxLogger from "redux-logger";

// Vite ESM interop: default import may be a module object, not the middleware
const logger =
  typeof reduxLogger === "function"
    ? (reduxLogger as Middleware)
    : ((reduxLogger as { default: Middleware }).default);

export const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
