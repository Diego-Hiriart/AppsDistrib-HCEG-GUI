import React, { useState, useEffect } from "react";
import { CreateInvoiceForm } from "../components/invoice/CreateInvoiceForm";
import { fetchApi } from "../hooks/fetchApi";

export const CreateInvoice = () => {
  const [customers, setCustomers] = useState([
    {
      customerId: 0,
      name: "",
      phone: "",
      email: "",
      address: "",
      birthDate: new Date(),
      idDocument: "",
    },
  ]);
  const [products, setProducts] = useState([
    {
      productId: 0,
      name: "",
      price: 0,
    },
  ]);
  const [paymentMethod, setPaymentMethod] = useState([
    {
      paymentMethodId: 0,
      description: "",
    },
  ]);

  // useEffect(() => {
  //   async function getCustomers() {
  //     const response = await fetchApi("/api/customers");

  //     response.ok ? setCustomers(response.data) : console.log(response.status);
  //   }

  //   async function getProducts() {
  //     const response = await fetchApi("/api/products");

  //     response.ok ? setProducts(response.data) : console.log(response.status);
  //   }

  //   async function getPaymentMethod() {
  //     const response = await fetchApi("/api/payment");

  //     response.ok
  //       ? setPaymentMethod(response.data)
  //       : console.log(response.status);
  //   }

  //   getCustomers();
  //   getProducts();
  //   getPaymentMethod();
  // }, []);

  return (
    <section>
      <CreateInvoiceForm
        // customers={customers}
        // products={products}
        // paymentMethod={paymentMethod}
        customers={[
          {
            customerId: 1,
            name: "1",
            phone: "1",
            email: "1",
            address: "1",
            birthDate: new Date(),
            idDocument: "1",
          },
          {
            customerId: 2,
            name: "2",
            phone: "2",
            email: "2",
            address: "2",
            birthDate: new Date(),
            idDocument: "2",
          },
        ]}
        products={[
          {
            productId: 1,
            name: "aaasdasd",
            price: 1,
          },
          {
            productId: 2,
            name: "2",
            price: 2,
          },
        ]}
        paymentMethod={[
          {
            paymentMethodId: 1,
            description: "1",
          },
          {
            paymentMethodId: 2,
            description: "2",
          },
        ]}
      />
    </section>
  );
};
