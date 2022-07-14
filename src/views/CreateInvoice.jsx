import React, { useState, useEffect } from "react";
import { CreateInvoiceForm } from "../components/invoice/CreateInvoiceForm";
import { MAIN_API_URL } from "../utils/api";
import { fetchApi } from "../utils/fetchApi";

export const CreateInvoice = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);

  useEffect(() => {
    async function getCustomers() {
      const response = await fetchApi(MAIN_API_URL + "customers");
      response.ok ? setCustomers(response.data) : console.log(response.status);
    }

    async function getProducts() {
      const response = await fetchApi(MAIN_API_URL + "products");
      response.ok ? setProducts(response.data) : console.log(response.status);
    }

    async function getPaymentMethod() {
      const response = await fetchApi(MAIN_API_URL + "payment-methods");
      response.ok
        ? setPaymentMethod(response.data)
        : console.log(response.status);
    }

    getCustomers();
    getProducts();
    getPaymentMethod();
  }, []);

  return (
    <section>
      <CreateInvoiceForm
        customers={customers}
        products={products}
        paymentMethod={paymentMethod}
      />
    </section>
  );
};
