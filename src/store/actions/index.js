import { 
  PRESSED_CLEAR,
  PRESSED_ALL_CLEAR,
  VALUE_KEY_PRESSED,
  EQUAL_KEY,
  PLUS_OPERATOR_KEY_PRESSED,
  MINUS_OPERATOR_KEY_PRESSED,
  MULTIPLY_OPERATOR_KEY_PRESSED,
  DIVIDE_OPERATOR_KEY_PRESSED,
  PLUS_MINUS_OPERATOR_KEY_PRESSED,
  SQUARED_OPERATOR_KEY_PRESSED
} from '../constants/action-types';

export function clearEnterBox() {
  return { type: PRESSED_CLEAR }
}

export function clearEverything() {
  return { type: PRESSED_ALL_CLEAR }
}

export function valueKeyPress(payload) {
  return { type: VALUE_KEY_PRESSED, payload };
}

export function EqualKey() {
  return { type: EQUAL_KEY };
}

export function plusOperatorKey() {
  return { type: PLUS_OPERATOR_KEY_PRESSED };
}

export function minusOperatorKey() {
  return { type: MINUS_OPERATOR_KEY_PRESSED };
}

export function multiplyOperatorKey() {
  return { type: MULTIPLY_OPERATOR_KEY_PRESSED };
}

export function divideOperatorKey() {
  return { type: DIVIDE_OPERATOR_KEY_PRESSED };
}

export function plusminusOperatorKey() {
  return { type: PLUS_MINUS_OPERATOR_KEY_PRESSED };
}

export function squaredOperatorKey() {
  return { type: SQUARED_OPERATOR_KEY_PRESSED };
}