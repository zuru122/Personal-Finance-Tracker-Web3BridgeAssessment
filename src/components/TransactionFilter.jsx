import React, { useState } from "react";

function TransactionFilter({ transactions, onFilter }) {
  const [category, setCategory] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    let filtered = [...transactions];

    // Filter by category
    if (category.trim() !== "") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by amount
    if (minAmount) {
      filtered = filtered.filter(
        (item) => Number(item.amount) >= Number(minAmount)
      );
    }
    if (maxAmount) {
      filtered = filtered.filter(
        (item) => Number(item.amount) <= Number(maxAmount)
      );
    }

    // Filter by date
    if (startDate) {
      filtered = filtered.filter((item) => item.date >= startDate);
    }
    if (endDate) {
      filtered = filtered.filter((item) => item.date <= endDate);
    }

    onFilter(filtered);
  };

  const handleReset = () => {
    setCategory("");
    setMinAmount("");
    setMaxAmount("");
    setStartDate("");
    setEndDate("");
    onFilter(transactions); // reset filter
  };

  return (
    <div className="mb-4 p-3 border rounded">
      <h5>Filter Transactions</h5>
      <div className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Min Amount"
            value={minAmount}
            onChange={(e) => setMinAmount(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Max Amount"
            value={maxAmount}
            onChange={(e) => setMaxAmount(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="col-md-1 d-grid">
          <button className="btn btn-primary" onClick={handleFilter}>
            Filter
          </button>
        </div>
      </div>
      <button className="btn btn-secondary mt-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default TransactionFilter;
