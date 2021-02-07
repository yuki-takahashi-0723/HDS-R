import React from 'react'
import './style.css'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import { Hoom, Test } from './pages'

const App =()=>{
    return(

        <HashRouter>
            <Switch>
                <Route exact path='/' component={Hoom}/>
                <Route exact path='/test'component={Test}/>
            </Switch>
        </HashRouter>
  
    )
}

export default App