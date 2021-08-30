import { Name } from "../../data/types";

import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const NameForm = (props: Name) => {
  const [state, setState] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("name", state);
    props.setIsName(true);
    props.setChangeName(false);
    setState("");
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        style={{ marginTop: "2%", marginBottom: "4%" }}
      >
        <Form.Group controlId="controlInput1" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Type your name here"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default NameForm;
