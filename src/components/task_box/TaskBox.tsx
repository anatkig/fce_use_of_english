import YouPlayerBox from "../you_player_box/YouPlayerBox";
import { turn } from "../../data/types";
import { Container } from "react-bootstrap";
import Timer from "../timer/Timer";

const TaskBox = (turn: turn) => {
  return (
    <>
      <Container className="box">
        <YouPlayerBox />
        <p>Tasks here</p>
        <Timer set={turn.set} num={turn.num} />
        <ol>
          <li>timer = 3 minute</li>
          <li>
            1 task - picture with the task buttons underneath for correct
            answers
          </li>
          <li>after time is over automatically goes to Battle Results</li>
        </ol>
      </Container>
    </>
  );
};

export default TaskBox;
