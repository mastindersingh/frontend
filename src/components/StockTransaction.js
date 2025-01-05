import React, { useState } from "react";
import httpClient from "../httpClient";

function StockTransaction() {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleBuy = async () => {
    try {
      await httpClient.post("//52.4.229.0:5555/buy_stock", {
        symbol: symbol,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      });
      alert("Stock purchased successfully!");
    } catch (error) {
      console.error("Error buying stock:", error);
      alert("Failed to purchase stock.");
    }
  };

  const handleSell = async () => {
    try {
      await httpClient.post("//52.4.229.0:5555/sell_stock", {
        symbol: symbol,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      });
      alert("Stock sold successfully!");
    } catch (error) {
      console.error("Error selling stock:", error);
      alert("Failed to sell stock.");
    }
  };

  return (
    <div>
      <h2>Stock Transaction</h2>
      <input
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleBuy}>Buy Stock</button>
      <button onClick={handleSell}>Sell Stock</button>
    </div>
  );
}

export default StockTransaction;

