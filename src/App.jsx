import Nav from "./components/nav/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ViewInvoices } from "./views/ViewInvoices";
import { CreateInvoice } from "./views/CreateInvoice";
import { InvoicesStats } from "./views/InvoicesStats";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/invoice" element={<ViewInvoices />} />
        <Route path="/invoice/stats" element={<InvoicesStats />} />
        <Route path="/invoice/create" element={<CreateInvoice />} />

        <Route path="*" element={<Navigate to={"/invoice"} />} />
      </Routes>
    </Router>
  );
}

export default App;
