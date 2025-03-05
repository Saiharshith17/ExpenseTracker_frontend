import React from "react";
import PropTypes from "prop-types";
import "./Expense.css";

const Expense = ({ props }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="expense-container">
      <div className="left-content">
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
            alt="Expense"
            className="expense-image"
          />
        </div>
        <div className="merchant-info">
          <p className="merchant-text">{props.merchant}</p>
          <p className="date-text">{formatDate(props.createdAt)}</p>
        </div>
      </div>
      <div className="right-content">
        <p className="amount-text">
          {props.currency} {props.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

Expense.propTypes = {
  props: PropTypes.shape({
    key: PropTypes.string,
    merchant: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Expense;
