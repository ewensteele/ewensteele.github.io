import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./content/HomePage/HomePage";
import ProjectsPage from "./content/ProjectsPage/ProjectsPage";
import AboutPage from "./content/AboutPage/AboutPage";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
      </Switch>
    </>
  );
};

export default App;
