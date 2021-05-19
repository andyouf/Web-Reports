/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import { useState } from "react";
import {
  Input,
  Button,
  FormGroup,
  FlexContainer,
} from "./components/styled/styled.lib";
import Card from "react-bootstrap/Card";
import reportLogo from "./assets/img/Image 6.png";

function LoginForm({ onSubmit, onUsernameChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;
    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  function handleUsernameChange(e) {
    onUsernameChange(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        "> div": {
          margin: "10px auto",
          width: "100%",
          maxWidth: "300px",
        },
      }}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          onChange={handleUsernameChange}
          placeholder="Username"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" placeholder="Password" />
      </FormGroup>
      <FlexContainer justify="center">
        <Button>Login</Button>
      </FlexContainer>
    </form>
  );
}

const UnauthenticatedApp = ({ login }) => {
  const [name, setName] = useState(" ");
  function handleUsername(name) {
    setName(name);
  }
  return (
    <Card bg="light" text="dark" className="mb-2">
      <Card.Header className="d-flex justify-content-center">
        <img className="reportLogo" src={reportLogo} alt="Atidot Report Logo" />
      </Card.Header>
      <Card.Body>
        <h1 className="txt-center my-3">Weekly Report</h1>
        <Card.Subtitle className="my-3 text-muted text-center">
          Hi <span className="font-weight-bold">{name}</span>! Please type your
          password.
        </Card.Subtitle>
        <div>
          <LoginForm onSubmit={login} onUsernameChange={handleUsername} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default UnauthenticatedApp;
