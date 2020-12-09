import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateChange from "./components/create-change.component";
import EditChange from "./components/edit-change.component";
import ChangeList from "./components/change-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-change"} className="nav-link">
                Change Tracker
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-change"} className="nav-link">
                  
                  Create Change
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-change/:id"} className="nav-link">
                  Edit Change
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/change-list"} className="nav-link">
                  Change List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateChange} />
                <Route path="/create-change" component={CreateChange} />
                <Route path="/edit-change/:id" component={EditChange} />
                <Route path="/change-list" component={ChangeList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;