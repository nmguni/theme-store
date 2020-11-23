import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            {" "}
            <div className="footer__text">
              &copy; 2020 Web Design Themes | Ndumiso Mguni
            </div>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
