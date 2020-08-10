import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const store = configureStore({});

export function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState
	);
}