import Nav from "./components/nav/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
