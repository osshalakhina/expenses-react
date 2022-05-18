import React, { useState } from "react";
import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHansdler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHansdler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
