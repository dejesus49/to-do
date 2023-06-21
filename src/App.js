import './App.css';
// components
import Header from "./components/Header"
import AddItemForm from "./components/AddItemForm"
import List from "./components/List"

function App() {
  return (
    <div className = "App">
      <Header />
      <AddItemForm />
      <List />
    </div>
  );
}

export default App;
