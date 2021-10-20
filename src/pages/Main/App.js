
import './App.css';
import Header from '../../components/Header';
import TransactionsTable from '../../components/TransactionsTable';
import Resume from '../../components/Resume';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <TransactionsTable/>
          <Resume />
        </main>
    </div>
  );
}

export default App;
