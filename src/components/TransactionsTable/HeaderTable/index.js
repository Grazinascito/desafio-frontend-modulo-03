import "./style.css";
import arrowDown from "../../../assets/arrowDown.svg";
import arrowUp from "../../../assets/arrowUp.svg";
import { useState } from "react";

const HeaderTable = () => {
  const [changeArrow, setChangeArrow] = useState("date");
  const [order, setOrder] = useState("asc");

  const handleArrowIcon = (type) => {
    setChangeArrow(type)

    if(order === 'asc'){
        setOrder('desc')
    }else{
        setOrder('asc')
    }

  }

  return (
    <div className="table-head">
      <div className="column-title cursor-pointer" onClick={() => handleArrowIcon("date")}>
        <span>Data</span>
        {changeArrow === "date" && (
          <img src={order === 'asc' ? arrowDown:arrowUp} alt="change order table" />
        )}
      </div>
      <div className="column-title cursor-pointer" onClick={() => handleArrowIcon("weekDay")}>
        <span> Dia da semana</span>
        {changeArrow === "weekDay" && (
          <img src={order === 'asc' ? arrowDown:arrowUp} alt="change order table" />
        )}
      </div>
      <div className="column-title">
        <span>Descrição</span>
      </div>
      <div className="column-title">
        <span>Categoria</span>
      </div>
      <div className="column-title cursor-pointer" onClick={() => handleArrowIcon("value")}>
        <span>Valor</span>
        {changeArrow === "value" && (
           <img src={order === 'asc' ? arrowDown:arrowUp} alt="change order table" />
        )}
      </div>
      <div className="column-title"></div>
    </div>
  );
};

export default HeaderTable;
