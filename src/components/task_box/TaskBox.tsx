import YouPlayerBox from "../you_player_box/YouPlayerBox";
import { turn } from "../../data/types";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "../timer/Timer";
import TaskItself from "../task_itself/TaskItself";

const TaskBox = (turn: turn) => {
  return (
    <>
      <Container className="box">
        <Row>
          <Col>
            <YouPlayerBox />
          </Col>

          <Col>
            <Timer set={turn.set} num={turn.num} />
          </Col>
        </Row>
        <TaskItself set={turn.set} num={turn.num} />
      </Container>
    </>
  );
};

export default TaskBox;
