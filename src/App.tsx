import React from "react";
import "./App.css";
import { Container, Header, Footer } from "./layouts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
