import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to Our Store!" />
    </div>
  );
};

export default App;
