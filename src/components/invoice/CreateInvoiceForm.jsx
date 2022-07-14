import React, { useState, useEffect } from "react";
import { fetchApi } from "../../utils/fetchApi";
import { INSERT_API_URL } from "../../utils/api";
import { setState } from "../../utils/setState";

export const CreateInvoiceForm = ({ customers, products, paymentMethod }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newInvoice, setNewInvoice] = useState({});
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    setCheckboxes(
      new Array(products.length).fill({ productId: 0, checked: false })
    );
  }, [products.length]);

  const createInvoice = async (e) => {
    e.preventDefault();

    const response = await fetchApi(INSERT_API_URL + "invoice", "POST", {
      customerId: newInvoice.customer,
      products: checkboxes
        .map((item) => item.productId)
        .filter((id) => id !== 0),
      paymentMethodId: newInvoice.payment_method,
    });

    response.ok ? setIsSubmitted(true) : console.log(response.status);
  };

  const handleCheckboxes = (position, value) => {
    const updatedCheckboxes = checkboxes.map((item, index) =>
      index === position
        ? { productId: Number(value), checked: !item.checked }
        : { productId: item.productId, checked: item.checked }
    );

    setCheckboxes(updatedCheckboxes);
  };

  return isSubmitted ? (
    <section>
      <h1 className="text-lg">Form was sent correctly!</h1>
    </section>
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
              {item.fullName} - {item.idDocument}
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
              onChange={(e) => handleCheckboxes(index, e.target.value)}
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
