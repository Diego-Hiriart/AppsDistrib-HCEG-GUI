import React from "react";

export const Stats = ({ props }) => {
  const { topProduct, yearlyRevAvrg, yearlyRevenue, yearlySales } = props;
  return props ? (
    <div className="border text-lg p-3 mt-5 mx-20 bg-gray-900">
      <p>Top product:</p>
      <p>ID: {topProduct.productId}</p>
      <p>Name: {topProduct.name}</p>
      <p>Price: {topProduct.price.toFixed(2)}</p>

      <br />

      <p>Yearly Revenue Average:</p>
      {Object.entries(yearlyRevAvrg).map((item, index) => (
        <p key={index}>
          {item[0]}: {item[1].toFixed(2)}%
        </p>
      ))}

      <br />

      <p>Yearly Revenue:</p>
      {Object.entries(yearlyRevenue).map((item, index) => (
        <p key={index}>
          {item[0]}: {item[1].toFixed(2)}%
        </p>
      ))}

      <br />

      <p>Yearly Sales:</p>
      {Object.entries(yearlySales).map((item, index) => (
        <p key={index}>
          {item[0]}: {item[1].toFixed(2)}%
        </p>
      ))}
    </div>
  ) : (
    "No stats available"
  );
};
