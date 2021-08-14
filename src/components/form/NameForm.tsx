import { formState } from "../../data/types";
import Rename from "./Rename";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const NameForm = (props: formState) => {
  const [state, setState] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("name", state);
    props.setState(<Rename name={state} setState={props.setState} />);
    setState("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="controlInput1" className="mb-3">
          <Form.Label> Change your name here</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your name here"
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default NameForm;
