import './App.css'
import Rocket from './assets/rocket.png'

function App() {
  return (
    <>
      <div className="App">
        <div className="left">
          <img src={ Rocket } alt="" className="img" />
        </div>
        <div className="right">
          <div className="dados">
            <h1 className="title">FAÇA SEU LOGIN</h1>
            <label className='lab'>E-mail</label>
            <input placeholder='E-mail' type="text" className="email inp" />
            <label className='lab'>Senha</label>
            <input placeholder='Senha' type="password" className="senha inp" />
            <button className="button">LOGIN</button>
            <h1 className="register">Não tem login? <span className='span'>Cadastre-se</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
