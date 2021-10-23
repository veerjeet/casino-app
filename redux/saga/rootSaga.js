import { all } from "redux-saga/effects";
import watcherSaga from "./handlers/handler";

export default function* rootSaga() {
    yield all([
        watcherSaga(),
    ]);
}