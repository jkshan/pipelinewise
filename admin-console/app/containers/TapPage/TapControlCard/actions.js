import {
  RUN_TAP,
  RUN_TAP_SUCCESS,
  RUN_TAP_ERROR,

  RESET_CONSOLE_OUTPUT,

  SET_RUN_TAP_BUTTON_STATE,
 } from './constants';

export function runTap(targetId, tapId) {
  return {
    type: RUN_TAP,
    targetId,
    tapId,
  }
}

export function tapRunDone(response) {
  return {
    type: RUN_TAP_SUCCESS,
    response,
  }
}

export function tapRunError(error) {
  return {
    type: RUN_TAP_ERROR,
    error,
  }
}

export function resetConsoleOutput() {
  return {
    type: RESET_CONSOLE_OUTPUT,
  }
}

export function setRunTapButtonState(enabled) {
  return {
    type: SET_RUN_TAP_BUTTON_STATE,
    enabled,
  }
}