import { CreateInvoice } from "../views/CreateInvoice";
import { InvoicesStats } from "../views/InvoicesStats";
import { ViewInvoices } from "../views/ViewInvoices";

const RoutesComponent = [
  {
    path: "/invoice",
    component: ViewInvoices,
  },
  {
    path: "/invoice/stats",
    component: InvoicesStats,
  },
  {
    path: "/invoice/create",
    component: CreateInvoice,
  },
];

export default RoutesComponent;
