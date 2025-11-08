import { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import InputForm from "./components/InputForm";
import TransactionFilter from "./components/TransactionFilter";

function App() {
  const initialData = [];

  const [transactions, setTransactions] = useState(() => {
    const savedData = localStorage.getItem("financeData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => {
    const newTransaction = {
      id: Date.now(),
      description: data.description,
      amount: Number(data.amount),
      type: data.type,
      category: data.category,
      date: data.date,
      note: data.note || "",
    };

    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const downloadCSV = () => {
    const headers = ["Description,Amount,Type,Category,Date,Note"];

    const rows = transactions.map(
      (item) =>
        `${item.description},${item.amount},${item.type},${item.category},${
          item.date
        },${item.note ?? ""}`
    );

    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "finance_tracker.csv");
    link.click();
  };

  return (
    <div className="container mt-5">
      <InputForm addTransaction={addTransaction} />
      <TransactionFilter
        transactions={transactions}
        onFilter={(filtered) => setFilteredTransactions(filtered)}
      />
      <TransactionList
        items={filteredTransactions}
        deleteItem={deleteTransaction}
      />

      <button className="btn btn-success mb-3" onClick={downloadCSV}>
        Download CSV
      </button>
    </div>
  );
}

export default App;
