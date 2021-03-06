import { ACTIONS } from "./Actions";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="operation-btn"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATIONS, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
