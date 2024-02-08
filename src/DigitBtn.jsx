import { ACTIONS } from "./App";

const DigitBtn = ({ dispatch, digit }) => {
  return (
    <button
      className="bg-white/75 hover:bg-white/90 focus:bg-white/90 border border-white outline-none cursor-pointer text-3xl"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitBtn;
