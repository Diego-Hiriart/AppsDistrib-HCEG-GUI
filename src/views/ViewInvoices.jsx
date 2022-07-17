import React, { useState, useEffect } from "react";
import { FullInvoice } from "../components/invoice/FullInvoice";
import { InvoiceItem } from "../components/invoice/InvoiceItem";

export const ViewInvoices = () => {
  let myInvoice = {
    invoiceId: 1,
    orderId: 4,
    customerId: 1,
    paymentMethodId: 1,
    subtotal: 1,
    total: 1,
    tax: 1.1,
  };
  let myInvoice2 = {
    invoiceId: 2,
    orderId: 4,
    customerId: 2,
    paymentMethodId: 2,
    subtotal: 2,
    total: 2,
    tax: 2.2,
  };
  const [invoices /*setInvoices*/] = useState([myInvoice, myInvoice2]);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState([false, undefined]);

  useEffect(() => {
    // async function getInvoices() {
    //   const response = await fetchApi(MAIN_API_URL + "invoices");
    //   response.ok ? setInvoices(response.data) : console.log(response.status);
    // }
    // getInvoices();
  }, []);

  async function openInvoice(invoice) {
    setIsInvoiceOpen([true, invoice]);
  }

  function closeInvoice() {
    setIsInvoiceOpen([false]);
  }

  return !isInvoiceOpen[0] ? (
    <section>
      <div>
        {invoices.map((item, index) => (
          <div
            key={index}
            className="border p-3 text-lg m-2 cursor-pointer bg-gray-800 hover:bg-gray-900"
            onClick={() => openInvoice(item)}
          >
            <InvoiceItem invoice={item} />
          </div>
        ))}
      </div>
    </section>
  ) : (
    <section>
      <button
        className="border p-3 bg-sky-700 hover:bg-sky-900"
        onClick={closeInvoice}
      >
        Close invoice
      </button>
      <FullInvoice invoice={isInvoiceOpen[1]} />
    </section>
  );
};
