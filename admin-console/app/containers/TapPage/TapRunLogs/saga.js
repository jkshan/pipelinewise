import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  LOAD_RUN_LOGS,
} from './constants';import {
  loadRunLogsDone,
  loadRunLogsError,
} from './actions';

import request from 'utils/request';

export function* logTapRunLogs(action) {
  const requestURL = `http://localhost:5000/targets/${action.targetId}/taps/${action.tapId}/logs`;

  try {
    const logs = yield call(request, requestURL)
    yield put(loadRunLogsDone(logs))
  } catch (err) {
    yield put(loadRunLogsError(err));
  }
}

export default function* tapRunLogs() {
  yield takeLatest(LOAD_RUN_LOGS, logTapRunLogs);
}