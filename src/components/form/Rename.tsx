import { name } from "../../data/types";
import NameForm from "./NameForm";
import { Button } from "react-bootstrap";

const Rename = (props: name) => {
  return (
    <>
      <p>Welcome, {props.name}!</p>
      <Button
        onClick={() => {
          props.setState(<NameForm setState={props.setState} />);
        }}
      >
        Change name
      </Button>
    </>
  );
};

export default Rename;
