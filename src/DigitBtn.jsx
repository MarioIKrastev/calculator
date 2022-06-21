import { ACTIONS } from "./Actions";

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="number-btn"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
