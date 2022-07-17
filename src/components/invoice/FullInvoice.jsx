import React, { useEffect, useState } from "react";
import { MAIN_API_URL } from "../../utils/api";
import { fetchApi } from "../../utils/fetchApi";

export const FullInvoice = ({ invoice }) => {
  const [customer, setCustomer] = useState();
  // const [order, setOrder] = useState();

  useEffect(() => {
    async function getCustomer(id) {
      const response = await fetchApi(
        MAIN_API_URL + "customers/search?id=" + id
      );
      return response.ok ? setCustomer(response.data) : setCustomer(undefined);
    }

    // async function getOrder(id) {
    //   const response = await fetchApi(
    //     MAIN_API_URL + "order-item/search?id=" + id
    //   );
    //   return response.ok ? response.data : undefined;
    // }

    getCustomer(invoice.customerId);
  }, [invoice.customerId]);

  return invoice && customer ? (
    <div className="border text-lg p-3 mt-5 mx-20 bg-gray-900">
      <p>Invoice ID: {invoice.invoiceId}</p>

      <br />

      <p>Customer</p>
      <div className="flex gap-5 justify-between flex-wrap">
        <p>Full name: {customer.fullName}</p>
        <p>ID Document: {customer.idDocument}</p>
        <p>Phone: {customer.phone}</p>
        <p>Email: {customer.email}</p>
        <p>Birth Date: {customer.birthDate}</p>
        <p>Address: {customer.address}</p>
      </div>

      <br />

      <p>Order</p>
      <div className="flex gap-5 justify-between flex-wrap">
        <p>Full name: {customer.fullName}</p>
        <p>ID Document: {customer.idDocument}</p>
        <p>Phone: {customer.phone}</p>
        <p>Email: {customer.email}</p>
        <p>Birth Date: {customer.birthDate}</p>
        <p>Address: {customer.address}</p>
      </div>

      <br />

      <p>Payment Method: {invoice.invoiceId}</p>

      <br />
      <div className="flex gap-5 justify-between flex-wrap">
        <p>Subtotal: {invoice.subtotal}</p>
        <p>Tax: {invoice.tax}</p>
        <p>Total: {invoice.total}</p>
      </div>
    </div>
  ) : (
    ""
  );
};
