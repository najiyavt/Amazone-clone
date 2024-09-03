import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import Footer from './Components/Footer/Footer';
import HomeDetails from './Screen/HomeScreen/HomeDetails/HomeDetails';
import { Route,Router, Routes } from 'react-router-dom';
import Products from './Screen/Products/Products';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/products' element={<Products/>} />
    </Routes>
    
    </div>
  );
}

export default App;
