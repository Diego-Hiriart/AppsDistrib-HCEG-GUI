import React, { useState, useEffect } from "react";
import { FullInvoice } from "../components/invoice/FullInvoice";
import { InvoiceItem } from "../components/invoice/InvoiceItem";
import { MAIN_API_URL } from "../utils/api";
import { fetchApi } from "../utils/fetchApi";

export const ViewInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState([false]);

  useEffect(() => {
    async function getInvoices() {
      const response = await fetchApi(MAIN_API_URL + "invoices");
      response.ok ? setInvoices(response.data) : console.log(response.status);
    }
    getInvoices();
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
