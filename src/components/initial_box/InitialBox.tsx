import { turn } from "../../data/types";
import Rename from "../form/Rename";
import { useState, useEffect } from "react";
import NameForm from "../form/NameForm";
import { Button, Container } from "react-bootstrap";

const InitialBox = (turn: turn) => {
  const [state, setState] = useState(<div></div>);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (!name) {
      setState(<NameForm setState={setState} />);
    } else {
      setState(<Rename name={name} setState={setState} />);
    }
  }, []);

  return (
    <>
      <Container className="box">
        {state}

        <Button onClick={() => turn.set(2)}>Start Game</Button>
      </Container>
    </>
  );
};

export default InitialBox;
