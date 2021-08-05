import YouPlayerBox from "../you_player_box/YouPlayerBox";
import { turn } from "../../data/types";

const TaskBox = (turn: turn) => {
  return (
    <>
      <YouPlayerBox />
      <p>Tasks here</p>
      <ol>
        <li>timer = 1 minute</li>
        <li>3 tasks = 3 minutes in total</li>
        <li>after time is over automatically goes to Battle Results</li>
      </ol>
    </>
  );
};

export default TaskBox;
