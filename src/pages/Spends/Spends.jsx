import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import Expense from "../../components/Expense";
import "./Spends.css"; // Import CSS for styles

const Spends = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
    //   const SERVER_BASE_URL =
    //     "http://Expens-KongA-ChasZNdaOM4K-1208155051.ap-south-1.elb.amazonaws.com";
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("No access token found.");
      }

      const response = await fetch(`http://localhost:9898/expense/v1/getExpense`, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Token is:", accessToken);

      if (!response.ok) {
        throw new Error(`Failed to fetch expenses. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Expenses fetched:", data);

      const transformedExpenses = data.map((expense, index) => ({
        key: index + 1,
        amount: expense["amount"],
        merchant: expense["merchant"],
        currency: expense["currency"],
        createdAt: new Date(expense["created_at"]),
      }));
      console.log("Transformed expenses:", transformedExpenses);

      setExpenses(transformedExpenses);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
      console.error("Error fetching expenses:", err);
      setIsLoading(false);
    }
  };

  return (
    <div className="spends-container">
      <Heading heading="Spends" />

      <div className="spends-box">
        {isLoading ? (
          <p className="loading-text">Loading expenses...</p>
        ) : error ? (
          <p className="error-text">Error: {error}</p>
        ) : (
          <div className="expenses">
            {expenses.map((expense) => (
              <Expense key={expense.key} {...expense} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Spends;
