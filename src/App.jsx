import { useState } from "react";
import TransactionList from "./components/TransactionList";

function App() {
  const [financeTracker, setFinanceTracker] = useState([
    {
      id: 1,
      description: "2 packs of sugar",
      amount: 50,
      type: "expense",
      category: "Groceries",
      date: "2025-11-08",
      note: "For baking",
    },
    {
      id: 2,
      description: "Salary for October",
      amount: 3000,
      type: "income",
      category: "Salary",
      date: "2025-11-01",
      note: "",
    },
    {
      id: 3,
      description: "Electricity bill",
      amount: 120,
      type: "expense",
      category: "Utilities",
      date: "2025-11-05",
      note: "Paid online",
    },
    {
      id: 4,
      description: "Freelance project",
      amount: 800,
      type: "income",
      category: "Freelance",
      date: "2025-11-07",
      note: "Payment received via PayPal",
    },
    {
      id: 5,
      description: "Gym membership",
      amount: 60,
      type: "expense",
      category: "Health",
      date: "2025-11-03",
      note: "",
    },
  ]);

  const deleteItem = (id) => {
    setFinanceTracker(financeTracker.filter((item) => item.id !== id));
  };
  return (
    <>
      <TransactionList items={financeTracker} deleteItem={deleteItem} />
    </>
  );
}

export default App;
