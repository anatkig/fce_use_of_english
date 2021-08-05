import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <p>FCE Use Of English</p>

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="border border-primary rounded"
      >
        <Container>
          <Nav className="me-auto ">
            <LinkContainer to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/your-statistics">
              <Nav.Link href="#features">Your Statistics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/all_players">
              <Nav.Link href="#pricing">All Players</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
