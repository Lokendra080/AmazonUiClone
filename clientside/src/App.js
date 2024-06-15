import './App.css';
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import NewNavbar from './Components/NavBar/NewNavbar';
import SingIn from './Components/Signup_SignIn/SingIn';
import SingUp from './Components/Signup_SignIn/SingUp';
import Cart from './Components/Cart/Cart';
import BuyNow from './Components/BuyNow/BuyNow';

function App() {
  return (
    <>
      <Navbar />
      <NewNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SingIn />} />
        <Route path='/signup' element={<SingUp />} />
        <Route path='/getproducts/:id' element={<Cart />} />
        <Route path='/buynow' element={<BuyNow />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
