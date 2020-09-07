import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  CardFooter,
  Button,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Signin = () => {
  return (
    <Container fluid className="text-center p-5 mt-3 mb-5 bgCard">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5 ">
          <Card>
            <Form
            // onSubmit={handleSubmit}
            >
              <CardHeader className="">Signin here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      //   value={password}
                      //   onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
