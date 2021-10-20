
import './App.css';
import Header from '../../components/Header';
import TransactionsTable from '../../components/TransactionsTable'

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <TransactionsTable/>
        </main>
    </div>
  );
}

export default App;
