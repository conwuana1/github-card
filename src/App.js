import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);

  function handleToggle(e) {
    e.preventDefault(e);
    setActive(!active);
    fetch("https://api.github.com/users/conwuana1")
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log("Toggle clicked!");
  }

  return (
    <div>
      <Button className="bl-bttn" variant="primary" onClick={handleToggle}>
        Toggle
      </Button>
      {active ? (
        <Card className="card-style" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Following: {user.following}</ListGroup.Item>
                <ListGroup.Item>Followers: {user.followers}</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
}

export default App;
