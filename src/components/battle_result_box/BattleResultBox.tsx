import { turn } from "../../data/types";

const BattleResultBox = (turn: turn) => {
  return (
    <>
      <div>the results of the last battle</div>
      <button>New Game</button>
      <button onClick={() => turn.set(1)}>Restart</button>
    </>
  );
};
export default BattleResultBox;
