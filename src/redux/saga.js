import { all } from "redux-saga/effects";

import homePageSaga from "../features/HomePage/redux/saga";

export default function* rootSaga() {
    
    yield all( [
        homePageSaga(),
    ] )
}