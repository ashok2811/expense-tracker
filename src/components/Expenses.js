import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
