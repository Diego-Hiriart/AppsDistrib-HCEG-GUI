import React, { useEffect, useState } from "react";
import { MAIN_API_URL } from "../../utils/api";
import { fetchApi } from "../../utils/fetchApi";

export const FullInvoice = ({ invoice }) => {
  const [customer, setCustomer] = useState();
  const [order, setOrder] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getCustomer(id) {
      const response = await fetchApi(
        MAIN_API_URL + "customers/search?id=" + id
      );
      return response.ok ? setCustomer(response.data) : setCustomer(undefined);
    }

    async function getPaymentMethod(id) {
      const response = await fetchApi(
        MAIN_API_URL + "payment-methods/search?id=" + id
      );
      return response.ok
        ? setPaymentMethod(response.data)
        : setPaymentMethod(undefined);
    }

    async function getOrder(id) {
      const response = await fetchApi(MAIN_API_URL + "orders/search?id=" + id);
      return response.ok ? setOrder(response.data) : setOrder(undefined);
    }

    async function getProducts(id) {
      const response = await fetchApi(
        MAIN_API_URL + "order-items/search?id=" + id
      );
      if (!response.ok || !response.data) return;

      let orderProds = [].concat(response.data.map((order) => order.orderId));

      const prodResponse = await fetchApi(MAIN_API_URL + "products");

      return prodResponse.ok
        ? setProducts(
            prodResponse.data.filter((product) =>
              orderProds.includes(product.productId)
            )
          )
        : setProducts(undefined);
    }

    getCustomer(invoice.customerId);
    getPaymentMethod(invoice.paymentMethodId);
    getOrder(invoice.orderId);
    getProducts(invoice.orderId);
  }, [invoice]);

  return invoice && customer && order && products ? (
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
        <p>Order ID: {order.orderId}</p>
        <p>Date: {order.date}</p>
      </div>

      <br />

      <p>Products</p>
      {products.map((prod, index) => (
        <div key={index} className="flex gap-5 justify-between flex-wrap">
          <p>Name: {prod.name}</p>
          <p>Price: {prod.price.toFixed(2)}</p>
        </div>
      ))}

      <br />

      <p>Payment Method: {paymentMethod.description}</p>

      <br />
      <div className="flex gap-5 justify-between flex-wrap">
        <p>Subtotal: {invoice.subtotal.toFixed(2)}</p>
        <p>Tax: {invoice.tax.toFixed(2)}</p>
        <p>Total: {invoice.total.toFixed(2)}</p>
      </div>
    </div>
  ) : (
    ""
  );
};
