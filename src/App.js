
import { AddList } from './components/AddList.comp';
import { ItemProvider } from './components/ItemContext.comp';
import { ItemList } from "./components/ItemList.comp";
import { Navbar } from "./components/Navbar.com";

function App() {
  return (
    <ItemProvider>
        <div className="App">
            <h1>Context API</h1>
            <Navbar />
            <AddList />
            <ItemList />
        </div>
    </ItemProvider>
  );
}

export default App;
