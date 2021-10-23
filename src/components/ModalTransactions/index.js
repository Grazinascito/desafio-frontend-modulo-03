import "./style.css";
import closeIcon from "../../assets/close-icon.svg";
import { useState, useEffect} from "react";
import InputMask from "react-input-mask";
import { format } from "date-fns";
import {ptBR} from "date-fns/locale";

const ModalTransactions = ({ open, setOpen, handleOpenModal }) => {
  
  const formValues = {
    value: 0,
    date: "",
    description: "",
    category: "",
  };
  const [activeButton, setActiveButton] = useState("debit");
  const [form, setForm] = useState(formValues);

  useEffect(() => {
    if(open){
      setForm(formValues)
    }
  }, [open])

  const handleChangeModal = (target) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  const handleBody = async () => {
    const [day, month, year] = form.date.split('/');
    const selectedDate = new Date(`${month}/${day}/${year}`);
  
  console.log(selectedDate)

  const bodyResponse = {
    date: selectedDate,
    week_day: format(selectedDate, 'eee', {
      locale: ptBR
    }),
    description: form.description,
    value: form.value,
    category: form.category,
    type: activeButton,
  };

  console.log(bodyResponse)

 const response = await fetch('http://localhost:3334/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyResponse)
  });

  const data = await response.json();
  console.log(data)
}


  return (
    <div className={!open ? "none" : "backdrop"}>
      <div className="modal-content modal-storage">
        <img
          onClick={handleOpenModal}
          className="close-icon"
          src={closeIcon}
          alt="close icon"
        />
        <h2>Adicionar Registro</h2>
        <div className="container-buttons">
          <button
            className={
              activeButton === "credit" ? "btn-credit btn-empty" : "btn-empty"
            }
            onClick={() => setActiveButton("credit")}
          >
            Entrada
          </button>
          <button
            className={
              activeButton === "debit" ? "btn-debit btn-empty" : "btn-empty"
            }
            onClick={() => setActiveButton("debit")}
          >
            Saída
          </button>
        </div>
        <form onSubmit={handleSubmit} className="container-inputs">
          <div>
            <label>Valor</label>
            <input
              type="Number"
              name="value"
              value={form.value}
              onChange={(event) => handleChangeModal(event.target)}
            />
          </div>
          <div>
            <label>Categoria</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={(event) => handleChangeModal(event.target)}
            />
          </div>
          <div>
            <label>Data</label>

            <InputMask
              mask="99/99/9999"
              type="text"
              name="date"
              value={form.date}
              onChange={(event) => handleChangeModal(event.target)}
            />
          </div>
          <div>
            <label>Descrição</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={(event) => handleChangeModal(event.target)}
            />
          </div>
        </form>
        <div className="container-btn-insert">
          <button onClick={() => {
            handleOpenModal()
            handleBody()
            
            }}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalTransactions;
