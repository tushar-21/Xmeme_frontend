import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./core/Home"
import updateMeme from './core/updateMeme'

 const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/memes/update/:memeId" exact component={updateMeme}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;