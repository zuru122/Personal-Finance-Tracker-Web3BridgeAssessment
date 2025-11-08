import React from "react";
import { useForm } from "react-hook-form";

function InputForm({ addTransaction }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTransaction = {
      id: Date.now(), // unique ID
      description: data.description,
      amount: Number(data.amount),
      type: data.type, // income or expense
      category: data.category,
      date: data.date,
      note: data.note || "",
    };
    addTransaction(newTransaction);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description", { minLength: 6, required: true })}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            This field requires at least 6 characters
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { required: true })}
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Type</label>
        <select
          className="form-select"
          {...register("type", { required: true })}
        >
          <option value="">Select type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.type?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-select"
          {...register("category", { required: true })}
        >
          <option value="">Select category</option>
          <option value="Groceries">Groceries</option>
          <option value="Salary">Salary</option>
          <option value="Utilities">Utilities</option>
          <option value="Freelance">Freelance</option>
          <option value="Health">Health</option>
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          id="date"
          type="date"
          className="form-control"
          {...register("date", { required: true })}
        />
        {errors.date?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="note" className="form-label">
          Note (optional)
        </label>
        <input
          id="note"
          type="text"
          className="form-control"
          {...register("note")}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default InputForm;
