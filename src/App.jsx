import logo from './logo.svg';
import './App.css';
import { CardComponent } from "./components/CardComponent";
import { NavbarComponent } from "./components/NavBarComponent/Index";
import { NAME_App } from "./Utils/const";
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomeConteiner } from './Conteiner';

function App() {
  const product = [ {id: 1, title :"Camiseta Boca" , price: "$7800"},
                    {id: 2, title  :"Camiseta River" , price: "$6700"},
                    {id: 3, title  :"Campera Boca" , price: "$12800"},
                    {id: 4, title  :"Campera Barcelona" , price: "$15800"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>{NAME_App}</h1>
        <img src="/images/logo.png"/> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> React JavaScript </code>
        </p>
        <input type="hidden"/>
        <div style={{backgroundColor: "#eeeee"}}></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto
        </a>
        <hr/>
        <br/>
        <CardComponent productData = {product[0]}/>
        <CardComponent productData = {product[1]}/>
        <CardComponent productData = {product[2]}/>
        <CardComponent productData = {product[3]}/>
        <HomeConteiner/>
      </header>
    </div>
  );
}

export default App;
