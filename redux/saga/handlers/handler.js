import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';

function* setBalance(action) {
    put({type:"SET_BALANCE",balance:action.balance});
    put({type:"SET_ROW_DATA",rowdata:action.rowdata});
}

function* watcherSaga() {
    takeEvery("SET_BALANCE",setBalance);
    takeEvery("SET_ROW_DATA",setBalance);
}

export default watcherSaga;