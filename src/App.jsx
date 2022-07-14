import { createElement } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Nav from "./components/nav/Nav";
import RoutesComponent from "./routes/routes";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        {RoutesComponent.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={createElement(route.component)}
          />
        ))}
        <Route path="*" element={<Navigate to={"/invoice"} />} />
      </Routes>
    </Router>
  );
}

export default App;
