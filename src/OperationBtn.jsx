import { ACTIONS } from "./App";

const OperationBtn = ({ dispatch, operation }) => {
  return (
    <button
      className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationBtn;
