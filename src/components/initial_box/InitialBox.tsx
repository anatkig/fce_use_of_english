import { turn } from "../../data/types";

const InitialBox = (turn: turn) => {
  return (
    <>
      <p>enter name</p>
      <p>
        your name goes either is taken from localStarage or is saved on
        localStorage
      </p>
      <p>change name</p>
      <p>
        if your name is in localStorage, if is automatically loaded with message
        "hello + your name"
      </p>
      <p>
        below is the button: change name which loads input where you can change
        your name
      </p>
      <button onClick={() => turn.set(2)}>start game</button>
    </>
  );
};

export default InitialBox;
