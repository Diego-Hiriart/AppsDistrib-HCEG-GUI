import React from "react";

export const CreateInvoiceForm = (props) => {
  return (
    <form className="w-full" onSubmit={""}>
      <label className="text-lg">Title</label>
      <input
        className="w-full bg-gray-700 border-transparent rounded"
        type="text"
        name="title"
        placeholder="Title..."
        required
      />
      <br />
      <br />
      <label className="text-lg">Description</label>
      <textarea
        className="w-full bg-gray-700 border-transparent rounded"
        rows="5"
        type="text"
        name="description"
        placeholder="Description..."
        required
      />
      <br />
      <br />
      <label className="text-lg">Unit Price</label>
      <input
        className="w-full bg-gray-700 border-transparent rounded"
        type="text"
        name="unit_price"
        placeholder="Price..."
        required
      />
      <br />
      <br />
      <label className="text-lg">Sale</label>
      <input
        className="w-full bg-gray-700 border-transparent rounded"
        type="text"
        name="sale"
        placeholder="Sale..."
        required
      />
      <br />
      <br />
      <button
        className="mt-3 flex-shrink-0 border-transparent border-2 bg-gray-800 text-orange-500 hover:text-orange-700 text-sm p-2 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
