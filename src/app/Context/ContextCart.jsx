"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = sessionStorage.getItem("orders");
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (error) {
        console.error("Error parsing saved orders:", error);
      }
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (product) => {
    const existing = orders.find((item) => item.id === product.id);
    if (existing) {
      setOrders((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setOrders((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setOrders((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearOrders = () => setOrders([]);

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, updateQuantity, clearOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
