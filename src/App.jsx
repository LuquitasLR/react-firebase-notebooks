import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Login from './components/Login.jsx';
import { useState } from 'react';
import { auth } from './firebase/firebase.config.js';
import { onAuthStateChanged } from 'firebase/auth';

function App () {
    const [user,setUser] = useState(null);
    onAuthStateChanged(auth,(firebaseUser)=>{

        if(firebaseUser){
            setUser(firebaseUser)
        }
        else{
            setUser(null)
        }
    })

    return (
        <CartProvider>
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={
        <Index title="Bienvenido a Moon Light" intro="Somos la tienda gaming mas grande de Argentina" buy="Compra lo que necesitas y te lo llevamos a la puerta de tu casa"/>}/>
        </Routes>
        <Login/>
        </BrowserRouter>
        </div>
        </CartProvider>
        

    )

}

export default App
