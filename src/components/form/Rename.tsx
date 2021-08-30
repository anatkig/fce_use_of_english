import { changeName } from "../../data/types";

import { Button } from "react-bootstrap";

const Rename = (props: changeName) => {
  return (
    <>
      <Button
        onClick={() => {
          props.setChangeName(true);
        }}
        className="button-custom"
      >
        Change name
      </Button>
    </>
  );
};

export default Rename;
