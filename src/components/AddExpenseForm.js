import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_EXPENSE",
      payload: { name, cost: parseFloat(cost) },
    });
    setName("");
    setCost("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Nome</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <label for="cost">Custo</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;