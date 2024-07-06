import { takeEvery } from "redux-saga/effects";

function* handleSaga(action: any) {
    console.log(">>> check handleSaga:", action)
}

function* counterSaga() {
    yield takeEvery("counter/decrement", handleSaga)
}

export default counterSaga;