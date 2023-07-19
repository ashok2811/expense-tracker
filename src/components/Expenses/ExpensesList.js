import React from "react"
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props)=> {
    
  let expensesContent =  <p className="blank-expense">No Expenses Found!</p> ;

  if(props.item.length==0){
    return <h2 className="expenses-list__fallback">Found no expense</h2>
  }
    return (<ul className="expenses-list">
    {props.item.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
      }
    </ul>)
};


export default ExpensesList;