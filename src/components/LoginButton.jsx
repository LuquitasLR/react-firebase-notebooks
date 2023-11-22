import './css/LoginButton.css'

const LoginButton = () => {
  const handleIniciarSesion = () => {
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Iniciando Sesión...');
  };

  return (
    <button onClick={handleIniciarSesion}>
      Iniciar Sesión
    </button>
  );
};

// hacer variables en el css "App" para unificar valores y colores. Sacar todos esos valores de los css de los componentes

export default LoginButton;