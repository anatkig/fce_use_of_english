import { Container } from "react-bootstrap";
import { useState } from "react";
import InitialBox from "../initial_box/InitialBox";
import TaskBox from "../task_box/TaskBox";
import BattleResultBox from "../battle_result_box/BattleResultBox";
import { textChangeRangeIsUnchanged } from "typescript";

const MainContainer = () => {
  const [state, setState] = useState(1);

  const switcher = () => {
    switch (state) {
      case 1:
        return <InitialBox num={state} set={setState} />;
      case 2:
        return <TaskBox num={state} set={setState} />;
      case 3:
        return <BattleResultBox num={state} set={setState} />;
    }
  };

  return <Container>{switcher()}</Container>;
};

export default MainContainer;
