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
    // Send raw data to App for processing
    addTransaction(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          {...register("description", { required: true, minLength: 6 })}
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">At least 6 characters required</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          {...register("amount", { required: true })}
        />
        {errors.amount && <p className="text-danger">This field is required</p>}
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
        {errors.type && <p className="text-danger">This field is required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter custom category"
          {...register("category", { required: true })}
        />
        {errors.category && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          {...register("date", { required: true })}
        />
        {errors.date && <p className="text-danger">This field is required</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Note (optional)</label>
        <input type="text" className="form-control" {...register("note")} />
      </div>

      <button className="btn btn-primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default InputForm;
