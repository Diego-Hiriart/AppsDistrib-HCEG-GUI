import React, { useState } from "react";
// import { fetchApi } from "../../hooks/fetchApi";
import { setState } from "../../hooks/setState";

export const CreateInvoiceForm = ({ customers, products, paymentMethod }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newInvoice, setNewInvoice] = useState({});
  const [checkboxes, setCheckboxes] = useState(
    new Array(products.length).fill(false)
  );

  async function createInvoice(e) {
    e.preventDefault();

    setIsSubmitted(true);

    newInvoice.map((a) => a);

    // const response = await fetchApi("/api/invoice", "POST", {
    //   newInvoice,
    //   checkboxes,
    // });

    // console.log(newInvoice);
    // console.log(checkboxes);

    // response.ok ? setIsSubmitted(true) : console.log(response.status);
  }

  const handleCheckboxes = (position) => {
    const updatedCheckedState = checkboxes.map((item, index) =>
      index === position ? !item : item
    );

    setCheckboxes(updatedCheckedState);
  };

  return isSubmitted ? (
    <h1>Form was sent correctly!</h1>
  ) : (
    <form className="w-full" onSubmit={createInvoice}>
      <div className="flex flex-col">
        <label className="text-lg">Customer</label>
        <select
          name="customer"
          onChange={setState(setNewInvoice)}
          className="bg-gray-700 rounded"
        >
          <option value="-">-</option>
          {customers.map((item) => (
            <option key={item.customerId} value={item.customerId}>
              {item.name} - {item.idDocument}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mt-8">
        <label className="text-lg">Products</label>
        {products.map((item, index) => (
          <label className="text-lg">
            <input
              className="mr-4"
              key={item.productId}
              type="checkbox"
              name="products"
              value={item.productId}
              onChange={() => handleCheckboxes(index)}
            />
            {item.price} | {item.name}
          </label>
        ))}
      </div>

      <div className="flex flex-col mt-8">
        <label className="text-lg">Payment Method</label>
        <select
          name="payment_method"
          onChange={setState(setNewInvoice)}
          className="bg-gray-700 rounded"
        >
          <option value="-">-</option>
          {paymentMethod.map((item) => (
            <option key={item.paymentMethodId} value={item.paymentMethodId}>
              {item.description}
            </option>
          ))}
        </select>
      </div>
      <button
        className="mt-8 flex-shrink-0 border-transparent border-2 bg-gray-800 text-white hover:text-gray-300 text-sm p-2 border-gray-500"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};
