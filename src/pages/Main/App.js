import "./App.css";
import Header from "../../components/Header";
import TransactionsTable from "../../components/TransactionsTable";
import Resume from "../../components/Resume";
import ModalTransactions from "../../components/ModalTransactions";
import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(prevState => !prevState)
   
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionsTable />
        <div>
          <Resume />
          <div>
            <button className="btn-add" onClick={handleOpenModal}>Adicionar Registro</button>
          </div>
        </div>
      </main>
      {open && <ModalTransactions
      open={open} 
      setOpen={setOpen}
      handleOpenModal={handleOpenModal} />}
    </div>
  );
}

export default App;
