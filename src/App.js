import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "../src/components/Navbar";
function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route
            exact
            path="/documentation"
            element={
              <>
                <Documentation />
              </>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Documentation />
              </>
            }
          ></Route>
          <Route
            exact
            path="/quiz"
            element={
              <>
                <Quiz />
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>

    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/documentation" component={Documentation} />
    //     <Route path="/quiz" component={Quiz} />
    //     <Route path="/login" component={Login} />
    //   </Switch>
    // </Router>
  );
}

export default App;
