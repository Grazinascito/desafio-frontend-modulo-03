import "./App.css";
import Header from "../../components/Header";
import TransactionsTable from "../../components/TransactionsTable";
import Resume from "../../components/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TransactionsTable />
        <div>
          <Resume />
          <div>
            <button className="btn-add">Adicionar Registro</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
