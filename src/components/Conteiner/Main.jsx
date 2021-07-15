import {React, useState, useEffect} from 'react'
import { ItemListConteiner } from './ItemListConteiner'
import { ContactConteiner } from './ContactConteiner'
import { Switch, Route } from 'react-router-dom'
import ItemDetailConteiner from './ItemDetailConteiner'
import { Home } from './HomeConteiner/Home'

export const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
            <Route path="/productos" exact>
                    <ItemListConteiner/>
            </Route>
                <Route path="/contacto" component={ContactConteiner}/>
            <Route path="/productos/:product_id">
                <ItemDetailConteiner/>
            </Route>

            </Switch>
        </>
    )
}

              