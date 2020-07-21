import React, { useState, useContext, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Jerry from "../../assets/jerry.jpg";
import Lisa from "../../assets/lisa.jpg";
import Steve from "../../assets/steve.jpeg";
import userContext from "../../Context/userContext";
import "./AboutUs.scss";

const AboutUs = () => {
  const { user, setUser } = useContext(userContext);
  useEffect(() => {
    setUser("");
  }, []);
  return (
    <Container fluid>
      <Row style={{ paddingTop: "30px" }}>
        <Col md="4"></Col>
        <Col md="4">
          <h1 className="about-title">Our Team!</h1>
          <Card style={{ textAlign: "center" }}>
            <span style={{ textAlign: "center", padding: "10px" }}>
              <Card.Img
                className="rounded-circle"
                src={Jerry}
                alt="Jerry"
                style={{ height: "140px", width: "170px" }}
              />
            </span>
            <Card.Body>
              <Card.Title>
                <h3 className="name">Jerry Wilson</h3>
              </Card.Title>
              <Card.Subtitle style={{ color: "grey" }}>
                <b>CEO & Co-founder, Taskatic Inc.</b>
              </Card.Subtitle>
              <Card.Text style={{ paddingTop: "20px", fontSize: "14px" }}>
                Jerry is the guy who would be always on his feet for any
                problems, his quick and precise decision making capabilities
                from top-level is what makes Taskatic running.
              </Card.Text>
              <p style={{ color: "grey" }}>jerry.wilson@taskatic.inc</p>
              <Button color="primary">
                <b>Contact Jerry</b>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4"></Col>
      </Row>
      <Row style={{ paddingTop: "100px" }}>
        <Col md="4"></Col>
        <Col md="4">
          <Card style={{ textAlign: "center" }}>
            <span style={{ textAlign: "center", padding: "10px" }}>
              <Card.Img
                className="rounded-circle"
                src={Lisa}
                alt="Lisa"
                style={{ height: "140px", width: "170px" }}
              />
            </span>
            <Card.Body>
              <Card.Title>
                <h3 className="name">Lisa Sampson</h3>
              </Card.Title>
              <Card.Subtitle style={{ color: "grey" }}>
                <b>CTO & Co-founder, Taskatic Inc.</b>
              </Card.Subtitle>
              <Card.Text style={{ paddingTop: "20px", fontSize: "14px" }}>
                Lisa has been working tirelessly to make sure client remains
                happy for Taskatic, and to make sure clients requirements are
                satisfied precisely. If you ask who makes top level
                technological decisions..Lisa is one to contact.
              </Card.Text>
              <p style={{ color: "grey" }}>lisa.sampson@taskatic.inc</p>
              <Button color="primary">
                <b>Contact Lisa</b>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4"></Col>
      </Row>
      <Row style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Col md="4"></Col>
        <Col md="4">
          <Card style={{ textAlign: "center" }}>
            <span style={{ textAlign: "center", padding: "10px" }}>
              <Card.Img
                className="rounded-circle"
                src={Steve}
                alt="Steve"
                style={{ height: "140px", width: "170px" }}
              />
            </span>
            <Card.Body>
              <Card.Title>
                <h3 className="name">Steve Balmer</h3>
              </Card.Title>
              <Card.Subtitle style={{ color: "grey" }}>
                <b>UI & UX Chief Lead, Taskatic Inc.</b>
              </Card.Subtitle>
              <Card.Text style={{ paddingTop: "20px", fontSize: "14px" }}>
                Whatever beautiful designs you see on Taskatic, Steve is one to
                thank for. Every design goes through Steve's eyes, so that
                quality is never compromised to our clients. Steve's years of
                experience with UI & UX, makes him best man at work.
              </Card.Text>
              <p style={{ color: "grey" }}>steve.balmer@taskatic.inc</p>
              <Button color="primary">
                <b>Contact Steve</b>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4"></Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
