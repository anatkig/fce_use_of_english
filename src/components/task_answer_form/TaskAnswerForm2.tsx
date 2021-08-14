import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TaskAnswerForm2 = () => {
  const [state, setState] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="controlInput1" className="mb-3">
        <Form.Label> Type your answers here</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type your answer"
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TaskAnswerForm2;
