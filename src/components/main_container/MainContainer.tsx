import { Container } from "react-bootstrap";
import React, { useState } from "react";
import InitialBox from "../initial_box/InitialBox";
import TaskBox from "../task_box/TaskBox";
import BattleResultBox from "../battle_result_box/BattleResultBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Statistics from "../your_statistics/Statistics";

export const Context = React.createContext<any>({});

const MainContainer = () => {
  const [state, setState] = useState(1);
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const [dummie, setDummie] = useState<string>();
  const [dummieScore, setDummieScore] = useState<number>();

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

  return (
    <Router>
      <Switch>
        <Route path="/Statistics">
          <Statistics />
        </Route>
        <Route path="/">
          <Context.Provider
            value={{
              correctAnswersNumber,
              setCorrectAnswersNumber,
              dummie,
              setDummie,
              dummieScore,
              setDummieScore,
            }}
          >
            <Container className="box border border-primary rounded">
              {switcher()}
            </Container>
          </Context.Provider>
        </Route>
      </Switch>
    </Router>
  );
};

export default MainContainer;
