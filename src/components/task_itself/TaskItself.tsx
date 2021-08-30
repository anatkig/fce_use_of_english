import { SyntheticEvent, useEffect, useState, useContext } from "react";
import { tasks } from "../../data/tasks";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { turn } from "../../data/types";
import { Context } from "../main_container/MainContainer";

const TaskItself = ({ set }: turn) => {
  const [task, setTask] = useState<any>();
  const [focus, setFocus] = useState<boolean[]>([...new Array(8).fill(false)]);
  const [inputValues, setInputValues] = useState<string[]>([
    ...new Array(8).fill(""),
  ]);
  const store = useContext(Context);

  useEffect(() => {
    setTask(tasks[Math.floor(Math.random() * tasks.length)]);
    store.setDummieScore([Math.floor(Math.random() * 8)]);
    // eslint-disable-next-line
  }, []);

  const countScore = () => {
    return inputValues.reduce(
      (correctAnswersNumber, currectElement, index) =>
        inputValues[index] === task.correctAnswers[index]
          ? correctAnswersNumber + 1
          : correctAnswersNumber,
      0
    );
  };

  const handleClick = (event: SyntheticEvent) => {
    set(3);
    store.setCorrectAnswersNumber(countScore());

    const yourName = localStorage.getItem("name");

    if (localStorage.getItem("Statistics")) {
      const lsRaw = localStorage.getItem("Statistics");
      const statistics = lsRaw !== null ? JSON.parse(lsRaw) : null;

      if (!statistics.map((person: any) => person[0]).includes(yourName)) {
        statistics.push([yourName, store.correctAnswersNumber]);
      }
      if (!statistics.map((person: any) => person[0]).includes(store.dummie)) {
        statistics.push([store.dummie, store.dummieScore]);
      }

      statistics[
        statistics.findIndex((person: any) => person[0] === yourName)
      ][1] -= -store.correctAnswersNumber;
      statistics[
        statistics.findIndex((person: any) => person[0] === store.dummie)
      ][1] -= -store.dummieScore;

      localStorage.setItem("Statistics", JSON.stringify(statistics));
    } else {
      const statistics = [
        [yourName, store.correctAnswersNumber],
        [store.dummie, store.dummieScore],
      ];
      localStorage.setItem("Statistics", JSON.stringify(statistics));
    }
  };

  const handleChange = (event: React.ChangeEvent<any>, index: number) => {
    setInputValues((prev) => {
      prev[index] = event.target.value;
      return [...prev];
    });
    setFocus((prev) => {
      const focusArr = prev.slice().map((element) => false);
      focusArr[index] = true;
      return focusArr;
    });
  };

  return (
    <Container>
      <div className="task-text-container">
        {task?.title}
        {task?.html}
      </div>
      <hr />
      <Form style={{ width: "100%" }}>
        <Form.Group>
          <Form.Label style={{ color: "black", fontWeight: "bold" }}>
            Type your answers into the boxes:
          </Form.Label>
          <Row>
            {inputValues.map((input, index) => (
              <Col style={{ width: "7vw" }} key={index + new Date().getTime()}>
                <div>{index + 1}</div>
                <Form.Control
                  type="text"
                  value={input}
                  onChange={(event) => handleChange(event, index)}
                  autoFocus={focus[index] ? true : false}
                />
              </Col>
            ))}
          </Row>
          <hr />
          <Button variant="primary" type="button" onClick={handleClick}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskItself;
