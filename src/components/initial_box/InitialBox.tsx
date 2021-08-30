import { turn } from "../../data/types";
import Rename from "../form/Rename";
import { useState, useEffect } from "react";
import NameForm from "../form/NameForm";
import { Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const InitialBox = (turn: turn) => {
  const [playerName, setPlayerName] = useState<string | null>();
  const [isName, setIsName] = useState(false);
  const [changeName, setChangeName] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("name");
    setPlayerName(name);
    if (name) setIsName(true);
    if (changeName) setIsName(false);
  }, [changeName]);

  return (
    <>
      <Container className="box">
        {isName ? (
          <h3>Welcome, {playerName}!</h3>
        ) : (
          <Row className="row-custom">
            <NameForm setIsName={setIsName} setChangeName={setChangeName} />
          </Row>
        )}

        <Row className="row-custom">
          <Button onClick={() => turn.set(2)} className="start-button">
            Start Game
          </Button>
        </Row>
        <Row className="row-custom">
          {isName && <Rename setChangeName={setChangeName} />}
          <LinkContainer to="/Statistics">
            <Button className="button-custom">Statistics</Button>
          </LinkContainer>
        </Row>
      </Container>
    </>
  );
};

export default InitialBox;
