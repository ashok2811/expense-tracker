import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancel(true);
  };

  const cancelHandler = (event) =>{
    props.onCancel(true);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

// const titleChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredTitle: event.target.value };
//   });
// };
// const amountChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredAmount: event.target.value };
//   });
// };
// const dateChangeHandler = (event) => {
//   setUserInput((prevState) => {
//     return { ...prevState, enteredDate: event.target.value };
//   });
// };
