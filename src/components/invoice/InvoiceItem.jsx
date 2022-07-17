import React from "react";

export const InvoiceItem = ({ invoice }) => {
  return invoice ? (
    <>
      <li>
        {"Invoice ID: " +
          invoice.invoiceId +
          " - Customer ID: " +
          invoice.customerId}
      </li>
      <li>{"Order ID: " + invoice.orderId}</li>
      <li>{"Payment Method ID: " + invoice.paymentMethodId}</li>
      <li>
        {"Subtotal: " +
          invoice.subtotal.toFixed(2) +
          " - Tax: " +
          invoice.tax.toFixed(2) +
          " - Total: " +
          invoice.total.toFixed(2)}
      </li>
    </>
  ) : (
    ""
  );
};
