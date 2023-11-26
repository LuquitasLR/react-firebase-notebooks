import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App () {

    return (
        <CartProvider>
        <div>
        <BrowserRouter>
        <Routes>

        </Routes>
        </BrowserRouter>
        </div>
        </CartProvider>
        

    )

}

export default App
