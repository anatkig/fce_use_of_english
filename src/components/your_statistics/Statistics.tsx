import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [people, setPeople] = useState(["no statistics yet"]);

  useEffect(() => {
    const lsRaw = localStorage.getItem("Statistics");
    const statistics = lsRaw !== null ? JSON.parse(lsRaw) : null;
    statistics.sort((a: any, b: any) => b[1] - a[1]);
    setPeople(statistics);
  }, []);

  return (
    <Container className="box">
      <ol>
        {people?.map((person: any) => (
          <li key={person[0]}>
            <span key={person[0]}>{person[0]}</span> <span>{person[1]}</span>
          </li>
        ))}
      </ol>
      <LinkContainer to="/">
        <Row className="row-custom">
          <Button type="button" className="btn button-custom non-active">
            Back to Game
          </Button>
        </Row>
      </LinkContainer>
    </Container>
  );
};

export default Statistics;
