import React from "react";

const TransactionList = ({ items, deleteItem }) => {
  const total = items.reduce((acc, item) => {
    return item.type === "expense"
      ? acc - Number(item.amount)
      : acc + Number(item.amount);
  }, 0);

  return (
    <div className="table-responsive">
      <table className="table table-bordered align-middle text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
            <th scope="col">Notes</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.amount}</td>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
              <td>{item.note || "-"}</td>

              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="7">
              <h3>Total Balance: ${total.toFixed(2)}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
