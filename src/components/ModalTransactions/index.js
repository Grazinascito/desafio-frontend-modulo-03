import "./style.css";
import closeIcon from "../../assets/close-icon.svg";
import { useState } from "react";

const ModalTransactions = ({open, setOpen, handleOpenModal}) => {
  const [activeButton, setActiveButton] = useState("debit");


  return (
    <div className={!open ? "none": "backdrop"}>
      <div className="modal-content modal-storage">
        <img onClick={handleOpenModal} className="close-icon" src={closeIcon} alt="close icon" />
        <h2>Adicionar Registro</h2>
        <div className="container-buttons">
          <button
            className={activeButton === "credit" ? "btn-credit btn-empty" : "btn-empty"}
            onClick={() => setActiveButton('credit')}
          >
            Entrada
          </button>
          <button
            className={activeButton === "debit" ? "btn-debit btn-empty" : "btn-empty"}
            onClick={() => setActiveButton('debit')}
          >
            Saída
          </button>
        </div>
        <form className="container-inputs">
          <div>
            <label htmlFor="">Valor</label>
            <input type="Number" />
          </div>
          <div>
            <label htmlFor="">Categoria</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Data</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Descrição</label>
            <input type="text" />
          </div>
        </form>
          <div className="container-btn-insert">
            <button onClick={handleOpenModal}>Confirmar</button>
          </div>
      </div>
    </div>
  );
};

export default ModalTransactions;
