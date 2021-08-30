import { turn } from "../../data/types";
import { Context } from "../main_container/MainContainer";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table, Row } from "react-bootstrap";
import { useContext } from "react";

const BattleResultBox = (turn: turn) => {
  const store = useContext(Context);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>You</th>
            <th>{store.dummie}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{store.correctAnswersNumber}</td>
            <td>{store.dummieScore}</td>
          </tr>
        </tbody>
      </Table>
      <h2>
        {store.dummieScore > store.correctAnswersNumber
          ? `${store.dummie} wins!`
          : store.dummieScore === store.correctAnswersNumber
          ? "It's a draw"
          : "You win!"}
      </h2>
      <Row className="row-custom">
        <Button onClick={() => turn.set(2)} className="button-custom">
          New Game
        </Button>

        <Button onClick={() => turn.set(1)} className="button-custom">
          Restart
        </Button>
        <LinkContainer to="/Statistics">
          <Button className="button-custom">Statistics</Button>
        </LinkContainer>
      </Row>
    </>
  );
};
export default BattleResultBox;
