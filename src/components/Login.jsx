import { useState } from 'react';
import './css/Login.css';
import NavBar from './NavBar.jsx';
import { auth } from '../firebase/firebase.config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPasword] = useState('');

const submit = async(e) =>{
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}
return (
<>
{/* <NavBar/> */}
<main>
    <div class="login-container">
    <h2>Iniciar Sesión</h2>
        <form action="#" method="post">
        <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required></input>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" onChange={(e)=>setPasword(e.target.value)} required></input>

            <button type="submit" onClick={submit}>Iniciar Sesión</button>
        </form>
        <div>
            <a href="#">Olvidé mi Contraseña</a>
        </div>

        <div>
            <p>¿No tienes cuenta? <a href="#">Crear Usuario</a></p>
        </div>
    </div>
</main>
</>
)};

export default Login;