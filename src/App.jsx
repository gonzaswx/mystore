import logo from './logo.svg';
import './App.css';
import { CardComponent } from "./components/CardComponent";
import { NavbarComponent } from "./components/NavBarComponent/Index";
import { NAME_App } from "./Utils/const";
import 'bootstrap/dist/css/bootstrap.min.css'
import { HomeConteiner } from './components/Conteiner';
import {getData} from './Utils/const'
import {useEffect, useState} from "react"
import { ItemListConteiner } from './components/Conteiner/ItemListConteiner';
import ItemDetailConteiner from './components/Conteiner/ItemDetailConteiner';


function App() {
 
  return (
    <> 
            <ItemDetailConteiner/>
            <ItemListConteiner/>
    </>  
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
      </header>*/}
