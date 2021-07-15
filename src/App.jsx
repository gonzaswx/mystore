import './App.css';
import { NavbarComponent } from "./components/NavBarComponent/Index";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route , Switch } from "react-router-dom";
import { Main } from './components/Conteiner/Main';

function App() {
 
  return (

      <BrowserRouter>

      <nav>

          <NavbarComponent/>

      </nav>
      
        <Switch>
          
          <Main/>

        </Switch>

        <footer>
         <h3>SuperCell </h3> 
         <h5> Industria argentina </h5>

        </footer>
      </BrowserRouter>
  );
}

export default App;

{/* */}


{/* <header className="App-header">
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
         <CardComponent productData = {product[0]}/>
        <CardComponent productData = {product[1]}/>
        <CardComponent productData = {product[2]}/>
        <CardComponent productData = {product[3]}/>
        <HomeConteiner/>
      </header>
    
    <> 
            <ItemDetailConteiner/>
            <ItemListConteiner/>
    </>  
    
    
    
    
    
    
    */}
